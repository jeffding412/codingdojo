$(document).ready(function() {
    $("img").click(function() {
        var title = $(this).attr("class");
        title = title.replace(/\s/g, '');
        if (title.includes("cat")) {
            title = title.replace("cat", ".ninja.");
        }
        else {
            title = title.replace("ninja", ".cat.");
        }
        $(this).hide();
        $(title).show();
    });
});