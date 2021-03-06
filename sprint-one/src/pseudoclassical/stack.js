var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.stackSize = 0;
};

Stack.prototype.push = function(value) {
	this.storage[this.stackSize] = value;
	this.stackSize++;
}
Stack.prototype.pop = function() {
	if(this.stackSize > 0) {
		this.stackSize--;
		var popedValue = this.storage[this.stackSize];
		delete this.storage[this.stackSize];
		return popedValue;
	}else{
		return false;
	}
}
Stack.prototype.size = function() {
	return this.stackSize;
}