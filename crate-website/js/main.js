const toggleNav = document.getElementById("js-nav");


toggleNav.addEventListener("click", function() {

	const nav = document.getElementById("js-toggle-nav-wrap");

	if (nav.classList.contains("active")) {
		nav.classList.remove("active");
	} else {
		nav.classList.add("active");
	}
	
});


$(document).ready(function () {
	$('.filter__link').on('click', function() {
    $('.filter__link').removeClass('filter__link-active');
    $(this).addClass('filter__link-active');
  });
});



$(document).ready(function() {
  $('.gallerys').magnificPopup({
  	type:'image',
  	 delegate: 'a',

      gallery: {
      	enabled: true,
      	arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>'
    }
	});
});