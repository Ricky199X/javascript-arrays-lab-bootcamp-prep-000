var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name) {
  var newKitten = kittens.push(name);
  return newKitten;
}

function destructivelyPrependKitten(name) {
  var frontKitten = kittens.unshift(name);
  return frontKitten;
}