function calcular(event){
    event.preventDefault();
    let alcoolInput = document.getElementById("alcool").value ;
    let gasolinaInput = document.getElementById("gasolina").value ;

    /* Calculo do combustivel  
    calculo = alcool/gasolina
    se o resultado for menor que 0.7 compensa usar alcool
    */
    let calculo = (alcoolInput / gasolinaInput);

    if(calculo < 0.7){
        //compensa usar alcool
        alert("COMPENSAR USAR ÁLCOOL")
    }else{
        //compensa usar gasolina
        alert("COMPENSA USAR GASOLINA")
    }
}