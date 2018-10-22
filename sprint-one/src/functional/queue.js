var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      var dequeueValue = storage[0];
      delete storage[0];
      for(var key in storage){
        storage[key-1] = storage[key];
      }
      size--;
      delete storage[size];
      return dequeueValue;
    } else {
      return false;
    }

  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
