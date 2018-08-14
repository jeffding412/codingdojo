$(document).ready(function() {
    $("img").hover(function () {
        var current = $(this).attr("src");
        var alternate = $(this).attr("alt");
        this.src = alternate;
        this.alt = current;
    }, function () {
        var current = $(this).attr("src");
        var alternate = $(this).attr("alt");
        this.src = alternate;
        this.alt = current;
    });
});