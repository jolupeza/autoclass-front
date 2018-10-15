"use strict";

;(function ($) {
  let $window = $(window),
      bxTestimonials = {
        wrapper: $('.testimonials-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 2,
          lg: 2,
          md: 1,
          xs: 1
        }
      },
      bxAchievements = {
        wrapper: $('.logros-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 4,
          lg: 3,
          md: 2,
          xs: 1
        }
      },
      bxPartners = {
        wrapper: $('.aliados-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 3,
          lg: 3,
          md: 2,
          xs: 1
        }
      },
      bxInicial = {
        wrapper: $('.inicial-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 3,
          lg: 3,
          md: 2,
          xs: 1
        }
      },
      bxPrimaria = {
        wrapper: $('.primaria-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 3,
          lg: 3,
          md: 2,
          xs: 1
        }
      },
      bxAcademico = {
        wrapper: $('.academicos-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 5,
          lg: 5,
          md: 3,
          xs: 1
        }
      },
      bxAlumnas = {
        wrapper: $('.a-las-alumnas-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 5,
          lg: 5,
          md: 3,
          xs: 1
        }
      },
      bxExtra = {
        wrapper: $('.extracurriculares-slider'),
        bx: null,
        margin: 15,
        media: {
          xl: 5,
          lg: 5,
          md: 3,
          xs: 1
        }
      };

  $(function () {
    if (checkBxSlider(bxTestimonials)) {
      bxTestimonials.bx = bxTestimonials.wrapper.bxSlider(
        initBxSlider(bxTestimonials)
      );
    }

    if (checkBxSlider(bxAchievements)) {
      bxAchievements.bx = bxAchievements.wrapper.bxSlider(
        initBxSlider(bxAchievements)
      );
    }

    if (checkBxSlider(bxPartners)) {
      bxPartners.bx = bxPartners.wrapper.bxSlider(
        initBxSlider(bxPartners)
      );
    }

    if (checkBxSlider(bxInicial)) {
      bxInicial.bx = bxInicial.wrapper.bxSlider(
        initBxSlider(bxInicial)
      );
    }

    if (checkBxSlider(bxPrimaria)) {
      bxPrimaria.bx = bxPrimaria.wrapper.bxSlider(
        initBxSlider(bxPrimaria)
      );
    }

    if (checkBxSlider(bxAcademico)) {
      bxAcademico.bx = bxAcademico.wrapper.bxSlider(
        initBxSlider(bxAcademico)
      );
    }

    if (checkBxSlider(bxAlumnas)) {
      bxAlumnas.bx = bxAlumnas.wrapper.bxSlider(
        initBxSlider(bxAlumnas)
      );
    }

    if (checkBxSlider(bxExtra)) {
      bxExtra.bx = bxExtra.wrapper.bxSlider(
        initBxSlider(bxExtra)
      );
    }

    $('#accordion-propuesta').on('shown.bs.collapse', () => {
      if (bxInicial.bx === null) {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx = bxInicial.wrapper.bxSlider(
            initBxSlider(bxInicial, true)
          );
        } else {
          if (bxInicial.bx !== null) {
            bxInicial.bx.destroySlider();
            bxInicial.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx.reloadSlider(initBxSlider(bxInicial, true));
        } else {
          bxInicial.bx.destroySlider();
          bxInicial.bx = null;
        }
      }

      if (bxPrimaria.bx === null) {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx = bxPrimaria.wrapper.bxSlider(
            initBxSlider(bxPrimaria, true)
          );
        } else {
          if (bxPrimaria.bx !== null) {
            bxPrimaria.bx.destroySlider();
            bxPrimaria.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx.reloadSlider(initBxSlider(bxPrimaria, true));
        } else {
          bxPrimaria.bx.destroySlider();
          bxPrimaria.bx = null;
        }
      }
    });

    $('#tabsServices').on('shown.bs.tab', () => {
      if (bxAcademico.bx === null) {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx = bxAcademico.wrapper.bxSlider(
            initBxSlider(bxAcademico, true)
          );
        } else {
          if (bxAcademico.bx !== null) {
            bxAcademico.bx.destroySlider();
            bxAcademico.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx.reloadSlider(initBxSlider(bxAcademico, true));
        } else {
          bxAcademico.bx.destroySlider();
          bxAcademico.bx = null;
        }
      }

      if (bxAlumnas.bx === null) {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx = bxAlumnas.wrapper.bxSlider(
            initBxSlider(bxAlumnas, true)
          );
        } else {
          if (bxAlumnas.bx !== null) {
            bxAlumnas.bx.destroySlider();
            bxAlumnas.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx.reloadSlider(initBxSlider(bxAlumnas, true));
        } else {
          bxAlumnas.bx.destroySlider();
          bxAlumnas.bx = null;
        }
      }

      if (bxExtra.bx === null) {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx = bxExtra.wrapper.bxSlider(
            initBxSlider(bxExtra, true)
          );
        } else {
          if (bxExtra.bx !== null) {
            bxExtra.bx.destroySlider();
            bxExtra.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx.reloadSlider(initBxSlider(bxExtra, true));
        } else {
          bxExtra.bx.destroySlider();
          bxExtra.bx = null;
        }
      }
    });

    $window.on('resize', () => {
      if (bxTestimonials.bx === null) {
        if (checkBxSlider(bxTestimonials)) {
          bxTestimonials.bx = bxTestimonials.wrapper.bxSlider(
            initBxSlider(bxTestimonials, true)
          );
        } else {
          if (bxTestimonials.bx !== null) {
            bxTestimonials.bx.destroySlider();
            bxTestimonials.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxTestimonials)) {
          bxTestimonials.bx.reloadSlider(initBxSlider(bxTestimonials, true));
        } else {
          bxTestimonials.bx.destroySlider();
          bxTestimonials.bx = null;
        }
      }

      if (bxAchievements.bx === null) {
        if (checkBxSlider(bxAchievements)) {
          bxAchievements.bx = bxAchievements.wrapper.bxSlider(
            initBxSlider(bxAchievements, true)
          );
        } else {
          if (bxAchievements.bx !== null) {
            bxAchievements.bx.destroySlider();
            bxAchievements.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAchievements)) {
          bxAchievements.bx.reloadSlider(initBxSlider(bxAchievements, true));
        } else {
          bxAchievements.bx.destroySlider();
          bxAchievements.bx = null;
        }
      }

      if (bxPartners.bx === null) {
        if (checkBxSlider(bxPartners)) {
          bxPartners.bx = bxPartners.wrapper.bxSlider(
            initBxSlider(bxPartners, true)
          );
        } else {
          if (bxPartners.bx !== null) {
            bxPartners.bx.destroySlider();
            bxPartners.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxPartners)) {
          bxPartners.bx.reloadSlider(initBxSlider(bxPartners, true));
        } else {
          bxPartners.bx.destroySlider();
          bxPartners.bx = null;
        }
      }

      if (bxInicial.bx === null) {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx = bxInicial.wrapper.bxSlider(
            initBxSlider(bxInicial, true)
          );
        } else {
          if (bxInicial.bx !== null) {
            bxInicial.bx.destroySlider();
            bxInicial.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxInicial)) {
          bxInicial.bx.reloadSlider(initBxSlider(bxInicial, true));
        } else {
          bxInicial.bx.destroySlider();
          bxInicial.bx = null;
        }
      }

      if (bxPrimaria.bx === null) {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx = bxPrimaria.wrapper.bxSlider(
            initBxSlider(bxPrimaria, true)
          );
        } else {
          if (bxPrimaria.bx !== null) {
            bxPrimaria.bx.destroySlider();
            bxPrimaria.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxPrimaria)) {
          bxPrimaria.bx.reloadSlider(initBxSlider(bxPrimaria, true));
        } else {
          bxPrimaria.bx.destroySlider();
          bxPrimaria.bx = null;
        }
      }

      if (bxAcademico.bx === null) {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx = bxAcademico.wrapper.bxSlider(
            initBxSlider(bxAcademico, true)
          );
        } else {
          if (bxAcademico.bx !== null) {
            bxAcademico.bx.destroySlider();
            bxAcademico.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAcademico)) {
          bxAcademico.bx.reloadSlider(initBxSlider(bxAcademico, true));
        } else {
          bxAcademico.bx.destroySlider();
          bxAcademico.bx = null;
        }
      }

      if (bxAlumnas.bx === null) {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx = bxAlumnas.wrapper.bxSlider(
            initBxSlider(bxAlumnas, true)
          );
        } else {
          if (bxAlumnas.bx !== null) {
            bxAlumnas.bx.destroySlider();
            bxAlumnas.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxAlumnas)) {
          bxAlumnas.bx.reloadSlider(initBxSlider(bxAlumnas, true));
        } else {
          bxAlumnas.bx.destroySlider();
          bxAlumnas.bx = null;
        }
      }

      if (bxExtra.bx === null) {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx = bxExtra.wrapper.bxSlider(
            initBxSlider(bxExtra, true)
          );
        } else {
          if (bxExtra.bx !== null) {
            bxExtra.bx.destroySlider();
            bxExtra.bx = null;
          }
        }
      } else {
        if (checkBxSlider(bxExtra)) {
          bxExtra.bx.reloadSlider(initBxSlider(bxExtra, true));
        } else {
          bxExtra.bx.destroySlider();
          bxExtra.bx = null;
        }
      }
    });
  });

  let checkBxSlider = (obj) => {
    let numSlides = obj.wrapper.data('total');

    if (window.matchMedia("(max-width: 767px)").matches) {
      return numSlides > obj.media.xs;
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
      return numSlides > obj.media.md;
    }

    if (window.matchMedia("(max-width: 1199px)").matches) {
      return numSlides > obj.media.lg;
    }

    return numSlides > obj.media.xl;
  }

  let initBxSlider = (obj, reload = false) => {
    let widthParent = obj.wrapper.parent().width();

    let config = {
      auto: true,
      autoHover: true,
      pager: true,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      slideMargin: 0,
      slideWidth: 0,
      controls: false,
      prevText: '<i class="icon-keyboard_arrow_left"></i>',
      nextText: '<i class="icon-keyboard_arrow_right"></i>',
    };

    if (window.matchMedia("(max-width: 767px)").matches) {
      return config;
    }

    if (window.matchMedia("(max-width: 991px)").matches) {
      config.minSlides = obj.media.md;
      config.maxSlides = obj.media.md;

      if (obj.media.md > 1) {
        config.slideMargin = obj.margin;
        config.slideWidth = (widthParent / obj.media.md) - config.slideMargin;
      }

      return config;
    }

    if (window.matchMedia("(max-width: 1199px)").matches) {
      config.minSlides = obj.media.lg;
      config.maxSlides = obj.media.lg;

      if (obj.media.lg > 1) {
        config.slideMargin = obj.margin;
        config.slideWidth = (widthParent / obj.media.md) - config.slideMargin;
      }

      return config;
    }

    widthParent = reload ? obj.wrapper.parent().width() : obj.wrapper.parent().width() - 96;

    config.minSlides = obj.media.xl;
    config.maxSlides = obj.media.xl;

    if (obj.media.xl > 1) {
      config.controls = true;
      config.slideMargin = obj.margin;
      config.pager = false;
      config.slideWidth = (widthParent / obj.media.xl) - config.slideMargin;
    }

    return config;
  }
})(jQuery);
