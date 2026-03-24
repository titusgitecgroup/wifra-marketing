$(document).ready(function() {
    // Start of use strict
    "use strict";

    //Tooltip
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Hamburger toggle
    $('#hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });

    // Nav link click - remove active classes (mobile only)
    $('.nav-link').on('click', function () {
        $('.nav-link').removeClass('active');
        $(this).addClass('active');

        $('#hamburger').removeClass('active');
        $('.main-menu').removeClass('active');
    });

    // Sticky header on scroll
    $(window).on('scroll', function () {
        $('.navbar.sticky').toggleClass('scrolled', $(this).scrollTop() > 0);
    });

    // App v1 screenshot
    $('#appIntro').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        items: 3,
        center: true,
        autoplay: true,
        autoplayTimeout:1000,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:3,
            },
            1000:{
                items:3,
            }
        }
    })

    // App v2 screenshot
    $('#appScreens').owlCarousel({
        loop: false,
        margin: 30,
        dots: true,
        nav: false,
        items: 4,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:false
            }
        }
    })

    // Pricing table app v2
    $('#pricingTable').owlCarousel({
        loop: false,
        margin: 12,
        dots: false,
        nav: false,
        responsive:{
            0:{
                items:1,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            },
            1200:{
                items:4,
            }
        }
    });

    // Team v1
    $('#team_v1').owlCarousel({
        loop: false,
        margin: 30,
        dots: true,
        nav: false,
        items: 4,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
            }
        }
    })

    // Testimonial v1
    $('#testimonial_v1').owlCarousel({
        loop: false,
        autoplay:false,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin: 30,
        dots: false,
        nav:true,
        items: 1,
        navContainer: '#testimonial_v1-mynavs',
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    })

    // Blog v1
    $('#blog-v1').owlCarousel({
        loop: false,
        margin: 24,
        dots: false,
        navContainer: '#blog-v1-mynavs',
        navText: ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        responsive:{
            0:{
                items:1,
                navContainer: false,
            },
            768:{
                items:2,
                navContainer: false,
            },
            992:{
                items:3,
                navContainer: true,
            },
            1200:{
                items:4,
                nav: true,
            }
        },
    })

    // Scroll event for adding 'scrolled' class to the header
    $(window).on('scroll', function() {
        const navbar = $('.navbar.sticky');
        
        if ($(window).scrollTop() ) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
    });
});