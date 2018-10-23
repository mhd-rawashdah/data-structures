var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	var node = Tree(value);

	this.children.push(node);
};

treeMethods.contains = function(target) {
	
	
		if (this.children  === null) {
		  return false
	    }

	for(var i = 0 ; i < this.children.length; i++){
		
		if (this.children[i].value === target) {
			return true;
		}
		this.contains(target);
	}

	return false;


};



/*
 * Complexity: What is the time complexity of the above functions?
 */
var tree = Tree(5);
tree.addChild(3)
tree.contains(3);
//console.log(tree)