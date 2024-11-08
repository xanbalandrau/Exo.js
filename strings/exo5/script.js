let limiteAge=18;
let limitePoids=120;
let limiteAgeEnfant=12;
let limitePoidsEnfant=50;


let ageDuClient =17;
let poidsDuClient =60;
if ( ageDuClient >= limiteAge && poidsDuClient < limitePoids ){
    console.log("Vous pouvez monter dans ce manège");
}else{
    console.log("Vous ne pouvez pas monter dans ce manège");
}

let ageDuClient1 =12;
let poidsDuClient1 =50;
if(poidsDuClient1<limitePoidsEnfant || ageDuClient1<=limiteAgeEnfant){
    console.log("Bienvenue dans ce nouveau manège pour les enfants");
}else{
    console.log("Désolé mais tu es trop grand pour monter dans ce manège.");
}

let ageDuClient2 = 15;
let poidsDuClient2 = 200;
if (ageDuClient2>=limiteAge && poidsDuClient2<limitePoids){
    console.log("Bienvenue dans le manège !");
}else if (ageDuClient2>=limiteAge && poidsDuClient2>=limitePoids){
    console.log("Vous ne pouvez pas monter : les sièges ne supporteraient pas votre poids.");
}else if(ageDuClient2<limiteAge && poidsDuClient2<limitePoids){
    console.log("Vous ne pouvez pas monter : ce manège est réservé aux adultes.");
}else{
    console.log("Vous devriez vite arrêter de manger des frites !");
}

let zero = 0; 
if (zero === 0) {
    console.log("La variable zero vaut bien zéro");
} else {
    console.log("Oops ! Il semble y avoir un bogue !");
}

let reponse = 42;
let condition = false;
if(condition){
    reponse = 1337;
    console.log("La réponse est " + reponse);
}else{
    console.log("La réponse est " + reponse);
}

let reponse1= (condition) ? 42 : 1337;
console.log("La réponse est toujours " + reponse1);

