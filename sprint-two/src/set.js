var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
	debugger
	if (!this._storage.hasOwnProperty(item)) {
		this._storage[item] = true;
	}
};

setPrototype.contains = function(item) {
	if (this._storage.hasOwnProperty(item)) {
		return true
	}
	return false;
};

setPrototype.remove = function(item) {
	delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
