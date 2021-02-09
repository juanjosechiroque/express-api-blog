const express = require('express');
const router = express.Router();

const postRouter = require('../posts/routes');
const categoriesRouter = require('../categories/routes');

router.use('/posts', postRouter);
router.use('/categories', categoriesRouter);

module.exports = router;
