(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        animateOut: 'fadeOutLeft',
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
        autoplay: true,        // Enable autoplay
        autoplayTimeout: 2000, // Time between slides (3s)
    });

    $(".featured-carousel").owlCarousel({
        loop: true,             // Infinite loop
        margin: 10,            // Space between items
        nav: true,             // Navigation arrows
        dots: true,            // Pagination dots
        autoplay: true,        // Enable autoplay
        autoplayTimeout: 3000, // Time between slides (3s)
        autoplayHoverPause: true, // Pause on hover
        responsive: {
            0: { items: 1 },   // Show 1 item on small screens
            768: { items: 2 }, // Show 2 items on tablets
            1024: { items: 3 }, // Show 3 items on desktops
            1200: { items: 4 }  // Show 4 items on large screens
        },
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ],
    });

    // $(".custom-next").click(function() {
    //     owl.trigger("next.owl.carousel");
    // });

    // $(".custom-prev").click(function() {
    //     owl.trigger("prev.owl.carousel");
    // });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });

    
})(jQuery);

