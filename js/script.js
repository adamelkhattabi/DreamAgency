$(document).ready(function () {
  $(".owl-first").owlCarousel({ 
    loop: false,
    margin: 10,
    nav: true,
    
     navText: [
      "<img src='previous.svg'>",
      "<img src='next.svg'>"],
    responsive: {
       0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  $(".owl-second").owlCarousel({
    loop: false,
    margin: 20,
    nav: true,
    
    navText: ["<img src='previous.svg'>", "<img src='next.svg'>"],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
  // if ($(".owl-carousel").hasClass("nav-active")) {
  //   if ($(this).find(".owl-nav").hasClass("disabled"))
  //     $(this).find(".owl-nav").removeClass("disabled");
  // :}
  $(".owl-dots").addClass("disabled");
  // owl - prev;
  // owl - next;
  $(".owl-prev").click(function () {
     $(".owl-dots").addClass("disabled");
  });
  $(".owl-next").click(function () {
    $(".owl-dots").addClass("disabled");
  });
});
