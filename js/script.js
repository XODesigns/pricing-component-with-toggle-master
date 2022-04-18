

$("#toggle").change(function(){

    if ($(this).is(":checked")){

        $(".slider").addClass("background")
        $(".price-year").addClass("hide")
        $(".price").removeClass("hide")
    } else {
        $(".slider").removeClass("background")
        $(".price-year").removeClass("hide")
        $(".price").addClass("hide")
    }
    
})