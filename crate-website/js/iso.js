$('.grid').isotope({
  // options
  itemSelector: '.grid-item',

   masonry: {
    fitWidth: true,
    columnWidth: 33,
    stagger: 10
  }
 
});

$("#filters li").click(function(){

    $("#filters li").removeClass("active")
    $(this).addClass("active");

    var selector = $(this).data("filter");

    $(".grid").isotope({
      filter: selector,
    });

});