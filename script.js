function calcular(event){
    event.preventDefault();
    let alcoolInput = document.getElementById("alcool").value ;
    let gasolinaInput = document.getElementById("gasolina").value ;
    let contentResult = document.getElementById("content-result");
    let  textResult =  document.getElementById("text-result");

    let gasolinaSpan = document.getElementById("gasolina-result");
    let alcoolSpan = document.getElementById("alcool-result");

    /* Calculo do combustivel  
    calculo = alcool/gasolina
    se o resultado for menor que 0.7 compensa usar alcool
    */
    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7){
        //compensa usar alcool
        textResult.innerHTML = "COMPENSAR USAR ÁLCOOL";
    }else{
        //compensa usar gasolina
        textResult.innerHTML = "COMPENSA USAR GASOLINA";
    }

    gasolinaSpan.innerHTML = "Gasolina R$" + gasolinaInput;
    alcoolSpan.innerHTML = "Álcool R$"  + alcoolInput;

    contentResult.classList.remove("hide")
}