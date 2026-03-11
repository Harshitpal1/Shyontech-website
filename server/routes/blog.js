const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { getAllPosts, getPostById } = require('../controllers/blogController');

const limiter = rateLimit({ windowMs: 60 * 1000, max: 100 });

router.get('/', limiter, getAllPosts);
router.get('/:id', limiter, getPostById);

module.exports = router;
