const express = require('express');
const { getBirds, updateObserver } = require('../controllers/birds');

const router = express.Router();

router.get('/birds', getBirds);
router.patch('/birds/:id', updateObserver);

module.exports = router;
