$(document).ready(function () {
    $(".nav-link").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                800,
                function () {
                    window.location.hash = hash;
                }
            );

            // Hide the offcanvas
            var bsOffcanvas = bootstrap.Offcanvas.getInstance(document.getElementById("offcanvasNavbar"));
            if (bsOffcanvas) {
                bsOffcanvas.hide();
            }
        }
    });
});
