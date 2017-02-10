$(function () {
    smoothScroll(250);
    mobileDropdown(200);
});


// smoothScroll
function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

// mobileDropdown
function mobileDropdown(duration) {
    $(".ddbtn").on('click', function () {
        $(this).toggleClass("on");
        $(".ddwn .ddctn").slideToggle(duration, function () {
            $(this).toggleClass("active");
        });
    });
}
