class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
  	this.storage = {};
  	this.start = 0;
    this.end = 0;
  }

  enqueue(value){
  	this.storage[this.end] = value;
    this.end++;
  }

  dequeue(){
  	if (this.size()) {
      var dequeueValue = this.storage[this.start];
      delete this.storage[this.start];
      this.start++;
      return dequeueValue;
    }
  }

  size(){
  	return this.end - this.start;
  }

}
