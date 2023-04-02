var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  _.extend(newTree, treeMethods);

  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var isFound = false;

  if (this.value === target) {
    isFound = true;
    return isFound;
  }
  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (isFound === true) {
        break;
      }
      isFound = this.children[i].contains(target);
    }
  }

  return isFound;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */