$(function() {
    $('.bullet').click(function() {
        var $el = $(this);
        $('.bullet').removeClass('active');
        $el.addClass('active');
        var bulletIndex = $el.index();
        var offset = -25;
        var result = (bulletIndex * offset);
        $('.carousel_list').css('transform', 'translate(0,' + result + '%)');
    });


    var $btn = $(".navbar-toggle");
    var $menu = $(".navigation");
    $btn.click(function() {
        $menu.slideToggle();
    })

})
