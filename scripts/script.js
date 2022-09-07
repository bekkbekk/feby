window.onload = function() {

    // ---------- VARAIABLES ----------
    var menu_btn = document.querySelector('.hamburger');
    var mobile_nav = document.querySelector('.mobile-nav');
    var header = document.querySelector('#header');
    var febyName = document.querySelector('#feby-name');

    // intial events on loading screen
    if (window.pageYOffset > 78) {
        document.querySelector("#header").classList.add("is-scrolling")
    }
    reveal();

    // ---------- EVENT LISTENERS ----------
    window.addEventListener("scroll", function (e) {
        // console.log(window.pageYOffset);
        showHeader();
        reveal();
    });

    menu_btn.addEventListener('click', function() {
        menu_btn.classList.toggle("is-active");
        mobile_nav.classList.toggle("is-active");
        header.classList.toggle("is-active");
        febyName.classList.toggle("is-active");
    });


    // ---------- FUNCTIONS ----------
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
            var winHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < winHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    function showHeader() {
        if (window.pageYOffset > 78) {
            document.querySelector("#header").classList.add("is-scrolling")
        } else {
            document.querySelector("#header").classList.remove("is-scrolling")
        }
    }

}