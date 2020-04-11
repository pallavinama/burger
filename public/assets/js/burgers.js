$(function(){
    console.log("in burgers.js script");
    $(".add-form").on("submit", function(event){
        event.preventDefault();

        console.log("add button clicked");
        var newBurger = {
            burger_name: $("#addBurger").val().trim(),
            devoured: "0"
        }

        $.ajax("/burger/create", {
            "type": "POST",
             data: newBurger
        }).then(function(){
            location.reload();
        });
    });

    $(".devour-form").on("submit", function(event){
        event.preventDefault();

        console.log("devour button clicked");
        var id = $("#id").val().trim();

        $.ajax("/burger/devour/"+id, {
            "type": "POST",
             data: id
        }).then(function(){
            location.reload();
        });

    });    
});