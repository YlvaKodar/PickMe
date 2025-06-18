/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Interaktiv strength list
    const strengthHeaders = document.querySelectorAll('.strength-header');
    if (strengthHeaders.length > 0) {
        strengthHeaders.forEach(header => {
            header.addEventListener('click', function() {
                const targetId = this.getAttribute('data-target');
                const content = document.getElementById(targetId);

                if (content) {
                    // Toggle locked state
                    if (content.classList.contains('locked')) {
                        content.classList.remove('locked', 'show');
                        this.classList.remove('expanded');
                    } else {
                        content.classList.add('locked', 'show');
                        this.classList.add('expanded');

                        // Remove locked state from other items
                        strengthHeaders.forEach(otherHeader => {
                            if (otherHeader !== this) {
                                const otherId = otherHeader.getAttribute('data-target');
                                const otherContent = document.getElementById(otherId);
                                if (otherContent) {
                                    otherContent.classList.remove('locked', 'show');
                                    otherHeader.classList.remove('expanded');
                                }
                            }
                        });
                    }
                }
            });
        });
    }

    // Dynamisk button text ...
    const toggleButtons = document.querySelectorAll('[data-bs-text-collapsed]');
    if (toggleButtons.length > 0) {
        toggleButtons.forEach(button => {
            const target = document.querySelector(button.getAttribute('data-bs-target'));
            if (target) {
                const collapsedText = button.getAttribute('data-bs-text-collapsed');
                const expandedText = button.getAttribute('data-bs-text-expanded');

                target.addEventListener('shown.bs.collapse', function() {
                    button.textContent = expandedText;
                });

                target.addEventListener('hidden.bs.collapse', function() {
                    button.textContent = collapsedText;
                });
            }
        });
    }

    // Read more buttons
    const readMoreCodeBtn = document.querySelector('[data-bs-target="#readMoreCode"]');
    const readMoreCodeContent = document.getElementById('readMoreCode');

    if (readMoreCodeBtn && readMoreCodeContent) {
        readMoreCodeContent.addEventListener('show.bs.collapse', function() {
            readMoreCodeBtn.innerHTML = '<i class="fas fa-chevron-up me-1"></i>Visa mindre';
        });

        readMoreCodeContent.addEventListener('hide.bs.collapse', function() {
            readMoreCodeBtn.innerHTML = '<i class="fas fa-chevron-down me-1"></i>Läs mer om varför jag började koda ...';
        });
    }

    const readMoreNpfBtn = document.querySelector('[data-bs-target="#readMoreNpf"]');
    const readMoreNpfContent = document.getElementById('readMoreNpf');

    if (readMoreNpfBtn && readMoreNpfContent) {
        readMoreNpfContent.addEventListener('show.bs.collapse', function() {
            readMoreNpfBtn.innerHTML = '<i class="fas fa-chevron-up me-1"></i>Visa mindre';
        });

        readMoreNpfContent.addEventListener('hide.bs.collapse', function() {
            readMoreNpfBtn.innerHTML = '<i class="fas fa-chevron-down me-1"></i>Läs mer om det ...';
        });
    }
});
