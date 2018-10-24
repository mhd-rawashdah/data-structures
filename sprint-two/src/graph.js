

// Instantiate a new graph
var Graph = function() {
	this.storage = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	
	this.storage.push({value:node,edges:[]});

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	//debugger;ß
	for(var i = 0; i< this.storage.length; i++) {
		if(this.storage[i].value === node) {
		  return true; 
	  }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	var removedNode = null;
	for(var i = 0; i< this.storage.length; i++) {
		if(this.storage[i].value === node) {
		    removedNode = this.storage[i];
		    this.storage.splice(i,1);
		    break;
	  }  
  }
  
   for(var j = 0; j< removedNode.edges.length; j++) {
		  this.removeEdge(removedNode.value,removedNode.edges[j]);
		}
		 return removedNode;

};

// Returns a boolean indicating whether two specified nodes are conßnected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var result = false;
	_.forEach(this.storage, function(element,i) {
		if(element.value === fromNode ){
			_.forEach(element.edges, function(elm) {				
				if(elm === toNode) {
					result = true;
					return result;
				}
			});
     if (result) {
     	return result;
     }
		} else {
			return false;
		} 
	});
	return result
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	_.forEach(this.storage, function(element) {
			if(element.value === fromNode) {
				element.edges.push(toNode);
			}
			if(element.value === toNode) {
				element.edges.push(fromNode);
			}
	})
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	var result;
	_.forEach(this.storage, function(element) {
		if(element.value === fromNode || element.value === toNode){
			_.forEach(element.edges, function(elm,index) {
				if(elm === toNode) {
					result = elm;
					element.edges.splice(index,1);
					return result;
				}
				if(elm === fromNode) {
					result = elm;
					element.edges.splice(index,1);
					return result;
				}

			});
		}
	});
	return result
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	for (var i = 0; i < this.storage.length; i++) {
		  cb(this.storage[i].value);
	}
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


