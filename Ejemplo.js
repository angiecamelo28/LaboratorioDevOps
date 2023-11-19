var myCar = {
    "marca": "Chevrolet",
    "modelo": "2018",
    "color": "gris",
    "kilometraje": 50000,
    "estado": "bueno", 

    "mostrarInformacion": function() {
        console.log("Información del automóvil:");
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Color: " + this.color);
        console.log("Kilometraje: " + this.kilometraje + " km");
        console.log("Estado: " + this.estado);
        console.log("\n"); 
    },

    
    "realizarViaje": function(distancia) {
        console.log("Realizando un viaje de " + distancia + " km...");
        this.kilometraje += distancia;
        console.log("Kilometraje actualizado: " + this.kilometraje + " km");
        console.log("\n"); 
    },

    "cambiarColor": function(nuevoColor) {
        console.log("Cambiando el color del automóvil a " + nuevoColor);
        this.color = nuevoColor;
        console.log("Color actualizado: " + this.color);
        console.log("\n"); 
    }
};

myCar.mostrarInformacion();
myCar.realizarViaje(100);
myCar.cambiarColor("azul");
myCar.mostrarInformacion();
