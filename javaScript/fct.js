//1
function hello() {
    return "hello, world"
}
console.log(hello())
    //2
const add = (x, y) => {
    return x + y
}
console.log(add(2, 8))
length
//3
function longueur(str) {
    return str.length
}
console.log(longueur("object"))
    //4
const prLettre = (str) => {
    return str[0]
}
console.log(prLettre("start"))
    //5
var inverse = function(str) {
    return str.split('').reverse().join('')
        //split()divisera la chaîne en un tableau,reverse(),join(): Cette méthode joint tous les éléments du tableau pour créer une chaîne de caractères.
}
console.log(inverse("string"))
    //6