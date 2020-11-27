var frecciaSinistra = $("div.prev");
var frecciaDestra = $("div.next");
var imgSuccessiva, imgCorrente, imgPrecedente;
var ultimo = $(".last");
var primo = $(".first");
var secondaImg = $("img:nth-child(2)")
var terzaImg = $("img:nth-child(3)")
frecciaDestra.click(function(){
    imgCorrente = $(".active");
    imgSuccessiva = $("img.active + img");
    if (ultimo.hasClass("active")){
        imgSuccessiva = $("img.first");
    }
    imgCorrente.removeClass("active");
    imgSuccessiva.addClass("active");
})
frecciaSinistra.click(function(){
    if (primo.hasClass("active")){
        imgPrecedente = $("img.last");
    }else if (ultimo.hasClass("active")){
        imgPrecedente = $("img:nth-child(3)");
    }else if (terzaImg.hasClass("active")){
        imgPrecedente = $("img:nth-child(2)");
    }else if (secondaImg.hasClass("active")){
        imgPrecedente = $("img.first");
    }
    imgCorrente = $(".active");
    imgCorrente.removeClass("active");
    imgPrecedente.addClass("active");
})
