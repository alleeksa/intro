$(".toggle-menu ").click(function() {
  $(".burger").toggleClass("active");
  $(".top-menu").toggleClass("active");
});

$(".burger active").click(function() {
  $(".burger").fadeOut(1100);
});

$(".top-menu li a").click(function() {
  $(".top-menu").fadeOut(1100);

  $(".top-menu li a").removeClass("fadeInUp animated");
});

$(".toggle-menu").click(function() {

  if ($(".top-menu").is(":visible")) {

$(".top_text").css("opacity", "1");
    $(".top-menu").fadeOut(600);
    $(".top-menu li a").removeClass("fadeInUp animated");
  }
  else {
$(".top_text").css("opacity", "1");
    $(".top-menu").fadeIn(600);
    $(".top-menu li a").addClass("fadeInUp animated");
  }
});
$(".top-menu li a").mPageScroll2id();

$(".button.button").click(function() {
 $(".button.button").addClass("href" , "#");
});

$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() >300) {
      $(".home-text-h1").fadeOut(600);
       $(".home-text").fadeOut(500);
      $(".home-p").fadeOut(500);
    } else {
      //$(".top-menu").fadeIn(600);
      $(".home-text-h1").fadeIn(600);
      $(".home-text").fadeIn(1300);
      $(".home-p").fadeIn(1300);
    }
  });
});

  $(".portfolio_item").removeClass("fadeIn animated");
  $(".home-text").removeClass("fadeIn animated");
  $(".home-text-h1").addClass(" fadeInUp animated");
  $(".home-p").addClass(" fadeInUp animated");
  $(".baner").addClass(" fadeInUp animated");
  $(".serv-img").addClass(" fadeInUp animated");
  $(".service-p").addClass(" fadeInUp animated");


/*$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() >300) {
       $(".coi-lg-4 col-md-4 col-sm-6 col-xs-12 photography-1").animate({left: '200px'});
       $(".coi-lg-4 col-md-4 col-sm-6 col-xs-12 photography-2").animate({left: '300px'});
       $(".coi-lg-4 col-md-4 col-sm-6 col-xs-12 photography-3").animate({left: '500px'});
       $(".coi-lg-4 col-md-4 col-sm-6 col-xs-12 photography-4").animate({left: '800px'});
      
    } else {
       $(".coi-lg-4 col-md-4 col-sm-6 col-xs-12 photography-1").animate({left: '250px'});
    }
  });
});*/
      
      