//Parallax
$(window).scroll(function () {

	var wScroll = $(this).scrollTop();

		$('.logo').css({
		'transform' : 'translate(0px, '+ wScroll /4+'%)'
	});

		$('#widget').css({
		'transform' : 'translate(-50, '+ wScroll /100+'%)'
	});

  // if(wScroll > $('.photos').offset().top - ($(window).height() / 1.2)) {

  //   $('.photos figure').each(function(i){

  //     setTimeout(function(){
  //       $('.photos figure').eq(i).addClass('is-showing');
  //     }, 150 * (i+1));
  //   });

  // }

});

// smooth scroll

$(document).ready(function(){
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 1500, 'swing', function () {
           
        });
    });
});

//
