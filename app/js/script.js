"use strict";

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScroll();
    });

    $window.on('resize', function () {});

    checkScroll();

    $('.ArrowTop').on('click', function (ev) {
      ev.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });
  });

  var checkScroll = function checkScroll() {
    var arrow = $('.ArrowTop');

    if (wViewport() < 992) {
      arrow.fadeOut();
      return;
    }

    if ($window.scrollTop() > 150) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };

  var hViewport = function hViewport() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  var wViewport = function wViewport() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  };

  // let getHHeader = () => {
  //   return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  // }

  // let heightHeader = () => {
  //   let hHeader = parseFloat($('.Header').innerHeight());

  //   document.documentElement.style.setProperty('--height-header', `${hHeader}px`);
  // }
})(jQuery);
//# sourceMappingURL=script.js.map
