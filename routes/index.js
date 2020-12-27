const express = require('express');
const router = express.Router();

const postRouter = require('../posts/routes');

router.use('/posts', postRouter);

module.exports = router;
