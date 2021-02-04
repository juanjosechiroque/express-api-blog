const Post = require('./model');
const store = require('./store');

module.exports = {
  
  getPosts: async function (req, res) {
    
    try {      
      
      const query = {};

      if (req.query.published) query.published = req.query.published;
      if (req.query.title) query.title = { $regex: req.query.title };

      const posts = await store.list(query);
      res.json(posts);
      
    } catch(err) {
      console.log('[response error]', err.message);      
      return res.sendStatus(500);      
    }
    
  },
  
  createPost: function (req, res) {
    
    if (!req.body.title) return res.sendStatus(400);
    if (!req.body.content) return res.sendStatus(400);
    
    const post = new Post({
      title: req.body.title,
      content: req.body.content,
      published: req.body.published,
    });  
    
    post.save();
    res.status(201).json(post);
    
  },

  getPost: function (req, res, next) {
    
    Post.findById(req.params.postId, (err, post) => {      
      if (err) return res.send(err);      
      if (post) {
        req.post = post;
        return next();
      }
      return res.sendStatus(404);
    });
    
  },
    
  getById: function (req, res){
    return res.json(req.post);
  },
  
  put: function (req, res) {
    
    const { post } = req;
    
    post.title = req.body.title;    
    post.content = req.body.content;
    
    post.save((err) => {
      if (err) return res.send(err);
      return res.json(post);
    });
    
  },
  
  patch: function (req, res){
    
    const { post } = req;
    
    if (req.body._id) delete req.body._id;
    
    Object.entries(req.body).forEach(item => {
      const key = item[0];
      const value = item[1];
      post[key] = value;
    });    
    
    post.save((err) => {
      if (err) return res.send(err);
      return res.json(post);
    });
    
  },
  
  deletePost: function (req, res){
    req.post.remove((err) => {
      if (err) return res.send(err);
      return res.sendStatus(204);
    });
  },
  
}
