var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var object = Object.create(queueMethods)
  object.storage = {};
  object.queueSize = 0;
  return object;
};
 var queueMethods = {};


queueMethods.enqueue = function(value) {
	this.storage[this.queueSize] = value;
	this.queueSize++;
}
queueMethods.dequeue = function() {
	if(this.queueSize > 0) {
		var dequeuedValue = this.storage[0];
		delete this.storage[0];
		for(var key in this.storage) {
			this.storage[key - 1] = this.storage[key];
		}
		this.queueSize--;
		delete this.storage[this.queueSize];
		return dequeuedValue
	}else{
		return false
	}
}
queueMethods.size = function() {
	return this.queueSize;
}
