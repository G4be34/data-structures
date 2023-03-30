var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.keyNum = 0;
  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};


stackMethods.push = function(value) {
  this.keyNum++;
  this.storage[this.keyNum] = value;
};

stackMethods.pop = function() {
  if (this.keyNum > 0) {
    var result = this.storage[this.keyNum];
    delete this.storage[this.keyNum];
    for (var i in this.storage) {
      this.storage[i - 1] = this.storage[i];
    }
    this.keyNum--;
    return result;
    }
};

stackMethods.size = function() {
  return this.keyNum;
};