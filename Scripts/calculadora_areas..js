function Cuadrado() {
  
    var LadoA = prompt('Ingrese El Lado A');
    var LadoB = prompt('Ingrese El Lado B');
    var Rest;

    Rest=parseInt(LadoA)*parseInt(LadoB);
    
    document.getElementById('contenidoC').innerHTML= "El Lado A Es : "+ (LadoA)+"<br>"+"<br>"+"El Lado B Es: "+ (LadoB)+"<br>"+"<br>"+"El Area Del Cuadrado Es: "+ (Rest);

}

function Rectangulo() {
  
    var BaseR = prompt('Ingrese la Base');
    var AlturaR = prompt('Ingrese la Altura');
    var RestR;

    RestR=parseInt(BaseR)*parseInt(AlturaR);
    
    document.getElementById('contenidoR').innerHTML= "La Base Es : "+ (BaseR)+"<br>"+"<br>"+"La Altura Es: "+ (AlturaR)+"<br>"+"<br>"+"El Area Del Rectangulo Es: "+ (RestR)

}
function Triangulo() {
  
    var BaseT = prompt('Ingrese la Base');
    var AlturaT = prompt('Ingrese la Altura');
    var RestT;

    RestT=(parseInt(BaseT)*parseInt(AlturaT))/2;
    
    document.getElementById('contenidoT').innerHTML= "La Base Del Triangulo Es : "+ (BaseT)+"<br>"+"<br>"+"La Altura Del Triangulo Es: "+ (AlturaT)+"<br>"+"<br>"+"El Area Del Triangulo Es: "+ (RestT)

}

function Circulo() {
  
    var Radio= prompt('Ingrese el Radio');
    var RestC;

    RestC=3.1416*(parseInt(Radio)*parseInt(Radio));
    
    document.getElementById('contenidoCir').innerHTML= "El Radio Es : "+ (Radio)+"<br>"+"<br>"+"El Area Del Circulo Es: "+ (RestC)

}