var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.keyNum = 0;
};

Stack.prototype.push = function (value) {
  this.keyNum++;
  this.storage[this.keyNum] = value;
}

Stack.prototype.pop = function () {
  if (this.keyNum > 0) {
    var result = this.storage[this.keyNum];
    delete this.storage[this.keyNum];
    for (var i in this.storage) {
      this.storage[i - 1] = this.storage[i];
    }
    this.keyNum--;
    return result;
  }
}

Stack.prototype.size = function () {
  return this.keyNum;
}

var newStack = new Stack();
