$(document).ready(function(){
   $(window).scroll(function() {
      $(".maeda").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 100) {
          $(this).addClass("fadeInLeft");
        }
      });
    });
    $(window).scroll(function() {
      $(".about__title").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("fadeInDown");
        }
      });
    });
    $(window).scroll(function() {
      $(".about__title").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("fadeInDown");
        }
      });
    });
    $(window).scroll(function() {
      $(".story").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("fadeInUpBig");
        }
      });
    });
    $(window).scroll(function() {
      $(".mobile").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("fadeInLeft");
        }
      });
    });
    $(window).scroll(function() {
      $(".skills__progress").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("fadeInRight");
        }
      });
    });
    $(window).scroll(function() {
      $(".team__main").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("fadeInRight");
        }
      });
    });
    $(window).scroll(function() {
      $(".team__developer").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("fadeInLeft");
        }
      });
    });
    $(window).scroll(function() {
      $(".service__circle").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 100) {
          $(this).addClass("fadeIn");
        }
      });
    });
    $(window).scroll(function() {
      $(".service__design").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 200) {
          $(this).addClass("rotateInDownRight");
        }
      });
    });
    $(window).scroll(function() {
      $(".packege__price").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 200) {
          $(this).addClass("rotateInDownLeft");
        }
      });
    });
    $(window).scroll(function() {
      $(".price__metal").each(function() {
        var elPos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (elPos < topOfWindow + 400) {
          $(this).addClass("rotateInDownRight");
        }
      });
    });
});