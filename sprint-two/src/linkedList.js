var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    if(list.head === null){
      var aNode = makeNode(value);
      list.head = aNode;
      list.tail = aNode;
    }else{
      list.tail.next = makeNode(value);
      list.tail = list.tail.next;
    }
  };

  list.removeHead = function(){

    var removedHead = list.head.value;
    delete list.head;
    list.head = list.tail;
    return removedHead;

  };

  list.contains = function(target){

    while(list.head){

      if(target === list.tail.value || target === list.head.value){
        return true;
      }
      return false;
    }
  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
