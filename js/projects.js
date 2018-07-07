"use strict";

// Navbar scroll interactivity
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('.navbar').css('background', 'white');
        $('.navbar-brand, .navbar .collapse .navbar-nav a ').css('color', '#1B2745');

    } else {
        $('.navbar').css('background', '#1B2745');
        $('.navbar-brand, .navbar .collapse .navbar-nav a ').css('color', 'white');
    }
});


// Show/Hide buttons
$(document).ready(function () {

    //Problem interactivity
    $("#hideproblem").hide();
    $("#hideproblembutton").hide();
    $("#hideproblembutton").click(function () {
        $("#hideproblem").hide();
        $("#hideproblembutton").hide();
        $("#showproblembutton").show();
    });
    $("#showproblembutton").click(function () {
        $("#hideproblem").show();
        $("#hideproblembutton").show();
        $("#showproblembutton").hide();
    });

    // Solutions interactivity
    $("#hidesolution").hide();
    $("#hidesolutionbutton").hide();
    $("#hidesolutionbutton").click(function () {
        $("#hidesolution").hide();
        $("#hidesolutionbutton").hide();
        $("#showsolutionbutton").show();
    });
    $("#showsolutionbutton").click(function () {
        $("#hidesolution").show();
        $("#hidesolutionbutton").show();
        $("#showsolutionbutton").hide();
    });

    // Evaluation interactivity
    $("#hideeval").hide();
    $("#hideevalbutton").hide();
    $("#hideevalbutton").click(function () {
        $("#hideeval").hide();
        $("#hideevalbutton").hide();
        $("#showevalbutton").show();
    });
    $("#showevalbutton").click(function () {
        $("#hideeval").show();
        $("#hideevalbutton").show();
        $("#showevalbutton").hide();
    });

    // Limitations interactivity
    $("#hidelimitations").hide();
    $("#hidelimitationsbutton").hide();
    $("#hidelimitationsbutton").click(function () {
        $("#hidelimitations").hide();
        $("#hidelimitationsbutton").hide();
        $("#showlimitationsbutton").show();
    });
    $("#showlimitationsbutton").click(function () {
        $("#hidelimitations").show();
        $("#hidelimitationsbutton").show();
        $("#showlimitationsbutton").hide();
    });

    // User Doc interactivity
    $("#hideuserdoc").hide();
    $("#hideuserdocbutton").hide();
    $("#hideuserdocbutton").click(function () {
        $("#hideuserdoc").hide();
        $("#hideuserdocbutton").hide();
        $("#showuserdocbutton").show();
    });
    $("#showuserdocbutton").click(function () {
        $("#hideuserdoc").show();
        $("#hideuserdocbutton").show();
        $("#showuserdocbutton").hide();
    });

});