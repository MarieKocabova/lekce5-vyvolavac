// Pro výpis do stránky můžeš použít funkci vypisText('text');
// Její kód je přiložen na konci tohoto souboru.
// Nebo můžeš pomocí console.log('text'); vypisovat do konzole prohlížeče.


// Úkol 1 - Založ nové pole se seznamem jmen (alespoň 5)
// Vypiš jeho obsah do stránky - JavaScript spojí pole automaticky do řetězce

let jmena = ['Martina', 'Dana', 'Jarmila', 'Eva', 'Kristýna', 'Pavlína'];

console.log(jmena);


// Úkol 2 - Vypiš třetí jméno v pořadí
// Nezapomeň, že pole se čísluje od 0

console.log(jmena[2]);


// Úkol 3 - Kolik jmen je v poli?
// Pole má vlastnost pole.length

console.log(jmena.length);

// Úkol 4 - Vypiš znovu seznam jmen, ALE...
// Tentokrát použij cyklus .forEach() a před každé jméno přidej
// číslo indexu, na kterém se jméno nachází
// 0. Alena
// 1. Jana
// 2. Marie
// atd.

// PRESKAKUJEME


// Úkol 5 - přidej na konec pole další jméno
// pole.push() = přidá nakonec pole 
// pole.unshift() = přidá nazačátek pole 
// Doplněný seznam jmen vypiš (jednoduše jako v příkladu 1)

jmena.push("Dominika");
jmena.unshift("Monika");


// Úkol 6 - odeber z pole první a poslední jméno a vypiš
// obě jména a pak i výsledné pole
// pole.shift() - Odstraní první
// pole.pop() - Odstraní poslední

console.log(jmena);

let prvni = jmena.shift();
let druha = jmena.pop();

console.log(prvni);
console.log(druha);
console.log(jmena);





// *********************************************
function vypisText(txt) {
    document.querySelector('#vystup').innerText += txt + '\n';
}