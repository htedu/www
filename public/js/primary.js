$(document).ready(function () {
	$('.ta_mon a').mouseenter(function(){
		if(!$(this).attr('class')){
			var des_text = $(this).attr('data-des');
			$('.ta_des').html("<p>"+des_text+"</p>");
			$(this).addClass('ta_mon_hov');
			$(this).siblings().removeClass('ta_mon_hov');
		}
	})
})