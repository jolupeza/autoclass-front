"use strict";

;(function ($) {
  var $window = $(window);

  $(function () {
    $window.on('scroll', function () {
      checkScroll();
    });

    $window.on('resize', function () {
      setTopSidebar();
    });

    checkScroll();
    setTopSidebar();

    $('.ArrowTop').on('click', function (ev) {
      ev.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });

    $('.js-toggle-sidebar a').on('click', function (ev) {
      ev.preventDefault();

      var $this = $(this),
          Sidebar = $('.Sidebar'),
          icon = $this.children();

      if (Sidebar.hasClass('active')) {
        Sidebar.removeClass('active');
        icon.removeClass('icon-close').addClass('icon-bars');
        document.documentElement.style.setProperty('--body-ov', 'auto');
      } else {
        Sidebar.addClass('active');
        icon.removeClass('icon-bars').addClass('icon-close');
        document.documentElement.style.setProperty('--body-ov', 'hidden');
      }
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

  var setTopSidebar = function setTopSidebar() {
    var topSidebar = heightHeader() + heightMenuMovil();

    document.documentElement.style.setProperty('--top-sidebar', topSidebar);
  };

  var hViewport = function hViewport() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  };

  var wViewport = function wViewport() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  };

  var heightHeader = function heightHeader() {
    return parseFloat($('.Header').innerHeight());
  };

  var heightMenuMovil = function heightMenuMovil() {
    return parseFloat($('.Header__menuMovil').innerHeight());
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
