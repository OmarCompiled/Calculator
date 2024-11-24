function appendToDisplay(character){
    document.getElementById("display").value += character;
}

function clearDisplay(){
    document.getElementById("display").value = null;
}

function calculate(){
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
        } catch(err) {
            document.getElementById("display").value = err.name;
            }
}

