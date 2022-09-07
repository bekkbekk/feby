window.onload = function () {

    // intial events on loading screen
    if (window.pageYOffset > 78) {
        document.querySelector("#header").classList.add("is-scrolling")
    }
    reveal();

    // navbar
    window.addEventListener("scroll", function (e) {
        // console.log(window.pageYOffset);

        if (window.pageYOffset > 78) {
            document.querySelector("#header").classList.add("is-scrolling")
        } else {
            document.querySelector("#header").classList.remove("is-scrolling")
        }
    });

    // reveal animation
    window.addEventListener("scroll", reveal);

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

}