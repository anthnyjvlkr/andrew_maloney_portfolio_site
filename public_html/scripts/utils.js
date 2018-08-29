$(document).ready(function () {
    let nav = document.querySelector('#nav');

    window.onscroll = function() {
        "use strict";
        if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
            nav.classList.add('scroll');
            console.log('added')
        } else {
            nav.classList.remove('scroll');
            console.log('removed')
        }
    };
});

$("#welcome").click(function() {
    $('html,body').animate({
            scrollTop: $(".content").offset().top},
        'slow');
});

