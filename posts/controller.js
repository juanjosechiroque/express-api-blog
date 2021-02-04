const store = require('./store');

module.exports = {
  
  getPosts: async function (req, res) {
    
    const query = {};
    
    if (req.query.published) query.published = req.query.published;
    if (req.query.title) query.title = { $regex: req.query.title };
    
    try {
      const posts = await store.list(query);
      return res.json(posts);      
    } catch(err) {
      console.log('[response error]', err.message);      
      return res.sendStatus(500);      
    } 
    
  },
  
  createPost: function (req, res) {
    
    if (!req.body.title) return res.sendStatus(400);
    if (!req.body.content) return res.sendStatus(400);
    
    try {
      const post = store.add(req.body.title,req.body.content,req.body.published);    
      return res.status(201).json(post);      
    } catch (err) {
      console.log('[response error]', err.message);      
      return res.sendStatus(500);    
    }
    
  },

  getPost: async function (req, res, next) {
    
    try {            
      
      const post = await store.get(req.params.postId);          
      
      if (!post){
        return res.sendStatus(404);    
      }
      
      req.post = post;      
      return next();  
      
    } catch (err) {
      console.log('[response error]', err.message);      
      return res.sendStatus(500);    
    }
    
  },
    
  getById: function (req, res){
    return res.json(req.post);
  },
  
  put: async function (req, res) {
    
    let { post } = req;
    
    if (req.body.title) post.title = req.body.title;
    if (req.body.content) post.content = req.body.content;
    if (req.body.published) post.published = req.body.published;
    
    try {
      
      const { title, content, published } = post;     
      
      const result = await store.update(post._id, { 
        title, 
        content, 
        published,
      });  
      
      return res.json(post); 
      
    } catch (err) {
      console.log('[response error]', err.message);      
      return res.sendStatus(500);    
    }
    
  },
  
  deletePost: async function (req, res){
    
    try {
      
      await store.remove(req.post._id);         
      return res.sendStatus(204);      
      
    } catch(err) {
      console.log('[response error]', err.message);      
      return res.sendStatus(500);
    }
    
  },
  
}
