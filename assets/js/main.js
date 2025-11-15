;(function($){

$(document).ready(function(){

//========== HEADER ACTIVE STRATS ============= //
  var $header = $("#vl-header-sticky");
  var $window = $(window);
  function toggleStickyHeader() {
    var scrollTop = $window.scrollTop();
    if (scrollTop < 100) {
      $header.removeClass("header-sticky");
    } else {
      $header.addClass("header-sticky");
    }
  }
  $window.on("scroll", toggleStickyHeader);
  toggleStickyHeader();
//========== HEADER ACTIVE ENDS ============= //

//========== MOBILE MENU STARTS ============= //
  var vlMenuWrap = $('.vl-mobile-menu-active > ul').clone();
  var vlSideMenu = $('.vl-offcanvas-menu nav');
  vlSideMenu.append(vlMenuWrap);
  
  if ($(vlSideMenu).find('.sub-menu, .vl-mega-menu').length !== 0) {
    $(vlSideMenu).find('.sub-menu, .vl-mega-menu').parent().append('<button class="vl-menu-close"><i class="fas fa-chevron-right"></i></button>');
  }

  var sideMenuList = $('.vl-offcanvas-menu nav > ul > li button.vl-menu-close, .vl-offcanvas-menu nav > ul li.has-dropdown > a');
  $(sideMenuList).on('click', function (e) {
    e.preventDefault();
    var $parent = $(this).parent();

    if (!$parent.hasClass('active')) {
      $parent.addClass('active');
      $(this).siblings('.sub-menu, .vl-mega-menu').slideDown();
    } else {
      $(this).siblings('.sub-menu, .vl-mega-menu').slideUp();
      $parent.removeClass('active');
    }
  });

  $(".vl-offcanvas-toggle").on('click', function() {
    $(".vl-offcanvas").addClass("vl-offcanvas-open");
    $(".vl-offcanvas-overlay").addClass("vl-offcanvas-overlay-open");
  });

  $(".vl-offcanvas-close-toggle, .vl-offcanvas-overlay").on('click', function() {
    $(".vl-offcanvas").removeClass("vl-offcanvas-open");
    $(".vl-offcanvas-overlay").removeClass("vl-offcanvas-overlay-open");
  });
//========== MOBILE MENU ENDS ============= //

//========== SIDEBAR/SEARCH AREA ============= //
$(".header-search-btn").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").addClass("open");
  $('.header-search-form-wrapper input[type="search"]').focus();
  $('.body-overlay').addClass('active');
});

$(".tx-search-close, .body-overlay").on("click", function (e) {
  e.preventDefault();
  $(".header-search-form-wrapper").removeClass("open");
  $('.body-overlay').removeClass('active');
});
//========== SIDEBAR/SEARCH AREA ============= //

//========== SIDEBAR/SEARCH AREA ============= //
  $(".hamburger_menu").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").toggleClass("show");
  $("body").addClass("on-side");
  $('.body-overlay').addClass('active');
  $(this).addClass('active');
  });
  $(".close-mobile-menu > a").on("click", function (e) {
  e.preventDefault();
  $(".slide-bar").removeClass("show");
  $("body").removeClass("on-side");
  $('.body-overlay').removeClass('active');
  $('.hamburger_menu').removeClass('active');
  });
//========== SIDEBAR/SEARCH AREA ============= //

//========== PRICING AREA ============= //

//========== PAGE PROGRESS STARTS ============= // 
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition =
  "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS STARTS ============= // 

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== NICE SELECT ============= //
$('select').niceSelect();

});

//========== COUNTER UP============= //
const ucounter = $('.counter');
if (ucounter.length > 0) {
  ucounter.countUp();
};

//========== TESTIMONIAL AREA ============= //
// SLIDER //
$(".hero-main-slider-widget").slick({
  autoplay:true,
  autoplaySpeed:1500,
  speed:2000,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:true,
  arrows:false,
  pauseOnDotsHover:true,
  cssEase:'linear',
  fade:true,
  draggable:true,
}); 

// SLIDER //
$(".hero-main-slider-widget2").slick({
  autoplay:true,
  autoplaySpeed:1500,
  speed:2000,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:true,
  arrows:false,
  pauseOnDotsHover:true,
  cssEase:'linear',
  fade:true,
  draggable:true,
}); 

// SLIDER //
$(".project-slider-area").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".testimonai2-slider-area").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".testimonai3-slider-area").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".service3-slider-widget").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  infinite: true,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".brand-slider-area").slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  speed: 5000,
  infinite: true,
  cssEase: 'linear',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
      }
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

// SLIDER //
$(".testimonial4-images-area").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay:true,
  autoplaySpeed:2000,
  loop: true,
  focusOnSelect: true,
  vertical:false,
  asNavFor: ".testimonial4-content-slider",
  infinite: true,
  fade:true,
});

$(".testimonial4-content-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".testimonial4-images-area",
  dots: false,
  arrows: true,
  centerMode: false,
  focusOnSelect: true,
  loop: true,
  autoplay:true,
  autoplaySpeed:2000,
  prevArrow: $(".prev-arrow-testi4"),
  nextArrow: $(".next-arrow-testi4"), 
});

// SLIDER //
$(".hero4-main-slider").slick({
  autoplay:true,
  autoplaySpeed:1500,
  speed:2000,
  slidesToShow:1,
  slidesToScroll:1,
  pauseOnHover:false,
  dots:false,
  arrows:true,
  pauseOnDotsHover:true,
  cssEase:'linear',
  fade:true,
  draggable:true,
  prevArrow: $(".prev-arrow-hero4"),
  nextArrow: $(".next-arrow-hero4"), 
}); 

//========== PRELOADER ============= //
$(window).on("load", function (event) {
  setTimeout(function () {
    $(".preloader").fadeToggle();
  }, 200);
});

})(jQuery);

// SWIPER SLIDER //
document.addEventListener("DOMContentLoaded", function () {
  var swiper3 = new Swiper(".swiper-thumb2", {
    spaceBetween: 10,
    slidesPerView: 6,
    freeMode: true,
    watchSlidesProgress: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  var swiper4 = new Swiper(".swiper-testimonial-2", {
    spaceBetween: 10,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    thumbs: {
      swiper: swiper3,
    },
  });
});

