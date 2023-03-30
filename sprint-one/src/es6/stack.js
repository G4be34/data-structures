class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.keyNum = 0;
    this.storage = {};
  }

  pop() {
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

  push(value) {
    this.keyNum++;
    this.storage[this.keyNum] = value;
  }

  size() {
    return this.keyNum;
  }

}