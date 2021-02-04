const Post = require('./model');

async function getPosts(query) {  
  const posts = await Post.find(query);     
  return posts;  
}

async function getPost(id) {  
  const post = await Post.findById(id);
  return post; 
}

function addPost(title,content,published) {    
 
  const post = new Post({
    title,
    content,
    published,
  });    
  
  post.save();    
  return post;
}

async function updatPost(id, post) {
  
  const result = await Post.update( { _id: id } , post );
  return result;
  
}

async function removePost(id) {
  
  const response = await Post.findByIdAndDelete(id);            
  return response;
}

module.exports = {  
  list: getPosts,
  get: getPost,
  add: addPost,
  update: updatPost,
  remove: removePost,
}
