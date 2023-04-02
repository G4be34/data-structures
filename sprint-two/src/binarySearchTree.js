var BinarySearchTree = function(value) {
  var newTree = Object.create(treeMethods);
  newTree.value =value;
  newTree.left = {};
  newTree.right = {};

  return newTree
};

var treeMethods = {};

treeMethods.insert = function (value) {
  //if value > this.value
  if (value > this.value) {
     //read the this.right
     if (Object.keys(this.right).length === 0) {
      this.right = new BinarySearchTree(value);
     } else {
      this.right.insert(value)
     }
  }
  if (value < this.value) {
    if (Object.keys(this.left).length === 0) {
      this.left = new BinarySearchTree(value);
    } else {
      this.left.insert(value);
    }
  }
}


// this.left = {value: x, this.left: {}, this.right: {}};

treeMethods.contains = function (value) {
  var result = false;
  if (this.value === value) {
    result = true;
    return result;
  }
  if (value > this.value) {
    if (Object.keys(this.right).length === 0) {
      return result;
    } else {
      result = this.right.contains(value);
    }
  }
  if (value < this.value) {
    if (Object.keys(this.left).length === 0) {
      return result;
    } else {
      result = this.left.contains(value);
    }
  }
  return result;
}

treeMethods.depthFirstLog = function (callback) {
  // Grab value and callback(this.value);
  this.value = callback(this.value);

  if (Object.keys(this.left).length > 0) {
    this.left.depthFirstLog(callback)
  }
  if (Object.keys(this.right).length > 0) {
    this.right.depthFirstLog(callback)
    }
}

/*
 * Complexity: What is the time complexity of the above functions?
 */
