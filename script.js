document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission handler
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = this.querySelector('input[name="name"]').value.trim();
        const email = this.querySelector('input[name="email"]').value.trim();
        const message = this.querySelector('textarea[name="message"]').value.trim();
        
        if (!name || !email || !message) {
            alert('Please fill out all fields');
            return;
        }
        
        // In a real-world scenario, you would typically send this data to a backend service
        // For GitHub Pages, you might use a service like Formspree or Netlify Forms
        alert('Thank you for your message! I will get back to you soon.');
        
        // Reset form
        this.reset();
    });

    // Optional: Add subtle animations or interactions
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Add fade-in animations to sections
    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
});
