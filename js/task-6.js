const inputRef = document.querySelector("#validation-input");

const inputTextLength = e => {
    const currentNumber = Number(e.currentTarget.value.length);
    const inputNumber = Number(inputRef.dataset.length)

    if(currentNumber===inputNumber) {
        inputRef.classList.remove("invalid") 
        inputRef.classList.add("valid") 
    } else {
        inputRef.classList.add("invalid"); 

    }
}
    
inputRef.addEventListener("input", inputTextLength);