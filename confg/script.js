$(document).ready(function() {
    $('#mobile-btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile-btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-iten');

    $(window).on('scroll', function() {
        const header = $('header');
        let activeSectionIndex = 0;

        const scroLLPosition = $(window).scrollTop() - header.outerHeight();

        if (scroLLPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 97;
            const sectionBotton = sectionTop + section.outerHeight();

            if (scroLLPosition >= sectionTop &&  scroLLPosition < sectionBotton) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    
    ScrollReveal().reveal('#testimonials_pc', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback-1', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback-2', {
        origin: 'right',
        duration: 1500,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback-3', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });
    
    
});