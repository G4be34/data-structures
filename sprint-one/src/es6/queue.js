class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.keyNum = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.keyNum++;
    this.storage[this.keyNum] = value;
  }

  dequeue() {
    if (this.keyNum > 0) {
      var result = this.storage[1];
      delete this.storage[1];
      for (var i in this.storage) {
        this.storage[i - 1] = this.storage[this.keyNum]
      }
      this.keyNum--;
      return result;
    }
  }

  size() {
    return this.keyNum;
  }

}
