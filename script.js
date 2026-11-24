document.addEventListener('DOMContentLoaded', () => {
    // Booking Form Submission Handler
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('🎉 JazakAllah! Your fruit order has been successfully booked.');
            bookingForm.reset();
        });
    }

    // Contact Form Submission Handler
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('✅ Thank you! Your message has been sent successfully.');
            contactForm.reset();
        });
    }
});