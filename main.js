//var n1 = 30;
//var n2 = 20;
//var test = 0;
//if(n1 < n2) {
//    console.log("n1 es menor n2");
//}else{
//    console.log("n1 mayor n2");
//    test = suma();
//}
//n1 = 100;
//
//console.log(n1);
//console.log(test);
//
//function suma(){    
//   let resultado = n1 + n2;
//    return resultado;
//}

var elementos = [];
var elementos2 = Array();
var elementos3 = ["hola",1,9,20,15,true,10];
var elementos4 = [];
var palabra = "Hola mundo";
var contenedor = [];


for(let i = 0; i < elementos3.length; i++) {
    console.log(elementos3[i]);
    elementos4.push(elementos3[i]); //Pasa los datos de un arreglo a otro
}
console.log(elementos4);

for(let i = 0; i < palabra.length; i++){
    contenedor.push(palabra[i]);
}
console.log(contenedor);

// Arreglo de clave de valor
var personas = {
    "nombre" : "Itzel",
    "apellido" : "Vaquier",
    "edad" : "18",
    "gustos" : {
        "gusto1" : "bailar",
        "gusto2" : "diseñar",
    }
}
