

$(document).ready(function() {
 
    $(".owl-carousel").owlCarousel({
        slideSpeed : 200,
        items:1,
        //autoPlay:true
    });
 
    var owl = $(".owl-carousel").data('owlCarousel');
      
    $(".next").click(function(){
        owl.next()
    });
    
    $(".prev").click(function(){
        owl.prev()
    });
   
  });