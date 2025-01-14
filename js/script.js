// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.





// crea un array per i 5 numeri casuali
let randomNumbers = [];
// genera 5 numeri casuali e li inserisce nell'array
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 50) + 1);
}

// stampa i 5 numeri casuali in pagina popolando la ul
const ul = document.getElementById('numbers-list');
randomNumbers.forEach((number) => {
    ul.innerHTML += `<li>${number}</li>`;
});




// dichiara una variabile per il counter e inizializza a 30 secondi
let counter = 2;

//seleziona l'elemento in cui inserire il counter
const countdown = document.getElementById('countdown');

//avvia il counter con setInterval con un valore di decremento di 1000 millisecondi
const timer = setInterval(() => {
    //stampa il valore del contatore in pagina
    countdown.innerHTML = counter;
    //decrementa il contatore del counter
    counter--;

    //quando il counter arriva a 0 ferma con clearInterval
    if (counter < 0) {
        clearInterval(timer);

        //rimuovi contenuto ul impostandolo a stringa vuota
        ul.innerHTML = '';

        //fai apparire il form rimuovendo la classe d-none di bootstrap
        document.getElementById('answers-form').classList.remove('d-none');
    }
}, 1000);



//l'utente scrive all'interno degli input i 5 numeri


//crea un array vuoto per i numeri inseriti dall'utente
const userNumbers = [];

//seleziona l'elemento form e ascolta l'evento submit
document.getElementById('answers-form').addEventListener('submit', (event) => {
    event.preventDefault();

    //seleziona tutti gli input del form
    const inputs = document.querySelectorAll('#answers-form input');

    //popola l'array con i valori degli input convertiti in numeri interi
    inputs.forEach(input => {
        userNumbers.push(parseInt(input.value));
    });

    //verifica quanti numeri sono presenti in entrambi gli array e quindi combaciano
    const correctNumbers = randomNumbers.filter((number) => userNumbers.includes(number));

    //stampa in pagina il messaggio con il risultato
    document.getElementById('message').innerHTML = `Hai indovinato ${correctNumbers.length} numeri: ${correctNumbers.join(', ')}`;
});


