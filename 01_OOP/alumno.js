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
        const BoolAprobado = if 
    }
}

let alumnno1 = new Alumno("","",0,true)









