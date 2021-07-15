const refs = { 
decrementRef : document.querySelector('button[data-action="decrement"]'),
incrementRef : document.querySelector('button[data-action="increment"]'),
valueRef : document.querySelector("#value"),
}

const{decrementRef, incrementRef, valueRef} = refs;

const handleButtonClickDecrement = event => {
    valueRef.textContent = Number(valueRef.textContent) - 1;
}

const handleButtonClickIncrement = event => {
    valueRef.textContent = Number(valueRef.textContent) + 1;
}
    
decrementRef.addEventListener('click', handleButtonClickDecrement);
incrementRef.addEventListener('click', handleButtonClickIncrement); 