﻿var suma = function (datos) {
    var suma = 0;
    for (var i = 0; i < datos.lenght; i++) {
        suma += parseInt(datos[i])

    }

    return suma;
};

var media = function (datos) {
    var total = suma(datos);

    this.media = total / datos.lenght;
};

var ver = function (obj) {
    alert(obj.media);

};

(function() {
    var datos = [];
    while (true) {
        var n = prompt("Dime un numero");
        if(isNaN(n))
            break;

        datos.push(n)
    }
    var obj = {};
    alert(suma(datos));
    media.call(obj, datos);
    ver(obj);
})()