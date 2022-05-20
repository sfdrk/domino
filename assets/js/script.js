
//---------------------- ANIMATIONS --------------------------//

gsap.registerPlugin(ScrollTrigger);
gsap.from('.getmore-img-block', {
  scrollTrigger: {
    trigger: ".getmore-img-block",
    // markers: true,

    start: 'top center',
    end:'bottom center',
    toggleActions:"restart pause restart pause"
  },
  x: '-20%',
  duration: 1,
  opacity: 0,
});




gsap.from('.hero-block', {
  scrollTrigger: {
    trigger: ".hero-block",
  },
  y: '-20%',
  duration: 1.5,
  opacity: 0,
});


gsap.from('.getmore-blog-block', {
  scrollTrigger: {
    trigger: ".getmore-blog-block",
    start: 'top 90%',
    end:'bottom center',
    toggleActions: "restart pause restart pause"

  },
  y: '20%',
  duration: 1,
  opacity: 0,
});

gsap.from('.features-container', {
  scrollTrigger: {
    trigger: ".features-container", 
    toggleActions:"restart pause restart pause"
  },
  y: '80px',
  duration: 1.5,
  opacity: 0,
});

gsap.from('.gera-swap-block', {
  scrollTrigger: {
    trigger:".gera-swap-block"
  },
  y: '100%',
  duration: 1
});


gsap.from('.msn-logo-blk', {
  scrollTrigger: {
    trigger:".msn-logo-blk"
  },
  duration: 1,
  opacity: 0,
  delay:.5
});

gsap.from('.vsn-logo-blk', {
  scrollTrigger: {
    trigger:".vsn-logo-blk"
  },
  duration: 1,
  opacity: 0,
  delay:.5
});


gsap.from('.hero-img-blk', {
  x: '50%',
  duration: 1.5,
  opacity:1
});

gsap.from('.chain-img-block', {
  scrollTrigger: {
    trigger:".chain-img-block",
  
  },
  x: '-50%',
  duration: 1,
  opacity: 0,
  delay:.3
});

gsap.from('.download-head', {
  scrollTrigger: {
    trigger:".download-container",
  },
  // x: '-50%',
  duration: 2,
  opacity: 0,
  delay:.3
});

gsap.from('.download-btn', {
  scrollTrigger: {
    trigger:".download-container",
  },
  // x: '-50%',
  duration: 2,
  opacity: 0,
  delay:.3
});

gsap.from('.chain-content-block', {
  scrollTrigger: {
    trigger: ".chain-content-block",

  },
  y: '20%',
  duration: 1,
  opacity: 0,
});
gsap.from('.footer-content', {
  scrollTrigger: {
  trigger: "footer",
  },
  // y: '20%',
  duration: 2,
  opacity: 0,
  delay:.3
});


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 5,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      // spaceBetween: 20
    },

    500: {
      slidesPerView: 2,
      // spaceBetween: 20
    },
    600: {
      slidesPerView: 2.5,
      // spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 40
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 40
    },
  }
});

var swiper = new Swiper(".secondSwiper", {
  slidesPerView: 3,
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    600: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 40
    },
  }
      
});

const newSwiper = new Swiper('.teamSwiper', {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 52,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
  
    610 : {
      slidesPerView: 2,
      spaceBetween:20
    },
    1040: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
})

const aboutSwiper = new Swiper('.aboutSwiper', {
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 52,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 40
    }
  }
})


$(document).ready(function () {

  $(".li-main").hover(function () {
    $(".home-dropdown").css({ "display": "block"});
  },
    function () {
      $(".home-dropdown").css({ "display": "none" });
    })

  $('.view-all').on("click",function(){
    $(this).text($(this).text() == 'View all exchanges' ? 'View less exchanges' : 'View all exchanges');
    $('.mob-show-main').toggle();
  })
  
  $(".drop-down").on("click", function () {
    $(this).css({"display":"none"})
    $(".navbar").css({'left':0,"transition":".5s ease-in"});
    $(".mob-modal").css({"display":"block","opacity":1})
    $('.close').css({"display":"block"});
    $("body").css({"overflow":"hidden"});
  });

  $(".close").on("click",function(){
    $(".drop-down").css({"display":"block"});
    $(this).css({"display":"none"});
    $(".navbar").css({'left':"-100%","transition":".5s ease-in-out"});
    $(".mob-modal").css({"display":"none","opacity":0});
    $("body").css({"overflow":"scroll"});
  })

        $('.abt,.dwnld,.rdmap,.team,.exchng,.prs,.cntct,.stkng,.wlt').on("click",function(){
          if($(window).width() <= 1248) {
              $(".navbar").css({'left':'-100%'})
            $('.close').css({"display":"none"});
            $(".drop-down").css({"display":"block"});
               }
          }) 
  

// ----------------------------------  Scroll to the top of the conttainer   -----------------//


$("a.link").click(function(event) {
  $("html, body").animate({
      scrollTop: $($(this).attr("href")).offset().top - 200
    },100);
});


  //--------- MAINNET GRID OVER  -------// 
  $('.mainnet-grid').hover(function () {
    $(this).find('.mainnet-grid-head').css("color", "white");
    $(this).css({'color':"white"});
  },
    function () {
      $('.mainnet-grid-head').css("color", "#296383");
      $(this).css({'color':"black"});
   });
  
});