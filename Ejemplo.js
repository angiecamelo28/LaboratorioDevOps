var myCar = {
    "marca": "Chevrolet",
    "modelo": "2018",
    "color": "gris",
    "mostrarInformacion": function() {
        console.log("Información del automóvil:");
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Color: " + this.color);
    }
};

myCar.mostrarInformacion();