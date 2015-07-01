$(document).ready(function () {
    "use strict";


    $('.info-box').matchHeight();

    $('.backToTop').click(function () {

        $('body').animate({
            scrollTop: 0
        }, '500');

    })


    $(window).scroll(function () {

        if ($(this).scrollTop() > 0) {

            $('#header').css('backgroundColor', '#ccc').css('opacity', 0.96);

        } else {

            $('#header').css('backgroundColor', '#fff').css('opacity', 1);

        }

        if ($(this).scrollTop() > 200) {

            $('.backToTop').css('opacity', 1);

        } else {

            $('.backToTop').css('opacity', 0);

        }

    })



    $('#submit').click(function (e) {

        e.preventDefault();

        var n = document.getElementById('fullname');

        var d = document.getElementById('age');

        addCookie(n.value, d);

    });

    function addCookie(n, d) {

        document.cookie = "name=" + n;

    };

    $('#mailList').click(function () {

        $('#mailList').css('opacity', 0);

        $('#emailEnter').fadeToggle(1000);

    })




});