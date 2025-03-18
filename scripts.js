document.addEventListener('DOMContentLoaded', function() {
    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const formValues = {};
            
            for (let [key, value] of formData.entries()) {
                formValues[key] = value;
            }
            
            // In a real implementation, you would send this data to a server
            // For this prototype, we'll just show a success message
            alert('Message sent! Thank you for reaching out.');
            contactForm.reset();
        });
    }
    
    // Create directory for images if not exists (for GitHub Pages setup)
    function createPlaceholderImages() {
        const imagePaths = [
            'images/detour.jpg',
            'images/teahaus.jpg',
            'images/noisette.jpg',
            'images/friendlier.jpg'
        ];
        
        // Log instructions for setting up images
        console.log('For GitHub Pages deployment:');
        console.log('1. Create an "images" directory in your repository');
        console.log('2. Add the following image files to that directory:');
        imagePaths.forEach(path => console.log(`   - ${path}`));
    }
    
    // Call this function when the page loads
    createPlaceholderImages();
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // This would be implemented for actual anchor links
            // For the prototype, we'll just prevent default behavior
            e.preventDefault();
        });
    });
});