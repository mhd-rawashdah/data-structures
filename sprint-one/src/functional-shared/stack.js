var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};

  storage.stackSize = 0 ;
  _.extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

stackMethods.push = function(value) {
    this[this.stackSize] = value;
    this.stackSize++;
  };

  stackMethods.pop = function() {
    if (this.stackSize > 0) {
      this.stackSize--;
      var popValue = this[this.stackSize];
      delete this[this.stackSize];
      return popValue;
    } else {
      return false;
    }
  };

  stackMethods.size = function() {
    return this.stackSize;
  };
