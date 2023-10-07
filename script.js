const categoriesList = document.querySelectorAll('.item');

console.log(`Всього категорій: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('js-li-title');
  const categoryItems = category.querySelectorAll('js-li');
  
  console.log(`Категорія: ${categoryTitle.textContent}`);
  console.log(`Кількість елементів: ${categoryItems.length}`);
});
