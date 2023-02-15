let display = document.getElementById('display');

// calculator buttons
let deleteAll = document.getElementById('deleteAll');
let deleteOne = document.getElementById('deleteOne');
let inputValue = document.querySelectorAll('.input-value');
let evaluate = document.getElementById('evaluate');

// for click event
for (let i = 0; i < inputValue.length; i++) {
    inputValue[i].addEventListener("click", () => {
        display.value += inputValue[i].value;
        vibrateSound(200);
    })
}
// delete one value
deleteOne.addEventListener("click", () =>{
    display.value = display.value.toString().slice(0,-1);
    vibrateSound(200);
})
// delete all value
deleteAll.addEventListener("click", () =>{
    display.value = "";
    vibrateSound(200);
})
// get the result
evaluate.addEventListener("click", () =>{
    display.value = eval(display.value);
    vibrateSound(300);
})



// for keypress event
let  keypressInputValue = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "/", "-", "+", "."];

document.addEventListener("keypress", (e)=> {
    if (keypressInputValue.includes(e.key) === true) {
        display.value += e.key;
        vibrateSound(200);
    } else if (e.key === "=" || e.key === "Enter"){
        display.value = eval(display.value);
        vibrateSound(300);
    } else{
        // no code!
    }
});

// keypress delete
document.addEventListener("keydown", (e)=> {
    if (e.key === "Backspace" || e.key === "Delete") {
        display.value = display.value.toString().slice(0,-1);
        vibrateSound(200);
    }
});

function vibrateSound(pattern) {
    window.navigator.vibrate(pattern);
}

