const liRef = document.querySelectorAll(".item") //Получает ссылку на все <li class="item">

console.log(`В списке ${liRef.length} категории.`); //Выводит текст 'В списке 3 категории.'

const categoryList = liRef.forEach((item) =>  {
    console.log(`Категория: ${item.firstElementChild.textContent}`);//выведет в консоль текст заголовка элемента (тега h2)
    console.log(`Количество элементов: ${item.lastElementChild.children.length}`); //и количество элементов в категории
   }
)



