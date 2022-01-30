const birds = require('../birds.json');

function getBirds() {
  console.log(birds);
  const result = birds;
  return result;
}

module.exports = { getBirds };
