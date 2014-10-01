function hola(msg) {
    alert(msg);
}

var hola=2 function(msg) {
    alert(msg)
}


hola("Hola");

hola2("Hola");

var hola3 = hola;

hola3("Hola");

//de aquí para abajo es un ejemplo de la diapositiva 6

var pasar=function(objeto) {

    alert(objeto);

}

var recibir=function(pasado) {

    pasado("Estoy llamando a una función desde otra");


}


recibir(pasar);