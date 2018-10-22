var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.queueSize = 0;
};


Queue.prototype.enqueue = function(value) {
	this.storage[this.queueSize] = value;
	this.queueSize++;
}
Queue.prototype.dequeue = function() {
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
Queue.prototype.size = function() {
	return this.queueSize;
}
