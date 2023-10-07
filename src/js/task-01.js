const categoryList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryList.length}`);

categoryList.forEach(category => {
  const categoryTitle = category.querySelector('h2');
  const categoryItems = category.querySelectorAll('li');
  
  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
