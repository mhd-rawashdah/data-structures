var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods)
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  return someInstance;
};
var queueMethods = {};

queueMethods.enqueue = function(value){
	this.storage[this.end] = value;
	this.end++;
}

queueMethods.dequeue = function(){
	
	if (this.size()) {
      var dequeueValue = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return dequeueValue;
    }
    
}

queueMethods.size = function (){
	return this.end - this.start;
}
