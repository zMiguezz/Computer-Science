// function palindromo (palabra) {
//        const palabraInvertida = palabra;
//        //    .join().split()
//         if (palabra.reverse().toLowerCase() === palabraInvertida) {
//             return true;
//         } else {
//             return false;
//         }             
// }
// palindromo("reconocer");


function palindromo(palabra) {
    const palabraInvertida = palabra.split('').reverse().join('').toLowerCase();
    return palabra.toLowerCase() === palabraInvertida;
}

console.log(palindromo("RECONOCER")); // Output: true