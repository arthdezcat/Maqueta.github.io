function Suma() {
  
    var Num1 = document.getElementById("Num1").value;
    var Num2 = document.getElementById("Num2").value;
    
    document.getElementById("Res")
        .value =(parseInt(Num1)+parseInt(Num2));

}

function Resta() {
  
    var Num1 = document.getElementById("Num1").value;
    var Num2 = document.getElementById("Num2").value;
   
    document.getElementById("Res")
        .value =(parseInt(Num1)-parseInt(Num2));

}
function Multiplicacion() {
  
    var Num1 = document.getElementById("Num1").value;
    var Num2 = document.getElementById("Num2").value;

    
    document.getElementById("Res")
        .value =(parseInt(Num1)*parseInt(Num2));

}

function Divicion() {
  
    var Num1 = document.getElementById("Num1").value;
    var Num2 = document.getElementById("Num2").value;
    
    document.getElementById("Res")
        .value =(parseInt(Num1)/parseInt(Num2));

}