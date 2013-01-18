$(document).ready(function(){
    $("ul.sf-menu").superfish({
      delay: 1000,
      speed: 'fast'
    });
    function currentSlide( current ) {
      $(".current_slide").text(current + " of " + $("#slider_inner").slides("status","total") );
    }
    $("#slider_inner").slides({
      navigateEnd: function( current ) {
        currentSlide( current );
      },
      loaded: function(){
        currentSlide( 1 );
      },
      width: 910,
      height: 480,
      navigation: false,
      pagination: true,
      playInterval: 5000
    });
    $("#slider_inner").slides("play");
    $('.fancybox_media')
      .attr('rel', 'media-gallery')
      .fancybox({
        openEffect : 'none',
        closeEffect : 'none',
        prevEffect : 'none',
        nextEffect : 'none',

        arrows : false,
        helpers : {
          media : {},
          buttons : {}
        }
      });
});