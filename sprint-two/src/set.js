var makeSet = function(){
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  //if(typeof item === 'String'){
    this._storage.push(item);
    console.log(this._storage);
  //}
};

setPrototype.contains = function(item){
  for(var i = 0; i < this._storage.length; i++){

    if(this._storage[i] === item){
      //console.log(this._storage[i], item, i);
      return true;
    }else{
      return false;
    }
  }
};

setPrototype.remove = function(item){
  for(var i = 0; i < this._storage.length; i++){
    if(this._storage[i] === item){
      delete this._storage[i];
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
