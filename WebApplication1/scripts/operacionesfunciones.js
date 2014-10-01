function sumar(n1, n2) {
    this.resultado= n1 + n2
    return n1 + n2;
}

(function () {
    var r = sumar(15, 20)

    alert(r)
    var obj = {x:22,y:44}; //esto es un objeto xq está entre llaves q son la property y el value de la property(se llama JSON)

    //apply y call
    var args = [5, 23];
    var rr = sumar.apply(obj, args); //el apply me sirve para poder cambiar la referencia de this, y para acceder a propiedades de la función que de otras maneras no podría
    var rrr = sumar.call(obj, 5, 23); //apply y call tienen su utilidad cuando se trabaja con objetos

    alert("Con apply" +rr);
    alert("Con call" +rrr);
})();