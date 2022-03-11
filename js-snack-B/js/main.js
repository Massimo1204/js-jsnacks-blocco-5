
/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */

const cars = [
    {
        marca : 'Tesla',
        modello : 'model S',
        alimentazione : 'elettrico',
    },
    {
        marca : 'Ferrari',
        modello : 'LaFerrari',
        alimentazione : 'benzina',
    },
    {
        marca : 'BMW',
        modello : 'i8',
        alimentazione : 'elettrico',
    },
    {
        marca : 'Maserati',
        modello : 'bello',
        alimentazione : 'diesel',
    },
    {
        marca : 'Renault',
        modello : 'Clio',
        alimentazione : 'gpl',
    },
    {
        marca : 'Toyota',
        modello : 'Yaris',
        alimentazione : 'metano',
    },
    {
        marca : 'Renault',
        modello : 'Zoe',
        alimentazione : 'elettrico',
    },
    {
        marca : 'Bugatti',
        modello : 'Chiron',
        alimentazione : 'benzina',
    },
    {
        marca : 'Audi',
        modello : 'R8',
        alimentazione : 'benzina',
    },
    {
        marca : 'Aston Martin',
        modello : 'levigada',
        alimentazione : 'diesel',
    },
    {
        marca : 'Mclaren',
        modello : '1080p',
        alimentazione : 'diesel',
    },
    {
        marca : 'Lamborghini',
        modello : 'Murcielago',
        alimentazione : 'benzina',
    },
];

const benzinaCars = cars.filter((element) =>{
    if(element.alimentazione == 'benzina'){
        return true;
    }else{
        return false;
    }
});

const dieselCars = cars.filter((element) =>{
    if(element.alimentazione == 'diesel'){
        return true;
    }else{
        return false;
    }
});

const otherCars = cars.filter((element) =>{
    if(element.alimentazione != 'benzina' && element.alimentazione != 'diesel'){
        return true;
    }else{
        return false;
    }
});

console.table(benzinaCars);
console.table(dieselCars);
console.table(otherCars);
