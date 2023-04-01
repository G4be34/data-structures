

// Instantiate a new graph
var Graph = function() {
  this.allNodes = {}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.allNodes[node] = {
    value: node,
    connectedNodes: {}
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  var result = false;
  for (var i in this.allNodes) {
    if (this.allNodes[i].value === node) {
      result = true;
      break;
    }
  }
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  //if node is found inside of allNodes object
  if (this.allNodes[node]) {
    //delete node object from allNodes object
    delete this.allNodes[node];
    //search throughout all other nodes connectedNodes objects to find and delete node
  }
  for (var i in this.allNodes) {
    if (this.allNodes[i].connectedNodes[node]) {
      delete this.allNodes[i].connectedNodes[node];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  //create global boolean result
  var isFound = false;
  //find fromNode object inside of allNodes
  if (this.allNodes[fromNode].connectedNodes[toNode]) {
    isFound = true;
  }
  //return final result boolean value
  return isFound;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var from = this.allNodes[fromNode].connectedNodes;
  from[toNode] = 1;
  var to = this.allNodes[toNode].connectedNodes;
  to[fromNode] = 1;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  //find fromNode value inside of allNodes object
  delete this.allNodes[fromNode].connectedNodes[toNode];
  delete this.allNodes[toNode].connectedNodes[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  //use for...in loop or _.each to iterate through allNodes object and apply cb to each object
  _.each(this.allNodes, function(node) {
    node = cb(node.value);
    return node;
  })
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


