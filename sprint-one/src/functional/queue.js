var Queue = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  //var size = 0;
  var start = 0;
  var end = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[end] = value;
    end++;
  };

  someInstance.dequeue = function() {
    // if (size > 0) {
    //   var dequeueValue = storage[0];
    //   delete storage[0];
    //   for(var key in storage){
    //     storage[key-1] = storage[key];
    //   }
    //   size--;
    //   delete storage[size];
    //   return dequeueValue;
    // } else {
    //   return false;
    // }
    if (someInstance.size()) {
      var dequeueValue = storage[start];
      delete storage[start];
      start++;
      return dequeueValue;
    }

  };

  someInstance.size = function() {
    return end - start;
  };

  return someInstance;
};
