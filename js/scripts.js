/*!
* Start Bootstrap - Resume v7.0.6 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

// Language toggler stuff
let currentLanguage = 'sv';

function toggleLanguage() {
    currentLanguage = currentLanguage === 'sv' ? 'en' : 'sv';
    updateLanguage();
    updateLanguageToggle();
    localStorage.setItem('preferred-language', currentLanguage);
    document.documentElement.lang = currentLanguage;
}

function updateLanguage() {
    const elementsWithLang = document.querySelectorAll('[data-sv][data-en]');

    elementsWithLang.forEach(element => {
        const text = element.getAttribute(`data-${currentLanguage}`);
        if (text) {
            element.innerHTML = text;
        }
    });


    updateButtonTexts();
}

function updateLanguageToggle() {
    const langElement = document.getElementById('currentLang');

    if (langElement) {
        langElement.textContent = currentLanguage === 'sv' ? 'SV' : 'EN';
    }
}

function updateButtonTexts() {
    const readMoreCodeBtn = document.querySelector('[data-bs-target="#readMoreCode"]');
    const readMoreNpfBtn = document.querySelector('[data-bs-target="#readMoreNpf"]');

    if (readMoreCodeBtn) {
        const codeContent = document.getElementById('readMoreCode');
        const isExpanded = codeContent && codeContent.classList.contains('show');

        if (currentLanguage === 'sv') {
            readMoreCodeBtn.innerHTML = isExpanded
                ? '<i class="fas fa-chevron-up me-1"></i>Visa mindre'
                : '<i class="fas fa-chevron-down me-1"></i>Mer om varför jag började koda ...';
        } else {
            readMoreCodeBtn.innerHTML = isExpanded
                ? '<i class="fas fa-chevron-up me-1"></i>Show less'
                : '<i class="fas fa-chevron-down me-1"></i>More about why I started coding ...';
        }
    }

    if (readMoreNpfBtn) {
        const npfContent = document.getElementById('readMoreNpf');
        const isExpanded = npfContent && npfContent.classList.contains('show');

        if (currentLanguage === 'sv') {
            readMoreNpfBtn.innerHTML = isExpanded
                ? '<i class="fas fa-chevron-up me-1"></i>Visa mindre'
                : '<i class="fas fa-chevron-down me-1"></i>Mer om det ...';
        } else {
            readMoreNpfBtn.innerHTML = isExpanded
                ? '<i class="fas fa-chevron-up me-1"></i>Show less'
                : '<i class="fas fa-chevron-down me-1"></i>More about that ...';
        }
    }
}

function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && savedLanguage !== currentLanguage) {
        currentLanguage = savedLanguage;
        updateLanguage();
        updateLanguageToggle();
        document.documentElement.lang = currentLanguage;
    }
}

window.addEventListener('DOMContentLoaded', event => {

    // Initialize language
    initializeLanguage();

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

    // Dynamic button text ...
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
    const readMoreCodeContent = document.getElementById('readMoreCode');
    const readMoreNpfContent = document.getElementById('readMoreNpf');

    if (readMoreCodeContent) {
        readMoreCodeContent.addEventListener('shown.bs.collapse', updateButtonTexts);
        readMoreCodeContent.addEventListener('hidden.bs.collapse', updateButtonTexts);
    }

    if (readMoreNpfContent) {
        readMoreNpfContent.addEventListener('shown.bs.collapse', updateButtonTexts);
        readMoreNpfContent.addEventListener('hidden.bs.collapse', updateButtonTexts);
    }
});
