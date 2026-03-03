/**
 * Biorezonance Olšany - Client-side Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initFAQ();
    initScrollAnimations();
    initForm();
    fixTypography();
    initLightbox();
    initScrollTop();
});

/**
 * Mobile Navigation Toggle
 */
function initNavigation() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // 1. Otevírání/zavírání hamburger menu
    if (toggle && navLinks) {
        toggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            navLinks.classList.toggle('active');
        });

        // Zavření při kliknutí "vedle" menu
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !toggle.contains(e.target)) {
                navLinks.classList.remove('active');
                navLinks.style.display = 'none';
                setTimeout(() => navLinks.style.display = '', 50);
            }
        });
    }

    // 2. Plynulé scrollování a garance okamžitého zavření roletky
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Bez ohledu na zařízení okamžitě sbalit mobilní/tabletové menu
            if (navLinks && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }

            // Plynule srolovat až o zlomek vteřiny později - umožní prohlížeči nejprve opticky překreslit zmizení menu!
            const targetId = this.getAttribute('href');
            if (targetId === '#') return; // prevence chybné kotvy

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }, 50); // 50ms pauza pro prohlížeče na tabletech/Apple
            }
        });
    });
}

/**
 * FAQ Accordion
 */
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(i => i.classList.remove('active'));

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

/**
 * Reveal elements on scroll
 */
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .animate-fade-in').forEach(el => {
        observer.observe(el);
    });
}

/**
 * Contact Form with Honeypot
 */
function initForm() {
    const form = document.getElementById('orderForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Honeypot check
        const honeypot = form.querySelector('input[name="website"]').value;
        if (honeypot) {
            console.warn('Bot detected via honeypot');
            return;
        }

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        console.log('Form submitted:', data);
        alert('Děkujeme za váš zájem! Brzy se vám ozveme.');
        form.reset();
    });
}

/**
 * Typography fixes (Czech non-breaking spaces)
 */
function fixTypography() {
    const containers = document.querySelectorAll('p, h1, h2, h3, li, blockquote');
    const prepositions = ['v', 's', 'z', 'u', 'o', 'k', 'a', 'i'];

    containers.forEach(container => {
        let html = container.innerHTML;

        // Fix single letter prepositions
        prepositions.forEach(prep => {
            const regex = new RegExp(`\\s(${prep})\\s`, 'gi');
            html = html.replace(regex, ` $1&nbsp;`);
        });

        // Fix units (Kč)
        html = html.replace(/(\d)\s(Kč)/g, '$1&nbsp;$2');

        // Fix dates (1. 1. 2026)
        html = html.replace(/(\d\.)\s(\d\.)\s(\d{4})/g, '$1&nbsp;$2&nbsp;$3');

        container.innerHTML = html;
    });
}

/**
 * Lightbox Gallery with Grouping
 */
function initLightbox() {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('imgFull');
    const captionText = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');

    if (!modal) return;

    let currentGalleryGroup = [];
    let currentIndex = 0;

    function updateModal(index) {
        if (index < 0) index = currentGalleryGroup.length - 1;
        if (index >= currentGalleryGroup.length) index = 0;

        currentIndex = index;
        const img = currentGalleryGroup[currentIndex];

        modalImg.style.opacity = '0';
        setTimeout(() => {
            modalImg.src = img.src;
            captionText.innerHTML = img.alt;
            modalImg.style.opacity = '1';
        }, 150);

        // Hide arrows if only one image in group
        if (currentGalleryGroup.length <= 1) {
            if (prevBtn) prevBtn.style.display = 'none';
            if (nextBtn) nextBtn.style.display = 'none';
        } else {
            if (prevBtn) prevBtn.style.display = 'flex';
            if (nextBtn) nextBtn.style.display = 'flex';
        }
    }

    // Target all expandable images
    const allExpandable = document.querySelectorAll('.gallery-grid img, .photo-gallery img, .plain-image img');

    allExpandable.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function () {
            // Determine the group: find the nearest parent that is a gallery container
            const container = this.closest('.gallery-grid, .photo-gallery, .plain-image');
            if (container) {
                currentGalleryGroup = Array.from(container.querySelectorAll('img'));
                currentIndex = currentGalleryGroup.indexOf(this);
            } else {
                currentGalleryGroup = [this];
                currentIndex = 0;
            }

            modal.style.display = 'flex';
            updateModal(currentIndex);
            document.body.style.overflow = 'hidden';
        });
    });

    if (closeBtn) {
        closeBtn.onclick = function () {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    if (prevBtn) {
        prevBtn.onclick = (e) => {
            e.stopPropagation();
            updateModal(currentIndex - 1);
        };
    }

    if (nextBtn) {
        nextBtn.onclick = (e) => {
            e.stopPropagation();
            updateModal(currentIndex + 1);
        };
    }

    modal.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    document.addEventListener('keydown', (e) => {
        if (modal.style.display !== 'flex') return;

        if (e.key === 'Escape') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        } else if (e.key === 'ArrowLeft' && currentGalleryGroup.length > 1) {
            updateModal(currentIndex - 1);
        } else if (e.key === 'ArrowRight' && currentGalleryGroup.length > 1) {
            updateModal(currentIndex + 1);
        }
    });
}

/**
 * Scroll to Top Button Logic
 */
function initScrollTop() {
    const btn = document.getElementById('scrollTop');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
