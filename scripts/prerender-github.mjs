import { spawn } from 'node:child_process';
import {
  cp,
  mkdir,
  rm,
  writeFile,
} from 'node:fs/promises';
import path from 'node:path';

const projectRoot =
  process.cwd();

const clientDirectory =
  path.join(
    projectRoot,
    'build',
    'client'
  );

const outputDirectory =
  path.join(
    projectRoot,
    'build',
    'github-pages'
  );

const serverOrigin =
  'http://127.0.0.1:8788';

const routes = [
  '/',

  '/home',
  '/certificates',
  '/contact',
  '/uses',

  '/privacy/sangfroid',

  '/articles',
  '/articles/finding-my-way-back-to-tech',
  '/articles/from-salesforce-to-personal-projects',
  '/articles/land-in-germany',
  '/articles/pivoting-to-salesforce',
  '/articles/shift-focus',
  '/articles/teaching-german-tech',

  '/projects/contact-management-app',
  '/projects/airlineCrewScheduling',
  '/projects/blueprintjs_flutter',
  '/projects/orbitandchillmobile',
  '/projects/deutschcraftchat',
  '/projects/lotelreactnative',
  '/projects/testmanshipwebv2',
  '/projects/orbitandchill',
  '/projects/rent-a-friend',
  '/projects/deutschcraft',
  '/projects/lotelkotlin',
  '/projects/testmanship',
  '/projects/sweldo-old',
  '/projects/sangfroid',
  '/projects/cTrader',
  '/projects/sweldo',
  '/projects/lotel',
];

const sleep =
  milliseconds =>
    new Promise(
      resolve =>
        setTimeout(
          resolve,
          milliseconds
        )
    );

async function waitForServer() {
  const maximumAttempts =
    60;

  for (
    let attempt = 1;
    attempt <= maximumAttempts;
    attempt += 1
  ) {
    try {
      const response =
        await fetch(
          serverOrigin,
          {
            redirect: 'follow',
          }
        );

      if (
        response.ok
      ) {
        console.log(
          `Wrangler server is ready after ${attempt} attempt(s).`
        );

        return;
      }
    } catch {
      /*
       * Wrangler is still starting.
       */
    }

    await sleep(
      1_000
    );
  }

  throw new Error(
    `Wrangler did not become available at ${serverOrigin} within ${maximumAttempts} seconds.`
  );
}

function getOutputFile(
  route
) {
  if (
    route === '/'
  ) {
    return path.join(
      outputDirectory,
      'index.html'
    );
  }

  const normalizedRoute =
    route.replace(
      /^\/+|\/+$/g,
      ''
    );

  return path.join(
    outputDirectory,
    normalizedRoute,
    'index.html'
  );
}

function makeGitHubPagesHtml(
  html
) {
  const githubPagesNavigationScript =
    `
<script>
(function () {
  function normalizeInternalUrl(url) {
    if (url.origin !== window.location.origin) {
      return null;
    }

    const pathname = url.pathname;

    if (
      pathname.startsWith('/assets/') ||
      pathname.startsWith('/api/') ||
      pathname.includes('.') ||
      pathname === '/'
    ) {
      return url.href;
    }

    if (!pathname.endsWith('/')) {
      url.pathname = pathname + '/';
    }

    return url.href;
  }

  document.addEventListener(
    'click',
    function (event) {
      const anchor =
        event.target.closest('a');

      if (!anchor) return;
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;

      if (
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      if (
        anchor.target &&
        anchor.target !== '_self'
      ) {
        return;
      }

      if (
        anchor.hasAttribute('download')
      ) {
        return;
      }

      const href =
        anchor.getAttribute('href');

      if (!href) return;
      if (href.startsWith('#')) return;
      if (href.startsWith('mailto:')) return;
      if (href.startsWith('tel:')) return;
      if (href.startsWith('javascript:')) return;

      const url =
        new URL(
          anchor.href,
          window.location.href
        );

      if (
        url.origin !==
        window.location.origin
      ) {
        return;
      }

      const destination =
        normalizeInternalUrl(
          url
        );

      if (!destination) return;

      event.preventDefault();
      event.stopImmediatePropagation();

      window.location.assign(
        destination
      );
    },
    true
  );
})();
</script>`;

  return html
    .replaceAll(
      'https://julesmeister.pages.dev',
      'https://julesmeister.github.io'
    )
    .replaceAll(
      'action="/api/set-theme"',
      'action="https://julesmeister.pages.dev/api/set-theme"'
    )
    .replace(
      '</body>',
      `${githubPagesNavigationScript}</body>`
    );
}

async function prerenderRoute(
  route
) {
  const staticRoute =
    route === '/'
      ? '/'
      : `${route.replace(/\/+$/, '')}/`;

  const requestUrl =
    `${serverOrigin}${staticRoute}`;

  console.log(
    `Prerendering ${requestUrl}`
  );

  const response =
    await fetch(
      requestUrl,
      {
        redirect: 'follow',
        headers: {
          'User-Agent':
            'GitHub-Pages-Prerender/1.0',
        },
      }
    );

  if (
    !response.ok
  ) {
    throw new Error(
      `Prerender failed for ${staticRoute}: ${response.status} ${response.statusText}`
    );
  }

  const contentType =
    response.headers.get(
      'content-type'
    ) ?? '';

  if (
    !contentType.includes(
      'text/html'
    )
  ) {
    throw new Error(
      `Expected HTML for ${staticRoute}, but received "${contentType}".`
    );
  }

  const responseHtml =
    await response.text();

  const html =
    makeGitHubPagesHtml(
      responseHtml
    );

  const outputFile =
    getOutputFile(
      route
    );

  await mkdir(
    path.dirname(
      outputFile
    ),
    {
      recursive: true,
    }
  );

  await writeFile(
    outputFile,
    html,
    'utf8'
  );

  console.log(
    `Created ${path.relative(projectRoot, outputFile)}`
  );
}

async function main() {
  await rm(
    outputDirectory,
    {
      recursive: true,
      force: true,
    }
  );

  await mkdir(
    outputDirectory,
    {
      recursive: true,
    }
  );

  await cp(
    clientDirectory,
    outputDirectory,
    {
      recursive: true,
    }
  );

  const wranglerCommand =
    process.platform === 'win32'
      ? path.join(
          projectRoot,
          'node_modules',
          '.bin',
          'wrangler.cmd'
        )
      : path.join(
          projectRoot,
          'node_modules',
          '.bin',
          'wrangler'
        );

  const wrangler =
    spawn(
      wranglerCommand,
      [
        'pages',
        'dev',
        './build/client',
        '--ip',
        '127.0.0.1',
        '--port',
        '8788',
      ],
      {
        cwd:
          projectRoot,
        env: {
          ...process.env,
          SESSION_SECRET:
            process.env.SESSION_SECRET ??
            'github-pages-prerender-build-only-secret',
        },
        stdio: [
          'ignore',
          'pipe',
          'pipe',
        ],
        shell:
          process.platform === 'win32',
      }
    );

  wrangler.stdout.on(
    'data',
    data => {
      process.stdout.write(
        `[wrangler] ${data}`
      );
    }
  );

  wrangler.stderr.on(
    'data',
    data => {
      process.stderr.write(
        `[wrangler] ${data}`
      );
    }
  );

  let wranglerExited =
    false;

  wrangler.on(
    'exit',
    code => {
      wranglerExited =
        true;

      if (
        code !== 0 &&
        code !== null
      ) {
        console.error(
          `Wrangler exited unexpectedly with code ${code}.`
        );
      }
    }
  );

  try {
    await waitForServer();

    for (
      const route of routes
    ) {
      if (
        wranglerExited
      ) {
        throw new Error(
          'Wrangler exited before prerendering completed.'
        );
      }

      await prerenderRoute(
        route
      );
    }

    const homeResponse =
      await fetch(
        serverOrigin
      );

    if (
      !homeResponse.ok
    ) {
      throw new Error(
        `Unable to build GitHub Pages fallback: ${homeResponse.status} ${homeResponse.statusText}`
      );
    }

    const homeHtml =
      await homeResponse.text();

    const notFoundHtml =
      makeGitHubPagesHtml(
        homeHtml
      );

    await writeFile(
      path.join(
        outputDirectory,
        '404.html'
      ),
      notFoundHtml,
      'utf8'
    );

    await writeFile(
      path.join(
        outputDirectory,
        '.nojekyll'
      ),
      '',
      'utf8'
    );

    console.log('');
    console.log(
      'GitHub Pages prerender completed successfully.'
    );

    console.log(
      `Output: ${outputDirectory}`
    );

    console.log(
      `Routes: ${routes.length}`
    );
  } finally {
    if (
      !wranglerExited
    ) {
      wrangler.kill(
        'SIGTERM'
      );
    }
  }
}

main()
  .catch(
    error => {
      console.error('');
      console.error(
        'GitHub Pages prerender failed.'
      );

      console.error(
        error
      );

      process.exitCode =
        1;
    }
  );