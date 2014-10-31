var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(list.head = null){
      list.head = newNode;
    }else{
      list.tail.next = newNode;
    }
    list.tail = newNode;


    /*
    var aNode = makeNode(value);
    if(list.head === null){
    list.head = aNode;
    }else{
      aNode.next = aNode;
      console.log("!",aNode);
    }
    list.tail = aNode;
    */
  };

  list.removeHead = function(){
    /*
    var removedHead = list.head.value;
    delete list.head;
    list.head =  list.tail;
    return removedHead;
    */
  };

  list.contains = function(target){
    /*
    //while .next !null
    for(var node in list){
      if(list[node].value === target){
        //console.log(list[node].value);
        return true;
      }else{
        //console.log(list[node].value);
        return false;
      }
    }
    */
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
