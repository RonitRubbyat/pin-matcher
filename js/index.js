// getting pin number
function getPin() {
    const pin = Math.round(Math.random() * 10000);
    // const pinString = pin + '';
    const pinString = String(pin);
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

document.getElementById('genarate-pin').addEventListener('click', function () {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
})

// calc pad
document.getElementById('numbers-key').addEventListener('click', function (event) {
    const keyNumber = event.target.innerText;

    const inputNumbers = document.getElementById('inputNumbers');
    
    if (isNaN(keyNumber)) {
        if(keyNumber == 'C'){
            inputNumbers.value = '';
        }
    }
    else {
        inputNumbers.value = inputNumbers.value + keyNumber;
    }
})

// submition matched
document.getElementById('submitBtn').addEventListener('click', function(){
    const pin = document.getElementById('display-pin').value;
    const inputNumber = document.getElementById('inputNumbers').value;

    if(pin == inputNumber){
        document.getElementById('matched').style.display = 'block';
        document.getElementById('notMatched').style.display = 'none';
    }
    else{
        document.getElementById('notMatched').style.display = 'block';
        document.getElementById('matched').style.display = 'none';
    }
})