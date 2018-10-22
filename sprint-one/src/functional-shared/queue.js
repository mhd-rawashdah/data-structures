var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storege = {};
  storege.queuesSize = 0;
  _.extend(storege, queueMethods);

  return storege;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
	this[this.queuesSize] = value;
	this.queuesSize++;
}

queueMethods.dequeue = function(){
	if (this.queuesSize > 0) {
		var dequeuedValue = this[0];
		delete this[0];
		for(var key in this){
			this[key - 1] = this[key];
		}
		this.queuesSize--;
		delete this[this.queuesSize];
		return dequeuedValue;
	}
}

queueMethods.size = function (){
	return this.queuesSize;
}


