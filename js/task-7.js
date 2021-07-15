const inputRef = document.querySelector("#font-size-control"); //ссылка на input
const textRef = document.querySelector("#text"); //ссылка на текст

const changeTextSize = e => {
  textRef.style.fontSize = inputRef.value +"px"; //размеру текста присваиваем значение ползунка
}

inputRef.addEventListener("input", changeTextSize)
