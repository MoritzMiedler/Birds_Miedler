const birds = require('../birds.json');

function getBirds() {
  console.log(birds);
  const result = birds;
  return result;
}

function updateObserver(id, newObserver) {
  birds.find((el) => el.id == id).observer.push(newObserver.newObserver);
  birds.find((el) => el.id == id).count += 1;
  console.log(`Observed by ${newObserver.newObserver}`);
  return birds;
}

module.exports = { getBirds, updateObserver };
