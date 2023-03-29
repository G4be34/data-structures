var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[value] = value;
  };

  someInstance.dequeue = function() {
    var array = Object.keys(storage);
    var result = array.shift();
    delete storage[result];
    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
