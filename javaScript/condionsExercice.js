//1
let number = 34
if (number > 0) {
    console.log("Positive")
}
//2
let Num = 32
if (Num % 2 == 0) {
    console.log("Pair")
} else {
    console.log("Impair")
}
//3
let a = 32
let b = 21
    //if(!a || !b){console.log("l'un des nombre n'est pas déclarée")}
    // else {
if (a < b) {
    console.log(a + " est inferieur de " + b)
} else if (a > b) {
    console.log(b + " est superieur de " + a)
} else {
    console.log(a + " et " + b + " sont egaux");
}
//}
//4
let temp = 32
if (temp > 30) {
    console.log("Chaud")
} else if (temp < 15 && temp > 30) {
    console.log("Tiède")
} else {
    console.log("Foid")
}
//5
let password = "azerty"
if (password = "letmein") {
    console.log("Accès Accordé")
} else {
    console.log("Accès Refusé")
}
//6
let day = 3
switch (day) {
    case 1:
        console.log("Lundi")
        break;
    case 2:
        console.log("Mardi")
        break;
    case 3:
        console.log("Mercredi")
        break;
    case 4:
        console.log("Jeudi")
        break;
    case 5:
        console.log("Vendredi")
        break;
    case 6:
        console.log("Samedi")
        break;
    case 7:
        console.log("Dimanche")
        break;
    default:
        console.log("it's not a day")
        break;
}
//7
let age = 32
if (age < 13) {
    console.log("Child");
} else if (age > 13 && age < 17) {
    console.log("Teen");
} else {
    console.log("Adult");
}
//8
let light = "red"
switch (light) {
    case "red":
        console.log("Stop")
        break;
    case "jaune":
        console.log("Slow")
        break;
    case "green":
        console.log("Go")
        break;
}
//9
let Year = 360
Year = 366 ? console.log("année bissextile") : console.log("year")
    //9
let year = 2024
if (year % 4 == 0 && year % 100 !== 0 || year % 400 == 0) {
    console.log("année bissextile");
} else {
    console.log("année n'est pas bissextile");
}
//10
let Age = 32
if (Age >= 18) {
    console.log("Peut conduire");
} else {
    console.log("Ne peut pas conduire")
}
//11
let grade = "C"
switch (grade) {
    case "A":
        console.log("La lettre A")
        break;
    case "B":
        console.log("La lettre B")
        break;
    case "C":
        console.log("La lettre C")
        break;
}
//12
let num = 43
num >= 1 && num <= 100 ? console.log("Le nombre est entre 1 et 100") : console.log("Hors portée");
//13
let weather = "sunny"
if (weather == "rainy") {
    console.log("rainy");
} else if (weather == "sunny") {
    console.log("sunny");
} else {
    console.log("cloudy");
}
//14
let marks = 50
marks > 50 ? console.log("Réussi") : console.log("échoué")
    //15
let total = 123
let réduction
if (total > 100) {
    réduction = total * 0.1
    console.log(total + réduction);
} else {
    console.log("Pas de réduction");
}
//16
let role = "admin"
switch (role) {
    case "admin":
        console.log("La permission: admin")
        break;
    case "éditeur":
        console.log("La permission: éditeur")
        break;
    case "spectaeur":
        console.log("La permission: spectaeur")
        break;
}
//17
let score = 32
let bonus = true
score > 80 && bonus == true ? console.log("Score élevé") : console.log("Score bas");
//18
let hour = 22
hour > 6 && hour < 18 ? console.log("Jour") : console.log("Nuit")
    //19
let carTotal = 600
if (carTotal > 500) {
    console.log(carTotal + carTotal * 0.2)
} else console.log("Pas de réduction");
//20
let month = 33
if (month == 12 || month == 1 || month == 2) {
    console.log("Hiver");
} else if (month >= 3 && month <= 5) {
    console.log("Printemps");
} else if (month >= 6 && month <= 8) {
    console.log("Été");
} else if (month >= 9 && month <= 11) {
    console.log("Automne");
} else {
    console.log("Not a month");
}