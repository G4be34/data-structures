var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;


  list.addToTail = function(value) {
    if (!this.head) {
      this.head = Node(value);
      this.tail = this.head;
    } else {
      this.tail.next = Node(value);
      this.tail = this.tail.next;
    }
  };

  list.removeHead = function() {
    var currentValue = this.head.value;
    this.head = this.head.next;
    return currentValue;
  };

  list.contains = function(target) {
    var foundTarget = false;
    var head = this.head;

    while (head) {
      if (head.value === target) {
        foundTarget = true
        break;
      }
      head = head.next;
    }
    return foundTarget;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
