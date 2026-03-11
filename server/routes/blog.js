const express = require('express');
const router = express.Router();
const { getAllPosts, getPostById } = require('../controllers/blogController');

router.get('/', getAllPosts);
router.get('/:id', getPostById);

module.exports = router;
