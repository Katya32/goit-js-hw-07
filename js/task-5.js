const inputRef = document.querySelector("#name-input"); //ссылка на input
const nameRef = document.querySelector("#name-output"); //ссылка span с именем

const changeName = e => {
nameRef.textContent = e.currentTarget.value || 'незнакомец'; //заменяем текст в span текстом, введенным в инпуте
}

inputRef.addEventListener("input", changeName);