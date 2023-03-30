var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.storage = {};
  newStack.keyNum = 0;
  return newStack;
};

var stackMethods = {};

stackMethods.pop = function () {
  if (this.keyNum > 0) {
    var result = this.storage[this.keyNum];
    delete this.storage[this.keyNum];
    this.keyNum--;
    return result;
  }
}

stackMethods.push = function (value) {
  this.keyNum++;
  this.storage[this.keyNum] = value;
}

stackMethods.size = function () {
  return this.keyNum;
}
