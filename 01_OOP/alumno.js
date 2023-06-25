class Alumno {
    constructor(nombre, apellido, califFinal) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal = califFinal;
        this.inscrito = this.aprobado(); // Asignar resultado de aprobado() a inscrito
    }

    ObtenerInicialesDeAlumno() {
        const iniciales = this.nombre.charAt(0) + this.apellido.charAt(0);
        console.log(iniciales);
    }

    ObtenerNombreCompleto() {
        console.log(this.nombre);
    }

    aprobado() {
        if (this.califFinal > 5) {
            return true;
        } else {
            return false;
        }
    }
}

let alumno1 = new Alumno("Luis Fernando", "Luna Martinez", 7);
let alumno2 = new Alumno("Maria Luisa", "Perez Ramirez", 5);
let alumno3 = new Alumno("Sandra Melissa", "Cuevas Reyes", 9);
let alumno4 = new Alumno("Santiago", "Liceo Hernandez", 3);

console.log(alumno1);
console.log(alumno2);
console.log(alumno3);
console.log(alumno4);



