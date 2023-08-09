$(document).ready(function () {
    $(".accordion .accordion-button").on("click", function () {
        var readMore = $(this).find(".read-more");
        var readLess = $(this).find(".read-less");

        if (readMore.is(":visible")) {
            readMore.hide();
            readLess.show();
        } else {
            readMore.show();
            readLess.hide();
        }
    });
});
