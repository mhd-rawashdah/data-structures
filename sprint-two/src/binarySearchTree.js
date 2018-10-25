var BinarySearchTree = function(value) {
	var tree = Object.create(binaryMethods);
	tree.value = value;
	tree.left = null;
	tree.right = null;

	return tree;
};

var binaryMethods = {};
binaryMethods.insert = function(value) {

	function search(node) {
		if (value >= node.value ) {
			if (node.right === null) {
				node.right = BinarySearchTree(value);
				return
			} else {
				return search(node.right);
			}
		
		} else if (value < node.value ) {
			if(node.left === null){
				node.left = BinarySearchTree(value);
				return;
			} else {
				return search(node.left);
			}
		}	
	}
	return search(this);
};
binaryMethods.contains = function(value) {
  debugger
	function search(node) {
		if (node === null) {
			return false
		}
		if (node.value === value) {
			return true;
		}
		if (value > node.value) {
			return search(node.right);
		} else {
			return search(node.left);
		}
		// return false;

	}

		return search(this);

}

binaryMethods.depthFirstLog = function() {
	

}



/*
 * Complexity: What is the time complexity of the above functions?
 */
