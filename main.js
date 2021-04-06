let jmena = [
    "Markéta",
    "Kateřina",
    "Júlia",
    "Lucie",
    "Aneta",
    "Veronika",
    "Petra",
    "Olga",
    "Naďa",
    "Nikola",
    "Eva",
    "Anísa",
    "Terezia",
    "Diana",
    "Anna",
    "Iva",
    "Denisa",
    "Zuzana",
    "Jana",
    "Martina",
    "Lenka",
    "Iveta",
    "Pavla",
    "Lucie",
    "Kamila",
    "Soňa"
];

let tazenaJmena = [];

function tahnoutJmeno() {
    if (jmena.length === 0) {
        return;
    }

    // Generujeme náhodný index
    let vyherniIndex = Math.floor(Math.random()* jmena.length);
    
    // Získáme výherní jméno na patřičném indexu
    let vyherniJmeno = jmena[vyherniIndex];
    
    // Vyřadíme vylosované jméno z osudí
    jmena.splice(vyherniIndex, 1);
    
    // Výherní jméno si uložíme do pole k ostatním výherním
    //tazenaJmena.push(vyherniJmeno);

    //přidej vyvolané jméno na začátek
    tazenaJmena.unshift(vyherniJmeno);

    //přidej počítadlo, kolik se vybralo holek
    let vyvolanoBylo = tazenaJmena.length
    let oznaceni;
    
    if(vyvolanoBylo == 1) {
        oznaceni = " holka"
    } else if(vyvolanoBylo < 5) {
        oznaceni = " holky"
    } else {
        oznaceni = " holek"
    }
       

    let vyherce = document.querySelector('#vyherka');
    vyherce.innerHTML = vyherniJmeno;

    let seznamJmen = document.querySelector('#seznam');
    seznamJmen.innerHTML = tazenaJmena + ", "

    let pocetVybranych = document.querySelector('#pocet');
    pocetVybranych.innerHTML = vyvolanoBylo + oznaceni
}

function restart() {
    window.location.reload(); 
}