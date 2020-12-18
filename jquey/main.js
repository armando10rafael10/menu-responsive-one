$(document).ready(function () {
    $('.sub-menu-1').click(function () {
        $(this).toggleClass("sub-menu-color-static");
        $('#s1').toggleClass('menu-responsive-width-activo');
        $(".sub-menu-1 .oculto").toggleClass('fa-caret-up');
        if ($('#s2').hasClass('menu-responsive-width-activo')) {
            $('.sub-menu-2').toggleClass("sub-menu-color-static");
            $('#s2').toggleClass('menu-responsive-width-activo');
            $(".sub-menu-2 .oculto").toggleClass('fa-caret-up');
            console.log('the one sub-menu is open');
        }
        else {
            console.log('the one sub-menu isnt open');
        }
    });
    $('.sub-menu-2').click(function () {
        $(this).toggleClass("sub-menu-color-static");
        $('#s2').toggleClass('menu-responsive-width-activo');
        $(".sub-menu-2 .oculto").toggleClass('fa-caret-up');
        if ($('#s1').hasClass('menu-responsive-width-activo')) {
            $('.sub-menu-1').toggleClass("sub-menu-color-static");
            $('#s1').toggleClass('menu-responsive-width-activo');
            $(".sub-menu-1 .oculto").toggleClass('fa-caret-up');
            console.log('the one sub-menu is open');
        }
        else {
            console.log('the one sub-menu isnt open');
        }
    });
    $('.menu-toggle').click(function () {
        $('nav').toggleClass('menu-responsive-active');
    });
});