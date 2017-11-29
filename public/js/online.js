$(document).ready(function () {
	$('.les_ch ul').on("click","li",function(){
		$(this).addClass('le_ced');
		$(this).siblings('li').removeClass('le_ced');
		if($(this).text() == 'vip自习室'){
			$('ul.le_gr').hide();
			$('ul.le_su').hide();
			$('ul.le_mo').hide();
		}else if($(this).text() == '小学' || $(this).text() == '初中' || $(this).text() == '高中'){
			$('ul.le_gr').show();
			$('ul.le_su').show();
			$('ul.le_mo').show();
		}
		var le_gra = $(this).attr('data-lg');
		var le_sub = $(this).attr('data-ls');
		// le_sub = le_sub.split(',');
		var le_add = $(this).attr('data-la');
		// le_add = le_add.split(',');
		var lghtml = "<img src='img/onl/tb2.png'><span>年&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;级：</span>";
		var lshtml = "<img src='img/onl/tb3.png'><span>科&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目：</span>";
		var lahtml = "";
		if(le_gra){
			le_gra = le_gra.split(',');
			for(var i=0;i<le_gra.length;i++){
				if(i == 0){
					lghtml += "<li class='le_ced'>"+le_gra[0]+"</li>";
				}else{
					lghtml += "<li>"+le_gra[i]+"</li>";	
				}
			}
			$('ul.le_gr').html(lghtml);
		}
		if(le_add){
			le_add = le_add.split(',');
			for(var n=0;n<le_add.length;n++){
				if(n == 0){
					lahtml += "<li class='le_ced'>"+$(this).text()+le_add[0]+"校区</li>";
				}else{
					lahtml += "<li>"+$(this).text()+le_add[n]+"校区</li>";	
				}
			}
			$('ul.le_sad').html(lahtml);
		}
	})
})