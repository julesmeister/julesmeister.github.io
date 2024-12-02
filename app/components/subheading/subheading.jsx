import { Fragment } from 'react';
import { classes } from '~/utils/style';
import { Heading } from '~/components/heading';
import styles from './subheading.module.css';

export const SubHeading = ({
  children,
  level = 6,
  as,
  align = 'auto',
  weight = 'regular',
  className,
  ...rest
}) => {
  return (
    <Heading
      className={classes(styles.subheading, className)}
      as={as || `h${level}`}
      level={level}
      align={align}
      weight={weight}
      {...rest}
    >
      {children}
    </Heading>
  );
};
