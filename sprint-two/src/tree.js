var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = []; 
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var node = Tree(value);
	this.children.push(node);
};

treeMethods.contains = function(target) {
	if (this.value === target) {
		return true;
	} else {
		var arr = this.children;
		
			for (var i = 0; i < arr.length; i++) {
				if (arr.length === 0) {
					return false;
				}
				if (arr[i].contains(target)) {
					return true;
				}
				else{
					return false;
				} 	
			}
	}
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
