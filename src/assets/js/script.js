var GUI = {};
GUI.win = $(window);

GUI.mMenu = function (){
  var nav_bar = $('.nav-bar');
  var nav = $('.main-nav');
  var m_nav_btn = $('.menu-btn');

// $(document).on('click',function(e){
        

//       if(nav.has(e.target).length == 0 && !nav.is(e.target)&& !m_nav_btn.is(e.target)){
//         nav.slideUp();
//          nav.removeClass('active');
        
//       }
//     });

  nav_bar.find("ul li").each(function(){
    if ($(this).find("ul li").length > 0) {
      $(this).prepend('<i class="fa fa-angle-down" aria-hidden="true"></i>');
    }
  });

  nav.find("ul li").each(function(){
    if ($(this).find("ul li").length > 0) {
      $(this).prepend('<i class="fa fa-caret-down" aria-hidden="true"></i>');
    }
  });

  m_nav_btn.click(function() {
    if (nav.is(":hidden")) {
      $(this).addClass('active');
      $('.menu-btn > i').removeClass('fa-bars');
      $('.menu-btn > i').addClass('fa-times');
      nav.slideDown(200);
      nav.removeClass('hidden');
      nav.addClass('active');
    }
    else {
      $(this).removeClass('active');
      $('.menu-btn > i').addClass('fa-bars');
      $('.menu-btn > i').removeClass('fa-times');
            //nav.addClass('hidden');
            nav.slideUp(200);
            //nav.addClass('hidden');
            nav.removeClass('active');
          }
        });

  nav.find("li i").click(function() {
    var ul = $(this).nextAll("ul");
    if (ul.is(":hidden")) {
      $(this).addClass('fa-caret-up');
      $(this).removeClass('fa-caret-down');
      ul.slideDown(200);
    }
    else{
      $(this).removeClass('fa-caret-up');
      $(this).addClass('fa-caret-down');
      ul.slideUp(200);
    }
  });
  
}


GUI._mySlick = function (){
  if($( ".my-slick" ).length>0) {
    $('.my-slick').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      dots: true,
      responsive: [
      {
        breakpoint: 991,
        settings: {
          dots: false,
        }
      },
      ]
    });
  }
}
GUI._hDescSlide = function (){
  if($( ".h-desc-slide" ).length>0) {
    $('.h-desc-slide').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: false,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: false,
          }
        },
        ]
      });
  }
}

GUI._hDescSlideV2 = function (){
  if($( ".h-desc-slide-v2" ).length>0) {
    $('.h-desc-slide-v2').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
        // autoplay: true,
        // autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'slick-dots',
        arrows: true,
        nextArrow: '<i class="fa fa-angle-right h-desc-slide-next"></i>',
        prevArrow: '<i class="fa fa-angle-left h-desc-slide-prev"></i>',
        responsive: [
        {
          breakpoint: 991,
          settings: {
            dots: false,
            arrows: false,
          }
        },
        ]
      });
  }
}

GUI._hShopSlide = function() {
  if($( ".h-shop-slide" ).length>0) {
    $('.h-shop-slide').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
        //autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        dotsClass: 'slick-dots',
        arrows: true,
        responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
        ]
      });
  }
}




GUI._hShopSlideV2 = function() {
  if($( ".h-shop-slide-v2" ).length>0) {
    $('.h-shop-slide-v2').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: false,
      dots: false,
      
    });

    $('.h-shop .select-nav ul.nav li a').on('shown.bs.tab', function (e) {
      $('.h-shop-slide-v2 ').slick('setPosition');
    });
  }
}
GUI._hShopSlideV22 = function() {
  if($( ".h-shop-slide-v22" ).length>0) {
    $('.h-shop-slide-v22').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: '.h-shop-slide-v2',
      dots: true,
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
    });
  }
}


GUI._initProCateSlide = function() {
  if ($(".pro-cate-slide").length>0) {
    $('.pro-cate-slide').slick({
      infinite: true,
      slidesToShow: 10,
      slidesToScroll: 1,
      //arrows: true,
      nextArrow: '<i class="fa fa-angle-right pro-cate-prev"></i>',
      prevArrow: '<i class="fa fa-angle-left pro-cate-next"></i>',
      dots :  false,
      fade: false,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        }
      }
      ]
    });
  }
}

GUI._initProViewSlide = function() {
  if ($(".pro-view-slide").length>0) {
    $('.pro-view-slide').slick({
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
      ]
    });
  }
}

GUI._initProViewSlideV2 = function() {
  if ($(".pro-view-slide-v2").length>0) {
    $('.pro-view-slide-v2').slick({
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      arrows: false,
      responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
      ]
    });
  }
}

GUI._initProSlideFor = function () {
  $('.pro-slide-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: '<i class="fa fa-angle-right myprev"></i>',
    prevArrow: '<i class="fa fa-angle-left mynext"></i>',
    asNavFor: '.pro-slide-nav'
  });
  $('.pro-slide-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.pro-slide-for',
  // dots: true,
  // centerMode: true,
  arrows: false,
  focusOnSelect: true,
});
}

GUI._initBackTop =  function() {
  if($(".back-to-top").length > 0){
    $(window).scroll(function () {
      var e = $(window).scrollTop();
      if (e > 300) {
        $(".back-to-top").show()
      } else {
        $(".back-to-top").hide()
      }
    });
    $(".back-to-top").click(function () {
      $('body,html').animate({
        scrollTop: 0
      },500)
    })
  }  
}


GUI._initListDetailV2 = function (){
  $('.list').each(function(){
    var this_ = $(this);
    var label = this_.children('span');
    var ct = this_.children('ul');
    var item = ct.children('li').children('a');
    this_.click(function(){
      ct.slideToggle();
    });
    item.click(function(e){
      e.stopPropagation();
      label.html($(this).html());
      ct.slideUp();
    });
  });
}

GUI._initProList = function (){
  if ($('.pro-list').length > 0) {
    var this_ = $('.pro-list');
    var ct = $('.item-nav');
    var item = ct.children('li').children('a');
    this_.click(function(e){
      e.stopPropagation();
     ct.slideToggle();
   });
    item.click(function(e){
      e.preventDefault();
      this_.html($(this).html());
    });

    $(document).click(function(e){
      e.stopPropagation();
      $('.item-nav').slideUp();
    });

  }
}

GUI._initFancy = function (){
  if ($('.fancy').length > 0) {
    $('.fancy').fancybox({
      loop: true,
      buttons: [
      "zoom",
      "share",
      "slideShow",
      "fullScreen",
      "download",
      "thumbs",
      "close"
      ],
    });
  }
}
GUI._initHeaderSearch = function (){
  if($(window).width()> 1200 ){
    $(".button-hide").click(function(event){
      event.stopPropagation();
      $('.button-hide').hide();
      $('.search').find('.xxx').css('display','inline-block');
    });
    $(".search .xxx").click(function(event){
      event.stopPropagation();
    });
    $(document).click(function(){
      $(".search .xxx").hide();
      $('.button-hide').show();
    });
  }
}

GUI._initMenuFixed =  function() {
  $(window).scroll(function () {
    var e = $(window).scrollTop();
    if (e > 300) {
      $("header").addClass('fixed');
    } else {
      $("header").removeClass('fixed')
    }
  });
}


GUI._initProCateDetail = function (){
  if($(".pro-cate-detail a").length > 0) {
    //var this_ = $('.pro-cate-detail a');
    $('.pro-cate-detail a').click(function(){
      var this_ = $(this);
      var check = this_.hasClass('active');
      if (check) {
        this_.removeClass('active');
      }
      else{
        this_.addClass('active');
      }
    });
  }
}

GUI._initCloseModal = function() {
  if ($('.modal').length > 0) {
    $('.close-modal').click(function(){
      $(".my-modal").modal("hide");
    });
  }
}


GUI.init= function (){
  GUI.mMenu();
  GUI._mySlick();
  GUI._hDescSlide();
  GUI._hDescSlideV2();
  GUI._hShopSlide();
  GUI._initBackTop();
  GUI._hShopSlideV2();
  GUI._initProSlideFor();
  GUI._initFancy();
  GUI._initListDetailV2();
  GUI._initProList();
  GUI._initProCateSlide();
  GUI._initProViewSlide();
  GUI._initProViewSlideV2();
  GUI._initHeaderSearch();
  GUI._initProCateDetail();
  GUI._initMenuFixed();
  GUI._initCloseModal();

}

$(function() {
  //click_pro();
  GUI.init();
  // $('.load').fadeOut('slow');
});





