$(document).ready(function(){
    _scrollToTop.action();
    _moduleSlickMenu.action();
});

var _scrollToTop = (function(){
    var scroll = $(".to-top"),
        top = 300,
        delay = 800;
    return {
        action: function(){
            scroll.fadeOut();
            $(window).on("scroll",function() {
                if($(window).scrollTop() >= top) {
                    scroll.fadeIn();
                } else {
                    scroll.fadeOut();
                }
            });
            scroll.on("click",function(e) {
               // e.preventDefault();
                $('body,html').animate(
                    {scrollTop:0},
                    delay
                );
            });
        }
    }
})();

var _moduleSlickMenu = (function(){
    var _topMenu = $('.header-menu__list'),
        _prependTo = '.l-nav',
        _labelTopMenu = '';

    return {
        action: function(){
            _topMenu.slicknav({
                label: _labelTopMenu,
                prependTo: _prependTo
            });
        }
    }
})();