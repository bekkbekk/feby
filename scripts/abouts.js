window.onload = function() {

    // ---------- VARAIABLES ----------
    var menu_btn = document.querySelector('.hamburger');
    var mobile_nav = document.querySelector('.mobile-nav');

    // intial events on loading screen
    if (window.pageYOffset > 45) {
        document.querySelector("#header").classList.add("is-scrolling")
    }
    document.querySelector("#details").classList.add("active");

    // ---------- EVENT LISTENERS ----------
    window.addEventListener("scroll", function (e) {
        showHeader();

        menu_btn.classList.remove("is-active");
        mobile_nav.classList.remove("is-active");
    });

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle("is-active");
        mobile_nav.classList.toggle("is-active");
    });






    function showHeader() {
        if (window.pageYOffset > 45) {
            document.querySelector("#header").classList.add("is-scrolling")
        } else {
            document.querySelector("#header").classList.remove("is-scrolling")
        }
    }

}