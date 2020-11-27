var frecciaSinistra = $("div.prev");
var frecciaDestra = $("div.next");
var imgSuccessiva, imgCorrente, imgPrecedente, bottoneSuccessivo, bottonePrecedente;
var ultimo = $(".last");
var primo = $(".first");
var secondaImg = $("img:nth-child(2)")
var terzaImg = $("img:nth-child(3)")
frecciaDestra.click(function(){
    corrente = $(".active");
    imgSuccessiva = $(".active + img");
    bottoneSuccessivo = $(".active + i")
    if (ultimo.hasClass("active")){
        imgSuccessiva = $(".first");
    }
    corrente.removeClass("active");
    imgSuccessiva.addClass("active");
    bottoneSuccessivo.addClass("active");
})
frecciaSinistra.click(function(){
    if (primo.hasClass("active")){
        imgPrecedente = $("img.last");
        bottonePrecedente = $("i.last")
    }else if (ultimo.hasClass("active")){
        imgPrecedente = $("img:nth-child(3)");
        bottonePrecedente = $(".nav i:nth-child(3)");
    }else if (terzaImg.hasClass("active")){
        imgPrecedente = $("img:nth-child(2)");
        bottonePrecedente = $(".nav i:nth-child(2)");
    }else if (secondaImg.hasClass("active")){
        imgPrecedente = $("img.first");
        bottonePrecedente = $("i.first")
    }
    corrente = $(".active");
    corrente.removeClass("active");
    imgPrecedente.addClass("active");
    bottonePrecedente.addClass("active");
})
