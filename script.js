let numberToGuess = Math.round(Math.random() * 100);
let tries =0;
function guessTheNumber() {
    

    tries = tries + 1;
    displayTries.innerHTML = 'Versuche:' + tries;

    if(numberToGuess == myNumber.value) {
        headline.innerHTML='✓Du Hast Gewonne🥳🎉'
        console.log ("Start");
        setTimeout(() => {
            location.reload();
        }, 5000);
    
        
    }


    if(numberToGuess > myNumber.value) {
        headline.innerHTML= '✕Deine Zahl ist zu Klein'
    }


    if(numberToGuess < myNumber.value) {
        headline.innerHTML= '✕ Deine Zahl ist zu Groß '
    }

    myNumber.value = '';
}

let passwort = "Hilfe";
function passwortEingeben() {
    if(passwort == code.value) {
        alert(numberToGuess)
    }
}


function addToDo(){
    ToDolist.innerHTML += `
        <li>${ToDoField.value}</li>
    `;

    if(ToDoField.value == "Baum") {
        alert("Wer das liest ist doof")
    }

    ToDoField.value ='';
}