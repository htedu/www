$(document).ready(function () {
	$('.chat ul li img').mouseenter(function(){
		var ori_class = $(this).attr('class'); 
		if (ori_class.indexOf('_hov') > 0) { 
			var aft_class ='.' + ori_class.substr(0,ori_class.length-4);
			$(this).hide();
			$(aft_class).show();
		}
		if($(this).siblings('.qr')){
			$(this).siblings('.qr').show();
		}			
	})
	$('.chat ul li img').mouseleave(function(){
		var ori_class = $(this).attr('class'); 
		if (ori_class.indexOf('_hov') <= 0) { 
			$(this).hide();
			var aft_class ='.' +  ori_class + "_hov";
			$(aft_class).show();	
			if($(this).siblings('.qr')){
				$(this).siblings('.qr').hide();
			}
		}	
	})
	$('.chat ul li.qq_box').click(function(){
		window.open('http://wpa.qq.com/msgrd?v=3&uin=2692417318&site=qq&menu=yes');
	})
	$('.call_btn ul li').mouseenter(function(){
		if($(this).children('.ban_cov')){
			$(this).children('.ban_cov').show(500);
		}
	})
	$('.call_btn ul li').mouseleave(function(){
		if($(this).children('.ban_cov')){
			$(this).children('.ban_cov').hide(500);
		}
	})

	$('.ban_vod').mouseenter(function(){
		$(this).children('.vod_cov').show();
	})
	$('.ban_vod').mouseleave(function(){
		$(this).children('.vod_cov').hide();
	})

	$('.news_tab ul li').click(function(){
		if($(this).attr('class') != 'news_tab_hov'){
			$(this).addClass('news_tab_hov');
			$(this).siblings('li').removeClass('news_tab_hov');
			var news_box ='.' + $(this).attr('data-det');
			$(news_box).show();
			$(news_box).siblings('.news_list').hide();
		}
	})
	$('.city_cut').mouseenter(function(){
		$('.city_list').show();
	})
	$('.city_cut').mouseleave(function(){
		$('.city_list').hide();
	})

	var tea_num = $('.tea_list ul li').length;
	var tea_liwid = $('.tea_list ul li').width();
	var tea_wid = tea_num * tea_liwid + 12 * tea_num;	
	$('.tea_list ul').width(tea_wid);

	$('.tea_arr a').click(function(){
		if($(this).attr('class') == 'tea_prev'){
			var now_left = $('.tea_list ul').css('margin-left');
			var now_left_num = parseInt(now_left.replace(/[^0-9]/ig,""));
			if(now_left_num != 0){
				$('.tea_list ul').css('margin-left',(0 - now_left_num + tea_liwid + 12 + 'px'));
			}
		}else if($(this).attr('class') == 'tea_next'){
			var now_left = $('.tea_list ul').css('margin-left');
			var now_left_num = parseInt(now_left.replace(/[^0-9]/ig,""));
			if(now_left_num <= tea_liwid * (tea_num - 4)){
				$('.tea_list ul').css('margin-left',(0 - now_left_num - tea_liwid - 12 + 'px'));
			}
		}
	})
})

function ply_vod(){	
	// $('.ban_vod').click(function(){
		// $(this).children('.vod_box').show();
		$('.vod_box').show();
		document.getElementById('comvo').play();
	// })
}
function clo_vod(){
	document.getElementById('comvo').pause();
	$('.vod_box').fadeOut(100);
}