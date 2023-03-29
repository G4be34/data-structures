var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    storage[value] = storage[value] ;
  };

  someInstance.pop = function() {
    var array = Object.keys(storage);
    var result = array.pop();
    delete storage[result];

    return result;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
