$(document).ready(function () {    
    $('.sc-td').click(function(){
        var s_n = $(this).siblings('.sc-inf').children('.sc-name').text();
        var s_d = $(this).attr('data-sde');
        var s_a = $(this).siblings('.sc-inf').children('.sc-add').text();
        var s_t = $(this).siblings('.sc-inf').children('.sc-tel').text();
        var sdhtml = "<p><span class='sic_n'>" + s_n + "</span>"+ s_d +"</p>";
        var sahtml = "<p><img src='img/sch/sc_ad.png' alt='地址'>" + s_a + "</p>";
        var sthtml = "<p><img src='img/sch/sc_tel.png' alt='电话'>" + s_t + "</p>";
        $('.scin').children('.si_c').html(sdhtml);
        $('.scin').children('.si_a').html(sahtml);
        $('.scin').children('.si_t').html(sthtml);
        $('.scin').show();
    })
    $('.si_cl').click(function(){
        $(this).parents('.scin').hide();
    })
    $('.scm_l ul li').click(function(){
        $(this).addClass('scv');
        $(this).siblings('li').removeClass('scv');
        var fd ='ul.' + $(this).attr("data-fd");
        $(".scm_r").children(fd).show();
        $(fd).siblings('ul').hide();
    })
})