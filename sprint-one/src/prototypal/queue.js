
 var Queue = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.storage = {};
  newQueue.keyNum = 0;
  return newQueue;
 };

 queueMethods = {};

queueMethods.enqueue = function (value) {
  this.keyNum++;
  this.storage[this.keyNum] = value;
}

queueMethods.dequeue = function () {
  if (this.keyNum > 0) {
    var result = this.storage[1];
    delete this.storage[1];
    for (var x in this.storage) {
      this.storage[x - 1] = this.storage[x];
    }
    this.keyNum--;
    return result;
  }
}

queueMethods.size = function () {
  return this.keyNum;
}

// //npm v16.19.0
// //NVM 0.39.1