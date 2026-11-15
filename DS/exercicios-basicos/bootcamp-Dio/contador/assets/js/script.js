let count = 0; 

const currentNumber = document.getElementById('currentNumber');
const buttonAdd = document.getElementById('add');
const buttonMinus = document.getElementById('minus');

function increment() {
    count++;
    currentNumber.innerHTML = count;

    if (count >= 100 ) {
        buttonAdd.removeEventListener('click', increment)
    }
}

function decrement() {
    count--;
    currentNumber.innerHTML = count;

    if (count <= -100 ) {
        buttonMinus.removeEventListener('click', decrement)
    }
}

buttonAdd.addEventListener('click', increment);
buttonMinus.addEventListener('click', decrement);