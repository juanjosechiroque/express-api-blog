const Post = require('./model');

async function getPosts(query) {  
  const posts = await Post.find(query);     
  return posts;  
}

module.exports = {  
  list: getPosts,
}
