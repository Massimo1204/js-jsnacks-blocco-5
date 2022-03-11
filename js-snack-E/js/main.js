/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const person = [
    {
        nome : 'Gandalf',
        cognome : 'il Grigio',
        età : 9000,
    },
    {
        nome : 'Harry',
        cognome : 'Potter',
        età : 8,
    },
    {
        nome : 'Leonardo',
        cognome : 'DiCaprio',
        età : 48,
    },
    {
        nome : 'Emma',
        cognome : 'Watson',
        età : 8,
    },
    {
        nome : 'Gesù',
        cognome : 'Cristo',
        età : 33,
    },
    {
        nome : 'Steve',
        cognome : 'Griffin',
        età : 3,
    },
    {
        nome : 'Mucca',
        cognome : 'Mumu',
        età : 18,
    },
];

const newArray = [];

person.forEach(element => {
    let canDrive;
    if(element.età<18){
        canDrive = 'NON può';
    }else{
        canDrive = 'Può';
    }
    const newPhrase = 'la persona è '+element.nome+' '+element.cognome+' e '+canDrive+' guidare';
    newArray.push({phrase : newPhrase});
});

console.table(newArray);