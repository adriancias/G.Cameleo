jQuery(document).ready(function () {
    $(".intro").ripples({
        dropRadius: 100,
        perturbance: 0.005,
    });

    var typed = new Typed('.intro_text', {
        strings: ["<span class='txtcolor_1'>coding</span>", "<span class='txtcolor_2'>designing</span>", "<span class='txtcolor_3'>supporting</span>"],
        typeSpeed: 150,
        loop: true,

    });

    $(window).scroll(function () {

        var top = $(window).scrollTop();

        if (top >= 60) {
            $("nav").addClass('navabar_background');
        } else
        if ($("nav").hasClass('navabar_background')) {
            $("nav").removeClass('navabar_background');
        }
    })

    $('.projects').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        // other options
        gallery: {
            enabled: true
        }
    });

    $("#reviewers").owlCarousel();

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


});