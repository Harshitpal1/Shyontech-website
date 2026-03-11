const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { getAllServices, getServiceById } = require('../controllers/servicesController');

const limiter = rateLimit({ windowMs: 60 * 1000, max: 100 });

router.get('/', limiter, getAllServices);
router.get('/:id', limiter, getServiceById);

module.exports = router;
