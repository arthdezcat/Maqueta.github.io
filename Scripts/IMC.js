function Calcular(){
    var Peso = document.getElementById("Peso").value;
    var Estatura = document.getElementById("Estatura").value;
    var Resultado_IMC;
    
    
    Resultado_IMC= (parseInt(Peso)/(parseInt(Estatura)*parseInt(Estatura)))*10000;
    
    document.getElementById("Res")
        .value =(Resultado_IMC);    
}
