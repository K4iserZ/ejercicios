function ejemplo1(){
    alert("Bienvenidos a todosssss ");
}
function ejemplo2(){
    let nombre;
    nombre=prompt("Ingrese nombre:","");
    alert("Bienvenid@"+nombre);
}
function ejemplo3(){
    let n1,n2,suma;
    n1=prompt("Ingresar priomer numero");
    n2=prompt("Ingresar segundo numero");
    suma=parseInt(n1)+parseInt(n2);
    document.write("La suma es: "+suma);
}
function ejemplo4(){
    document.write('<img src="https://pbs.twimg.com/media/F7j8lSmXYAAeG-0?format=jpg&name=large">')
}
function ejemplo5(){
    let respuesta = confirm("¿Desea visitar la pagina de la UTP?")
    if(respuesta){
        alert("Bien!!, buenas eleccion")
        window.location="https://j-novel.club/";
    }
    else{
        alert("Ok,sera en otro momento");
    }
}
function ejemplo6(){
    let n;
    n = document.getElementById('nombre').value;
    document.write("Bienvenido"+n);
}
function ejemplo7(){
    let respuesta1, medio;
    respuesta1 = document.getElementsByName('resp');
    for (var i=0; i<respuesta1.length; i++){
        if(respuesta1[i].checked)
        medio = respuesta1[i].value;
    }
    document.write("Usted se desplaza en "+medio);
}
function ejemplo8(){
    let n1,n2,p;
    n1 = document.producto.nro1.value;
    n2 = document.producto.nr2.value;
    p = n1 * n2;
    document.producto.resultado.value = p;
}
function ejercicio1(){
    let dato,calculo,total;
    dato = document.getElementsByName('dato');
    if(dato <= 12){
        calculo = 54*0.15;
        total = dato-calculo;
    }
    else{
        calculo = 54*0.1;
        total = dato-calculo;
    }
    
    document.write("El monto final es: "+total);
}

function ejercicio1() {
    var edad = parseInt(document.getElementById("edad").value);
    var monto = parseFloat(document.getElementById("monto").value);

    var descuento = 0;
    if (edad <= 12) {
        descuento = 0.15; 
    } else {
        descuento = 0.10; 
    }
    var precioFinal = monto - (monto * descuento);
    document.getElementById("pagoFinal").textContent = precioFinal.toFixed(2); // Redondear a 2 decimales
}

function ejercicio2() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);

    var promedio = (nota1 + nota2 + nota3) / 3;

    document.getElementById("promedioFinal").textContent = promedio.toFixed(2);

    var resultado = "Desaprobado";
    if (promedio >= 12) {
        resultado = "Aprobado";
    }

    document.getElementById("resultado").textContent = resultado;
}

/*Elaborar un programa que permita ingresar una secuencia de números enteros y cuente la cantidad de números
positivos y negativos que se ingresaron. El programa termina cuando se ingresa el numero cero.
*/
let cantidadPositivos = 0;
let cantidadNegativos = 0;
function ejercicio3() {
    let numero;
    numero = parseInt(document.getElementById("numeroInput").value);
    if (numero === 0) {
        alert("Ingresaste 0. El programa ha terminado.");
        return;
    } else if (isNaN(numero)) {
        alert("Por favor, ingresa un número válido.");
        return;
    }

    if (numero > 0) {
        cantidadPositivos++;
    } else {
        cantidadNegativos++;
    }

    document.getElementById("positivos").textContent = cantidadPositivos;
    document.getElementById("negativos").textContent = cantidadNegativos;

    document.getElementById("numeroInput").value = "";
}

var cantidadNiñosPesados = 0;
var cantidadNiñasBajas = 0;
var pesoTotalNiñas = 0;
var tallaTotalNiños = 0;
var cantidadNiñas = 0;
var cantidadNiños = 0;

function ejercicio4(){
    var peso = parseFloat(document.getElementById("peso").value);
    var talla = parseFloat(document.getElementById("talla").value);
    var genero = document.getElementById("genero").value;

    if (peso > 17 && genero === "niño") {
        cantidadNiñosPesados++;
    }
    if (talla < 0.50 && genero === "niña") {
        cantidadNiñasBajas++;
    }
    if (genero === "niña") {
        pesoTotalNiñas += peso;
        cantidadNiñas++;
    }
    if (genero === "niño") {
        tallaTotalNiños += talla;
        cantidadNiños++;
    }

    document.getElementById("cantidadNiñosPesados").textContent = cantidadNiñosPesados;
    document.getElementById("cantidadNiñasBajas").textContent = cantidadNiñasBajas;
    document.getElementById("pesoPromedioNiñas").textContent = (pesoTotalNiñas / cantidadNiñas).toFixed(2);
    document.getElementById("tallaPromedioNiños").textContent = (tallaTotalNiños / cantidadNiños).toFixed(2);
    document.getElementById("peso").value = "";
    document.getElementById("talla").value = "";
}