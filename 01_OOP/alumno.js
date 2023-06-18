class Alumno {
    constructor(nombre, apellido, califFinal, inscrito) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal = califFinal;
        this.inscrito = inscrito;
    }


    ObtenerInicialesDeAlumno() {
        const iniciales = this.nombre.charAt(0) + this.apellido.charAt(0);
        console.log(iniciales);
    }

    ObtenerNombreCompleto() {
        console.log(this.nombre);
    }

    aprobado() {
        
    }
}

let alumno1 = new Alumno("Luis Fernando", "Luna Martinez", 6, boolAprobado());
let alumno2 = new Alumno("Maria Luisa", "Perez Ramirez", 5, boolAprobado());
let alumno3 = new Alumno("Sandra Melissa", "Cuevas Reyes", 9, boolAprobado());
let alumno4 = new Alumno("Santiago", "Liceo Hernandez", 3, boolAprobado());

console.log(alumno1)
console.log(alumno2)
console.log(alumno3)
console.log(alumno4)





    function boolAprobado() {
        if (this.califFinal > 6) {
            return true;
        } else {
            return false;
        }
   }






