$(document).ready(function () {
    $(window).scroll(function () {
        var positiontop = $(document).scrollTop();
        console.log(positiontop);

        if ((positiontop > 10) && (positiontop < 300)) {

            $('#u1').addClass('animate__animated animate__bounceInLeft');
            $('#banner-img').addClass('animate__animated animate__zoomIn');
        }

        });
    })