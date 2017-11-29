$(document).ready(function () {
	$('.job_box a').click(function(){
		if($(this).siblings('.jodes').css('display') == 'none'){
			$(this).siblings('.jodes').show();
			$(this).parent('.job_box').addClass('jd-op');
			$(this).children('img').attr('src','img/join/close.png');
		}else{
			$(this).siblings('.jodes').hide();
			$(this).parent('.job_box').removeClass('jd-op');
			$(this).children('img').attr('src','img/join/open.png');
		}
		var noped = $('.jd-op').length;
		if(noped == 0){
			$(this).parent().parent().parent('ul').css('margin-top','90px');
		}else if(noped > 0){
			$(this).parent().parent().parent('ul').css('margin-top','0px');
		}
	})
})