const express = require('express');
const { getBirds } = require('../controllers/birds');

const router = express.Router();

router.get('/birds', getBirds);

module.exports = router;
