const birds = require('../birds.json');

function getBirds() {
  console.log(birds);
  const result = birds;
  return result;
}

function updateObserver(id, observername) {
  birds.find((el) => el.id === id).observer.push(observername);
  birds.find((el) => el.id === id).count += 1;
}

module.exports = { getBirds, updateObserver };
