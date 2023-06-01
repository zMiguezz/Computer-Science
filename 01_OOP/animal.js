// * *First solution without determining the noun of the animal with an 'if*/

// class Animal {
//     constructor(nombre, edad, sustantivo, tipo) {
//         this._nombre = nombre;
//         this._edad = edad;
//         this._sustantivo = sustantivo
//         this._tipo = tipo;
        
//     }
//     comer(){}
//     saltar(){}
//     saludar(){
//         return `Hola soy ${this._nombre} tengo ${this._edad} años y soy un/una ${this._sustantivo} ${this._tipo}`;
//     } 

//     if ()
// }
// let gato = new Animal ("Sukuna", 3, "Gato")
// let perro = new Animal ("Hannie", 7, "Perro")
// let tortuga = new Animal ("Willyrex", 32, "Tortuga")

// console.log(gato);

// console.log(gato.saludar()); */




//Solution determining the animal noun with an'if'

//There are 4 attributes to the class wich are: name(_nombre), age (_edad), noun (_sustantivo) & type (_tipo). 
class Animal {
    constructor(nombre, edad, sustantivo, tipo) {
      this._nombre = nombre;
      this._edad = edad;
      this._tipo = tipo;
      this._sustantivo = sustantivo;
     
    //'if' to determinine the noun of the animal
      if (tipo.toLowerCase() === "gato" || tipo.toLowerCase() === "perro") {
        this._sustantivo = "el";
      } else {
        this._sustantivo = "la";
      }
    }
   //And there are 3 metods for the class wich are: comer(), saltar(), saludar().
    saludar() {
        return `Hola, soy ${this._nombre}, tengo ${this._edad} años y soy ${this._sustantivo} ${this._tipo} mas bonito do mundo`;
    }
    comer() {
        return `Soy ${this._nombre} y estoy comiendo`
    }
    saltar() {
        return `Me gusta saltar cuando mi dueño me llama por mi nombre (${this._nombre})`
    }
    
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre){
      this._nombre = nuevoNombre;
    }
      }
  //variables for the result
  let gato = new Animal("Sukuna", 3, "Gato", "gato");
  let perro = new Animal("Hannie", 7, "Perro", "perro");
  let tortuga = new Animal("Willyrex", 32, "Tortuga", "tortuga");
  //clg
  console.log(gato.saludar());
  console.log(perro.saludar());
  console.log(tortuga.saludar());


  console.log(gato.comer())
  console.log(perro.comer())
  console.log(tortuga.comer())


  console.log(gato.saltar());
  console.log(perro.saltar());
  console.log(tortuga.saltar());

 


console.log(gato.nombre);



perro._nombre = 'Migue';
console.log(perro._nombre);
  
 