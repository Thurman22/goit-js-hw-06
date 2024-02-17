// Counting the number of categories
const categories = document.querySelectorAll('#categories .item');
const numCategories = categories.length;
console.log(`Number of categories: ${numCategories}`);

// Iterating over each category
categories.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const elements = category.querySelectorAll('li');
  const numElements = elements.length;
  console.log(`\nCategory: ${categoryName}`);
  console.log(`Elements: ${numElements}`);
});
