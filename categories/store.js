const Category = require('./model.js');

function addCategory(title) {
  
  const category = new Category({
    title,
  });
  console.log(category);
  category.save();
  return category;
  
}

async function getCategories() {
  const categories = await Category.find();
  return categories;
}

module.exports = {
  add: addCategory,
  list: getCategories
}
