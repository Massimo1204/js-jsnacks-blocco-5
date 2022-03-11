/**
    Creare un oggetto che rappresenti un giocatore di basket, con le seguenti proprietà:
    Codice giocatore, Nome, Cognome, Età,  Media punti fatti per partita, Percentuale di successo per tiri da 3 punti

    Generare casualmente le statistiche di gioco, secondo queste regole:

    A - il codice giocatore deve essere formato da 3 lettere maiuscole casuali e 3 cifre casuali

    B - la media punti fatti per partita deve essere compresa tra 0 e 50
    
    C - la percentuale di successo per da 3 punti deve essere compresa tra 0 e 100
 */

const player = {
    id : generatePlayerId(),
    nome : 'Stephen',
    cognome : 'Curry',
    Età : 30,
    mediaPunti : generaMedia(),
    trePunti :generaTrePunti(),
};

function generatePlayerId(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const numbers ='0123456789';
    let randomId = '';
    for(let i=0;i<3;i++){
        const randomCharacter = alphabet[Math.floor(Math.random() * alphabet.length)];
        randomId += randomCharacter.toLocaleUpperCase();
    }
    for(let i=0;i<3;i++){
        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        randomId += randomNumber;
    }
    return randomId;
}

function randomNumber(spectrum,start){
    return [Math.floor(Math.random() * spectrum)+start];
}


console.log(player);