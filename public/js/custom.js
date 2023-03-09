/******************************************
    File Name: custom.js
*******************************************/

"use strict";

/**== wow animation ==**/

alert("h")
/**== loader js ==*/

$(window).load(function () {
    $(".bg_load").fadeOut("slow");
});

/**== Menu js ==**/



/** counter js **/

$(".counter-count").each(function () {
    $(this)
        .prop("Counter", 0)
        .animate(
            {
                Counter: $(this).text(),
            },
            {
                duration: 5000,
                easing: "swing",
                step: function (now) {
                    $(this).text(Math.ceil(now));
                },
            }
        );
});

/** progress_bar js **/

$(document).ready(function () {
    $(".progress .progress-bar").css("width", function () {
        return $(this).attr("aria-valuenow") + "%";
    });
});

/** Casestudies Tab_bar js **/

$(document).ready(function () {
    $(".filter-button").click(function () {
        var value = $(this).attr("data-filter");

        if (value == "all") {
            //$('.filter').removeClass('hidden');
            $(".filter").show("1000");
        } else {
            //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
            //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter")
                .not("." + value)
                .hide("3000");
            $(".filter")
                .filter("." + value)
                .show("3000");
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(
        document.getElementById("googleMap"),
        mapProp
    );
}

/**===== End slider =====**/

/** header fixed js **/

$(window).scroll(function () {
    if ($(window).scrollTop() >= 300) {
        $(".header_fixed_on_scroll").addClass("fixed-header");
    } else {
        $(".header_fixed_on_scroll").removeClass("fixed-header");
    }
});


var swiper = new Swiper(".default-swiper", {
    loop: !0,
    autoplay: { delay: 2500, disableOnInteraction: !1 },
}),


swiper = new Swiper(".responsive-swiper", {
    loop: !0,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { el: ".swiper-pagination", clickable: !0 },
    breakpoints: {
        640: { slidesPerView: 4, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 40 },
        1200: { slidesPerView: 4, spaceBetween: 50 },
        
    },
});