(function ($) {
    "use strict";

           // Preloader
        
           $(window).on('load', function() {
            $('#status').fadeOut();
            $('#preloader').delay(250).fadeOut('slow');
            $('body').delay(250).css({'overflow':'visible'});
        });

    $(document).ready(function() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 150) {
               $('.bia-menu-area').addClass('bia-fixed');
            } else {
               $('.bia-menu-area').removeClass('bia-fixed');
            }
        });
    });


/*------------------------
 slider area start
---------------------------*/

$('.multiple-items').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,

          }
        },

  
      ]
    
});

/*------------------------
 slider area end
---------------------------*/


})(jQuery);
