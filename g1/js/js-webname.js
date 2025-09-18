document.addEventListener("DOMContentLoaded", loaded);

function loaded() {
    setInterval(loopTitle, 300);

    $(window).on("scroll", function () {
        var a = $("#header");
        $(window).scrollTop() > 200 ? a.addClass("sticky_navigation") : a.removeClass("sticky_navigation");
    });

    $("#wrapper-dropdown").click(function () {
        $(this).toggleClass("active");
    });

    $("a[href^='#']").click(function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 2000, function () {
            switch (target) {
                case "#home":
                    $(".navbar-auth").removeClass("advantages-a buy-a support-a").addClass("home-a");
                    $(".navbar-lang").removeClass("lang-advantages lang-buy lang-support").addClass("lang-home");
                    break;
                case "#advantages":
                    $(".navbar-auth").removeClass("home-a buy-a support-a").addClass("advantages-a");
                    $(".navbar-lang").removeClass("lang-home lang-buy lang-support").addClass("lang-advantages");
                    break;
                case "#buy":
                    $(".navbar-auth").removeClass("home-a advantages-a support-a").addClass("buy-a");
                    $(".navbar-lang").removeClass("lang-home lang-advantages lang-support").addClass("lang-buy");
                    break;
                case "#support":
                    $(".navbar-auth").removeClass("home-a advantages-a buy-a").addClass("support-a");
                    $(".navbar-lang").removeClass("lang-home lang-advantages lang-buy").addClass("lang-support");
                    break;
            }
        });
    });

    $(".support-item").click(function () {
        const id = $(this).attr("id").split("-")[1];
        if (id >= 1 && id <= 5) {
            for (let i = 1; i <= 5; i++) {
                $("#"+i).toggleClass("active-win", i == id);
            }
        } else if (id == 6) {
            window.open("https://vk.com/qn1s_it");
        }
    });
}

var x = 0;
var titleText = ["|", "", "C_", "CL_", "CLO_", "CLOU_", "CLOUD", " "];

function loopTitle() {
    document.title = titleText[x++ % titleText.length];
}
