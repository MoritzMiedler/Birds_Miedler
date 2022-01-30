const asyncHandler = require('express-async-handler');
const birdsModel = require('../model/birds.js');

const getBirds = asyncHandler(async (req, res) => {
  const result = await birdsModel.getBirds();
  res.status(200).json(result);
});

const updateObserver = asyncHandler(async (req, res) => {
  const result = await birdsModel.updateObserver(req.params.id, req.body);
  res.status(200).json(result);
});

module.exports = {
  getBirds,
  updateObserver,
};
