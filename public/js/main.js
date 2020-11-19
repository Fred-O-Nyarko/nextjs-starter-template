/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable eqeqeq */
jQuery(document).ready(function ($) {
  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, 300, "easeInOutExpo");
    return false;
  });

  var ml4 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 2.5;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml4 .letters-1",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-1",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4",
      opacity: 0,
      duration: 500,
      delay: 500,
    });

    // Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  // Initiate the wowjs animation library
     new WOW().init();

  // // Initiate superfish on nav menu
  // $('.nav-menu').superfish({
  //     animation: {
  //         opacity: 'show'
  //     },
  //     speed: 400
  // });

  // // Mobile Navigation
  // if ($('#nav-menu-container').length) {
  //     var $mobile_nav = $('#nav-menu-container').clone().prop({
  //         id: 'mobile-nav'
  //     });
  //     $mobile_nav.find('> ul').attr({
  //         'class': '',
  //         'id': ''
  //     });
  //     $('body').append($mobile_nav);
  //     $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
  //     $('body').append('<div id="mobile-body-overly"></div>');
  //     $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

  //     $(document).on('click', '.menu-has-children i', function(e) {
  //         $(this).next().toggleClass('menu-item-active');
  //         $(this).nextAll('ul').eq(0).slideToggle();
  //         $(this).toggleClass("fa-chevron-up fa-chevron-down");
  //     });

  //     $(document).on('click', '#mobile-nav-toggle', function(e) {
  //         $('body').toggleClass('mobile-nav-active');
  //         $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //         $('#mobile-body-overly').toggle();
  //     });

  //     $(document).click(function(e) {
  //         var container = $("#mobile-nav, #mobile-nav-toggle");
  //         if (!container.is(e.target) && container.has(e.target).length === 0) {
  //             if ($('body').hasClass('mobile-nav-active')) {
  //                 $('body').removeClass('mobile-nav-active');
  //                 $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //                 $('#mobile-body-overly').fadeOut();
  //             }
  //         }
  //     });
  // } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
  //     $("#mobile-nav, #mobile-nav-toggle").hide();
  // }

  // // Smooth scroll for the menu and links with .scrollto classes
  // $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
  //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
  //         var target = $(this.hash);
  //         if (target.length) {
  //             var top_space = 0;

  //             if ($('#header').length) {
  //                 top_space = $('#header').outerHeight();

  //                 if (!$('#header').hasClass('header-fixed')) {
  //                     top_space = top_space - 20;
  //                 }
  //             }

  //             $('html, body').animate({
  //                 scrollTop: target.offset().top - top_space
  //             }, 1500, 'easeInOutExpo');

  //             if ($(this).parents('.nav-menu').length) {
  //                 $('.nav-menu .menu-active').removeClass('menu-active');
  //                 $(this).closest('li').addClass('menu-active');
  //             }

  //             if ($('body').hasClass('mobile-nav-active')) {
  //                 $('body').removeClass('mobile-nav-active');
  //                 $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
  //                 $('#mobile-body-overly').fadeOut();
  //             }
  //             return false;
  //         }
  //     }
  // });

  // // Header scroll class
  // $(window).scroll(function() {
  //     if ($(this).scrollTop() > 100) {
  //         $('#header').addClass('header-scrolled');
  //         $('#logo-img').removeClass('logo-img-lg');
  //         $('.scrollto img').attr('src','img/New Folder/white_logo_transparent_background.png');
  //         $('#logo-img').addClass('logo-img-sm');
  //         $('.nav-menu a').css("color", "#fff");
  //         $('.nav-menu a').hover(function(){
  //             $(this).css('color', '#ffa620');
  //         },
  //             function(){
  //                 $(this).css("color", "#fff")
  //             }
  //         );

  //     } else {
  //         $('#header').removeClass('header-scrolled');
  //         $('#logo-img').removeClass('logo-img-sm');
  //         $('.scrollto img').attr('src','img/New Folder/white_logo_dark_background.jpg');
  //         $('#logo-img').addClass('logo-img-lg');
  //         $('.nav-menu a').css("color", "#777");
  //         $('.nav-menu a').hover(function(){
  //             $(this).css('color', '#ffa620');
  //         },
  //             function(){
  //                 $(this).css("color", "#777");
  //             }
  //         );
  //     }
  // });

  // // Intro carousel
  // var introCarousel = $(".carousel");
  // var introCarouselIndicators = $(".carousel-indicators");
  // introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
  //     (index === 0) ?
  //     introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
  //         introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  // });

  // $(".carousel").swipe({
  //     swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
  //         if (direction == 'left') $(this).carousel('next');
  //         if (direction == 'right') $(this).carousel('prev');
  //     },
  //     allowPageScroll: "vertical"
  // });

  // // Skills section
  // $('#skills').waypoint(function() {
  //     $('.progress .progress-bar').each(function() {
  //         $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //     });
  // }, { offset: '80%' });

  // // jQuery counterUp (used in Facts section)
  // $('[data-toggle="counter-up"]').counterUp({
  //     delay: 10,
  //     time: 1000
  // });

  // // Porfolio isotope and filter
  // var portfolioIsotope = $('.portfolio-container').isotope({
  //     itemSelector: '.portfolio-item',
  //     layoutMode: 'fitRows'
  // });

  // $('#portfolio-flters li').on('click', function() {
  //     $("#portfolio-flters li").removeClass('filter-active');
  //     $(this).addClass('filter-active');

  //     portfolioIsotope.isotope({ filter: $(this).data('filter') });
  // });

  // // Clients carousel (uses the Owl Carousel library)
  // $(".clients-carousel").owlCarousel({
  //     autoplay: true,
  //     dots: true,
  //     loop: true,
  //     responsive: {
  //         0: { items: 2 },
  //         768: { items: 4 },
  //         900: { items: 6 },

  //     }
  // });

  // // Testimonials carousel (uses the Owl Carousel library)
  // $(".testimonials-carousel").owlCarousel({
  //     autoplay: true,
  //     dots: true,
  //     loop: true,
  //     items: 1
  // });
});
