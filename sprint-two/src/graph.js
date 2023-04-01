

// Instantiate a new graph
var Graph = function() {
  this.allNodes = {1: {value: 1, connectedNodes: {2 : 1, 3 : 1,}}}
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
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// this.allNodes = {value: 1, connectedNodes: {2 : 1, 3 : 1}}

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var from = this.allNodes[fromNode].connectedNodes;
  from[toNode] = 1;
  var to = this.allNodes[toNode].connectedNodes;
  to[fromNode] = 1;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


