$(document).ready(function() {
    $("#hideButton").click(function() {
        $("#hide").hide();
    });

    $("#showButton").click(function() {
        $("#show").show();
    });

    $("#toggleButton").click(function() {
        $("#toggle").toggle();
    });

    $( "#slideDownButton" ).click(function() {
        if ($("#slideDown").is(":hidden")) {
            $( "#slideDown" ).slideDown("slow");
        } else {
            $( "#slideDown" ).hide();
        }
    });

    $( "#slideUpButton" ).click(function() {
        $( "#slideUp" ).slideUp( "slow", function() {
          // Animation complete.
        });
    });

    $( "#slideToggleButton" ).click(function() {
        $( "#slideToggle" ).slideToggle( "slow");
    });

    $( "#fadeInButton" ).click(function() {
        $( "#fadeIn" ).fadeIn();
    });

    $( "#fadeOutButton" ).click(function() {
        $( "#fadeOut" ).fadeOut();
    });

    $( "#addClassButton" ).click(function() {
        $( "#addClass" ).addClass("text-center");
    });

    $( "#beforeButton" ).click(function() {
        $( "#before" ).before("<p>Before paragraph</p>");
    });

    $( "#afterButton" ).click(function() {
        $( "#after" ).after("<p>After paragraph</p>");
    });

    $( "#appendButton" ).click(function() {
        $( "#append" ).append("<p>Append paragraph</p>");
    });

    $( "#htmlButton" ).click(function() {
        $( "#html" ).html("<p>New HTML paragraph</p>");
    });

    $( "#attrButton" ).click(function() {
        var title = $( "#attr" ).attr("title");
        $("#attr").append("<p>" + title + "</p>");
    });

    $( "#valButton" ).click(function() {
        var val = $( "#vals" ).val();
        $("#head").append("<p>" + val + "</p>");
    });

    $( "#textButton" ).click(function() {
        var text = $( "#text" ).text();
        $("#text").append("<p>" + text + "</p>");
    });
});