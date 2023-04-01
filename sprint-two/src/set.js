var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  // if this._storage.item doesn't exist,
  if (!this._storage[item]) {
    this._storage[item] = 0;
  }
  this._storage[item]++;
};

setPrototype.contains = function(item) {
  var result = false;
  if (this._storage[item]) {
    result = true;
  }
  return result;
};

setPrototype.remove = function(item) {
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
