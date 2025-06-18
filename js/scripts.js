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
});
