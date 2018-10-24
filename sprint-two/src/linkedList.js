var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    if (this.head === null) {
      this.head = node ;
      this.tail = node ;
       
    } else {
      this.tail.next = node ;
      this.tail = this.tail.next;
    }

  };

  list.removeHead = function() {
    if (this.head !== null) {
      var removedHead = this.head;
      this.head = removedHead.next;
      return removedHead.value;
    }
  };

  // TO DO:
  list.contains = function(target) {
    var head = this.head
    while(head){
      if (head.value === target) {
        return true;
      }
      head= head.next;
    }
    return false;

  }
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
