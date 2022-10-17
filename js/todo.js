$("ul").on("click", "li", function(){
    $(this).toggleClass("select");
})

$("ul").on("click", " li span", function(){
    $(this).parent().fadeOut(400, function(){
        this.remove();
    })
    $(this).stopPropagation();
})

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        if(!($(this).val() === "")) {
            var text = $(this).val();
            $("ul").append("<li><span><i class='fas fa-trash'></i></span>" + text +"</li>");
        }
        $(this).val("");
    }
})

$(".fa-feather-alt").click(function(){
    $("input[type='text']").fadeToggle();
})
