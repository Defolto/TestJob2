var width = window.innerWidth;
$(".sumsung").hide();
if(width < 995){
    $("#block1").addClass("col-3").removeClass("col-md-5");
    $("#block2").addClass("col-3").removeClass("col-md-5");
}
if(width < 578){
    $("#block1").addClass("col-6 my-5").removeClass("col-3");
    $("#block2").addClass("col-6 my-5").removeClass("col-3");
    $(".col-sm-3").eq(1).addClass('order-1');
    $('.navbar-text p').detach();
    $(".sumsung").show();
}
if(width < 768){
    $(".media > img").before("<div>");
    $(".media > img").after("</div>");
    $('.media').addClass('d-flex flex-column');
    $('.applications > div').addClass('d-flex');
    $(".applications .d-flex > .block").filter( ':odd' ).addClass('order-1');
}

