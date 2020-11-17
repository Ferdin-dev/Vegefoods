$(document).ready(function(){

  // Menu
  $('.hamburger-menu').on('click',function(){
    $('.openNav').slideToggle('active');
  })
  
  // Hero Owl Carousel
  $('.owl-background').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplaySpeed: 1500,
    smartSpeed:1000,
    animateIn: "fadeIn",
    animateOut: "fadeOut"
  })

  /*------------------
       CountDown
   --------------------*/
// For demo preview
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

if (mm == 12) {
  mm = '01';
  yyyy = yyyy + 1;
} else {
  mm = parseInt(mm) + 1;
  mm = String(mm).padStart(2, '0');
}
var timerdate = mm + '/' + dd + '/' + yyyy;
// For demo preview end

console.log(timerdate);


// Use this for real timer date
/* var timerdate = "2020/01/01"; */

$("#countdown").countdown(timerdate, function (event) {
  $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Secs</p> </div>"));
});

// Testimony Section
$('.testimony-container').owlCarousel({
  items:1,
  loop:true,
  dots:true,
  nav:false,
  autoplay:true,
  margin: 20,
  autoplaySpeed: 1500,
  smartSpeed:1000,
  responsive:{
    0:{
      items: 1
    },
    600:{
      items:3
    },
    1000:{
      items:3
    }
  }
});

$('.counter').counterUp({
  delay:10,
  time:1000
});

// Nice Select
  $('select').niceSelect();
  
// Magnific Popup
$('.popup').magnificPopup({
  type:'image',
  gallery:{enabled:true}
});


 // ISotope start

  // $('.product-shop').isotope({
  //   itemSelector: '.shop-item',
  //   layoutMode: 'fitRows'
  // });

  // $('.product-filter-group ul li').click(function () {
  //   $('.product-filter-group ul li').removeClass('active');
  //   $(this).addClass('active');


  //   var selector = $(this).attr('data-filter');
  //   $('.product-shop').isotope({
  //     filter: selector
  //   });

  //   return false;
  // });

})

