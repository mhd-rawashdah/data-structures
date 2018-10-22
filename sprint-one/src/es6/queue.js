class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.queueSize = 0;
  }

  enqueue(value){
  	this.storage[this.queueSize] = value;
  	this.queueSize++;
  }

  dequeue(){
  	if (this.queueSize > 0) {
  	  var dequeuedValue = this.storage[0];
  	  delete this.storage[0];
  	  for(var key in this.storage){
  	  	this.storage[key - 1] = this.storage[key];
  	  }
  	  this.queueSize--;
  	  delete this.storage[this.queueSize];
  	  return dequeuedValue;
  	} else {
  		return false;
  	}
  }

  size(){
  	return this.queueSize;
  }

}
