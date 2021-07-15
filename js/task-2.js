const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const ingredientsRef = document.querySelector("#ingredients"); //получаем ссылку на id="gallery"

  const ingredientsList = ingredients => {
    return ingredients.map(item => { //перебираем масив ingredients
      const list = document.createElement("li"); //на каждой итерации создаем li
      list.textContent = item; //в li записываем текст
      return list;
    })
  }

  const ingredientsMarkup = ingredientsList(ingredients);
  ingredientsRef.append(...ingredientsMarkup); //вствляем все li в ul