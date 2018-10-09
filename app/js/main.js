"use strict";

;(function($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', () => {
      checkScroll();
    });

    $window.on('resize', () => {
      setTopSidebar();
    });

    checkScroll();
    setTopSidebar();

    $('.ArrowTop').on('click', (ev) => {
      ev.preventDefault();

      $('html, body').animate({
        scrollTop: 0
      }, 800);
    });

    $('.js-toggle-sidebar a').on('click', function(ev) {
      ev.preventDefault();

      let $this = $(this),
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

    $('[data-toggle="collapse"]').on('click', function (ev) {
      ev.preventDefault();

      let $this = $(this),
          parent = $this.closest('.Form__collapse'),
          content = parent.find('.Form__collapse__content');

      if (content.hasClass('show')) {
        $this.removeClass('icon-minus').addClass('icon-plus');
        content.removeClass('show')
      } else {
        $this.removeClass('icon-plus').addClass('icon-minus');
        content.addClass('show')
      }
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

  let setTopSidebar = () => {
    let topSidebar = heightHeader() + heightMenuMovil();

    document.documentElement.style.setProperty('--top-sidebar', topSidebar);
  }

  let hViewport = () => {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  let wViewport = () => {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  let heightHeader = () => {
    return parseFloat($('.Header').innerHeight());
  }

  let heightMenuMovil = () => {
    return parseFloat($('.Header__menuMovil').innerHeight());
  }

  // let getHHeader = () => {
  //   return parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--height-header'));
  // }

  // let heightHeader = () => {
  //   let hHeader = parseFloat($('.Header').innerHeight());

  //   document.documentElement.style.setProperty('--height-header', `${hHeader}px`);
  // }
})(jQuery);
