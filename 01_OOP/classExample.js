class Alumno {
    constructor (nombre, apellido, califFinal, inscrito, calificaciones) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal = califFinal;
        this.inscrito = inscrito;
        this.calificaciones = calificaciones;
        
    }
    presentacion(){
        return `Hola soy ${this.nombre, this.apellido}, mi calificacion final es de ${this.califFinal} `
    }

}
let migue = new Alumno("Miguel", "Hernandez", 10, true, [10, 9, 8, 10, 9]);

console.log(migue); 

getNombre()

