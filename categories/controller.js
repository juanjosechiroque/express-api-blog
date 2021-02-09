const store = require('./store');

module.exports = {
  
  createCategory: function (req, res) {
    
    try {
      
      const category = store.add(req.body.title);      
      return res.status(201).json(category);      
      
    } catch (err) {
      console.log('[response error]', err.message);
      return res.setStatus(500);
    }
    
    
  },
  
  getCategories: async function (req, res) {
    
    try {
      
      const categories = await store.list();
      return res.json(categories);      
      
    } catch(err) {
      console.log('[response error]', err.message);      
      return res.sendStatus(500);      
    } 
    
    
  } 
  
}