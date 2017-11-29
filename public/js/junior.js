$(document).ready(function () {
	$('.prd_l ul li').click(function(){
		$(this).addClass('prho');
		$(this).siblings('li').removeClass('prho');
		var pde = '.' + $(this).attr('data-de');
		$(pde).show();
		$(pde).siblings('.prd_r').hide();
	})
})