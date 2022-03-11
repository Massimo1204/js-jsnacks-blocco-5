/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */

const strings = ['cicciobello' , 'PAPERososo','micioBELLO','BAUBAUFUFFI','chipCHoPchip'];

const newStrings = strings.map((element) => {
    return element.toLowerCase()+
    element.charAt(0).toLocaleUpperCase();
});

console.log(newStrings);