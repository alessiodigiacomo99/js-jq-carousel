var frecciaSinistra = $("div.prev");
var frecciaDestra = $("div.next");
var imgSuccessiva, corrente, imgPrecedente, bottoneSuccessivo, bottonePrecedente;
var ultimo = $(".last");
var primo = $(".first");
var secondaImg = $("img:nth-child(2)");
var terzaImg = $("img:nth-child(3)");
var primoBottone = $("i.first")
var secondoBottone = $("i:nth-child(2)");
var terzoBottone = $("i:nth-child(3)");
var quartoBottone = $("i.last");
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
primoBottone.click(function(){
    corrente = $(".active");
    corrente.removeClass("active");
    primo.addClass("active");
})
secondoBottone.click(function(){
    corrente = $(".active");
    corrente.removeClass("active");
    secondoBottone.addClass("active");
    secondaImg.addClass("active");
})
terzoBottone.click(function(){
    corrente = $(".active");
    corrente.removeClass("active");
    terzoBottone.addClass("active");
    terzaImg.addClass("active");
})
quartoBottone.click(function(){
    corrente = $(".active");
    corrente.removeClass("active");
    ultimo.addClass("active");
})