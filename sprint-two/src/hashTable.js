

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // Get the index, if that index has no bucket, create a bucket
  var bucket = this._storage.get(index);
  if (!bucket) {
    bucket = [];
    this._storage.set(index, bucket);
  }

  var result = false;

  for (var i = 0; i < bucket.length; i++) {
    var touple = bucket[i];
    if (touple[0] === k) {
      touple[1] = v;
      result = true;
      break;
    }
  }

  if (!result) {
    bucket.push([k, v])
  }

  // If index has bucket
    // Iterate over bucket to check if key already exists
    // If not, create new touple
    // If yes, just overwrite
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  //iterate through each bucket in storage array
  for (var i = 0; i < bucket.length; i++) {
    var touple = bucket[i];
    if (touple[0] === k) {
      return touple[1];
    }
  }
    //if the value of the touple at 0 index matches k
      //return index 1

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //find the bucket at the given index
  var bucket = this._storage.get(index)
    //find the touple that matches k
    for (var i = 0; i < bucket.length; i++) {
      var touple = bucket[i];
      if (touple[0] === k) {
        touple[i] = undefined;
      }
    }
    //delete matching touple
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


