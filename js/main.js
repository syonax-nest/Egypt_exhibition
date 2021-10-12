$('.menu-bar').on('click',function(){
    if($('.header-menu').hasClass('open')){
        $('.header-menu').removeClass('open');
        $('.header-menu').addClass('close');
        $('.menu-bar').toggleClass('change');
    }else if ($('.header-menu').hasClass('close')){
        $('.header-menu').removeClass('close');
        $('.header-menu').addClass('open');
        $('.menu-bar').toggleClass('change');
    }
})

$('.nav-area a').on('click', function(){
    $('.header-menu').removeClass('open');
    $('.header-menu').addClass('close');
    $('.menu-bar').toggleClass('change');
})

$('.loop-list li a').click(function() {
    var imgSrc = $(this).children().attr('src');
    $('.modal-bigimg').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    return false
  });

$('.modal-close').click(function() {
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'visible');
    return false
  });