var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  var keyNum = 0;

  someInstance.enqueue = function(value) {
    keyNum++;
    storage[keyNum] = value;
  };

  someInstance.dequeue = function() {
    if (keyNum > 0) {
      var result = storage[1];
      delete storage[1];
      for (var i in storage) {
        storage[i - 1] = storage[i];
      }
      keyNum--;
      return result;
    }
  };

  someInstance.size = function() {
    return keyNum;
  };

  return someInstance;
};
