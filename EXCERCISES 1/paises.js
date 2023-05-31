function longestCountry(paises) {
    return paises.reduce((a, b) => a.length > b.length ? a : b);
}

const paises = ["Mexico", "Panama", "Guatemala", "El Salvador", "Costa Rica", "Nicaragua", "Honduras"];
console.log(longestCountry(paises));