var makeTree = function(value){
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  if(this.children.length === 0){
    this.children.push(makeTree(value));
  }
};

treeMethods.contains = function(target){
  var result = false;
  for(var i =0; i < this.children.length; i++){
    if(this.children[i].value === target){
      result = true;
    }
  }
  return result;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
