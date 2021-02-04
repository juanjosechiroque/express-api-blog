const express = require('express');
const router = express.Router();

const postController = require('./controller');

router.get('/', postController.getPosts);
router.post('/', postController.createPost);

router.use('/:postId', postController.getPost);
router.get('/:postId', postController.getById);
router.put('/:postId', postController.put);
router.delete('/:postId', postController.deletePost);

module.exports = router;
