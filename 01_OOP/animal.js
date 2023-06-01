/*Primera solucion sin el if para determinar*/

// class Animal {
//     constructor(nombre, edad, sustantivo, tipo) {
//         this._nombre = nombre;
//         this._edad = edad;
//         this._sustantivo = sustantivo
//         this._tipo = tipo;
        
//     }
//     comer(){}
//     jugar(){}
//     saludar(){
//         return `Hola soy ${this._nombre} tengo ${this._edad} años y soy un/una ${this._sustantivo} ${this._tipo}`;
//     } 

//     if ()
// }
// let gatoVar = new Animal ("Sukuna", 3, "Gato")
// let perroVar = new Animal ("Hannie", 7, "Perro")
// let tortugaVar = new Animal ("Willyrex", 32, "Tortuga")

// console.log(gatoVar);

// console.log(gatoVar.saludar());




class Animal {
    constructor(nombre, edad, sustantivo, tipo) {
      this._nombre = nombre;
      this._edad = edad;
    this._tipo = tipo;
      if (tipo.toLowerCase() === "gato" || tipo.toLowerCase() === "perro") {
        this._sustantivo = "el";
      } else {
        this._sustantivo = "la";
      }
  //There are 4 attributes to the class wich are: name(_nombre), age (_edad), noun (_sustantivo) & type (_tipo).
      
    }
  
    comer() {}
    jugar() {
        return `Me gusta jugar con la pelota`
    }
    saludar() {
      return `Hola, soy ${this._nombre}, tengo ${this._edad} años y soy ${this._sustantivo} ${this._tipo} mas bonito do mundo`;
    }
    //And there are 3 metods for the class wich are: comer(), jugar(), saludar().
  }
  
  let gatoVar = new Animal("Sukuna", 3, "Gato", "gato");
  let perroVar = new Animal("Hannie", 7, "Perro", "perro");
  let tortugaVar = new Animal("Willyrex", 32, "Tortuga", "tortuga");
  
  console.log(gatoVar.saludar());
  console.log(perroVar.saludar());
  console.log(tortugaVar.saludar());


  console.log(gatoVar.jugar());
  console.log(perroVar.jugar());
  console.log(tortugaVar.jugar());
  
 