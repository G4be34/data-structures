var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keyNum = 0;
};

Queue.prototype.enqueue = function (value) {
  this.keyNum++;
  this.storage[this.keyNum] = value;
}

Queue.prototype.dequeue = function () {
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

Queue.prototype.size = function () {
  return this.keyNum;
}

var newQueue = new Queue();