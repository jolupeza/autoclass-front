"use strict";

;(function($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', () => {
      checkScroll();
    });

    $window.on('resize', () => {
    });

    checkScroll();

    $('.ArrowTop').on('click', (ev) => {
      ev.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  });

  let checkScroll = () => {
    let arrow = $('.ArrowTop');

    if (wViewport() < 992) {
      arrow.fadeOut();
      return;
    }

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  }

  let hViewport = () => {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  let wViewport = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  // let getHHeader = () => {
  //   return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  // }

  // let heightHeader = () => {
  //   let hHeader = parseFloat($('.Header').innerHeight());

  //   document.documentElement.style.setProperty('--height-header', `${hHeader}px`);
  // }
})(jQuery);
