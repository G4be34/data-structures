var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.keyNum = 0;
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};


  queueMethods.dequeue = function () {
    if (this.keyNum > 0) {
      var result = this.storage[1];
      delete this.storage[1];
      for (var i in this.storage) {
        this.storage[i - 1] = this.storage[i];
      }
      this.keyNum--;
      return result;
    }
  }

  queueMethods.enqueue = function(value) {
    this.keyNum++;
    this.storage[this.keyNum] = value;
  }

  queueMethods.size = function() {
    return this.keyNum;
  }