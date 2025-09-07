document.addEventListener("DOMContentLoaded", () => {
    // Remove .no-js class for progressive enhancement
    document.body.classList.remove('no-js');

    // Auto-update footer year
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    // Enquire button toggle
    const enquireBtn = document.querySelector(".enquire-btn");
    const contactForm = document.querySelector(".contact-form");

    if (enquireBtn && contactForm) {
        enquireBtn.addEventListener("click", () => {
            contactForm.classList.toggle("show");
        });
    }
});