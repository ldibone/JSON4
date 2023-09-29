//ex 1
const years = 5;
const months = 3;
const weeks = 4;
const days = 5;

let timeStatement = "Timp de finalizare";

if (years > 1) {
    timeStatement += `${years} years`;
}

if (months > 0) {
    if (years > 1) {
        timeStatement += ` and ${months} months`;
    } else if (years === 1) {
        timeStatement += `${months} months`;
    }
}

if (weeks > 1) {
    if (years > 0 || months > 0) {
        timeStatement += ` and ${weeks} weeks`;
    } else {
        timeStatement += `${weeks} weeks`;
    }
}

if (days > 0) {
    if (years > 0 || months > 0 || weeks > 0) {
        timeStatement += ` and ${days} days`;
    } else {
        timeStatement += `${days} days`;
    }
}

console.log(timeStatement);

//ex 2
const person1 = {
    name: "Ion",
    hobby: "Desen"
};

const person2 = {
    name: "Vasile",
    hobby: "Instrumente muzicale"
};

const person3 = {
    name: "Gheorghe",
    hobby: "Gatit"
};

const person4 = {
    name: "Bogdan",
    hobby: "Automobile"
};

const person5 = {
    name: "Andrei",
    hobby: "Motociclete"
};

console.log(`hobbyul lui ${person1.name} este ${person1.hobby}.`);
console.log(`hobbyul lui ${person2.name} este ${person2.hobby}.`);
console.log(`hobbyul lui ${person3.name} este ${person3.hobby}.`);
console.log(`hobbyul lui ${person4.name} este ${person4.hobby}.`);
console.log(`hobbyul lui ${person5.name} este ${person5.hobby}.`);



//ex 3
function seasonDescription(seasonName) {
    switch (seasonName.toLowerCase()) {
        case "toamna":
            return "toamna este un anotimp ploios";
        case "vara":
            return "vara este un anotimp plin de soare";
        case "pimavara":
            return "Primavara este un anotimp a reinoriii naturii ";
        case "iarna":
            return "iarna este un anotimp cu multa zapada";
        default:
            return "Nu este denumire de anotimp";
    }
}

console.log(seasonDescription("primavara"));
console.log(seasonDescription("vara"));
console.log(seasonDescription("toamna"));
console.log(seasonDescription("iarna"));


//ex 4

class Animale {
    constructor(picioare, are coada) {
        this.picioare = picoare;
        this.coada = are coada;
    }

class Pisica extends Animale 
    constructor(are coada) {
    super(4, are coada);
}


class Caini extends Animale 
    constructor(are coada); 
    super(4, are coada);
}


console.log (Pisica)
console.log (Caini)