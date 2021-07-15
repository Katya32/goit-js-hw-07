const refs = {
createButtonRef : document.querySelector('button[data-action="render"]'),
destroyButtonRef : document.querySelector('button[data-action="destroy"]'),
inputRef : document.querySelector('input'),
boxesRef: document.querySelector('#boxes'),
}

const {createButtonRef, destroyButtonRef, inputRef, boxesRef} = refs;

const createBoxes = amount => {
    const basicValue = 30;  //начальное значение квадрата
    amount = Number(inputRef.value) //получаем введенное количество квадратов
     
    for (let i = 0; i < amount; i += 1) {
        const divRef = document.createElement('div'); //создаем квадрат
        divRef.style.width = basicValue + i * 10 + 'px'; //на каждой итерации высота и ширина квадрата больше на 10px
        divRef.style.height = basicValue + i * 10 + 'px';
        divRef.style.backgroundColor = `rgb(${randomColor()},${randomColor()},${randomColor()})`;//добавляем рандомный цвет
        boxesRef.append(divRef)
    };
};

const randomColor = () => {
    return Math.floor(Math.random() * 255);
  };

const destroyBoxes = () => {
    boxesRef.innerHTML = ''; //перезаписываем все значения на пустую строку
    inputRef.value = '';
  };


createButtonRef.addEventListener("click", createBoxes);
destroyButtonRef.addEventListener("click", destroyBoxes);