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

    var portfolioModal = document.getElementById('portfolioModal');
    if (!portfolioModal) return;

    portfolioModal.addEventListener('show.bs.modal', function (event) {
        var button = event.relatedTarget; // the clicked portfolio item
        if (!button) return;

        var title = button.getAttribute('data-title') || '';
        var img = button.getAttribute('data-img') || '';
        var desc = button.getAttribute('data-description') || '';
        var link = button.getAttribute('data-link') || '';

        portfolioModal.querySelector('.modal-title').textContent = title;

        var modalImage = portfolioModal.querySelector('#modalImage');
        modalImage.src = img;
        modalImage.alt = title || 'Project image';
        modalImage.style.cursor = link ? 'pointer' : 'default';

        // clicking the image opens the external link in a new tab
        modalImage.onclick = function () {
            if (link) window.open(link, '_blank');
        };

        portfolioModal.querySelector('#modalDescription').textContent = desc;
        var modalLinkButton = portfolioModal.querySelector('#modalLinkButton');
        modalLinkButton.href = link;
    });

});
