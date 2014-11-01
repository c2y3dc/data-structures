var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  if(this._storage.get(i) === undefined){
    this._storage.set(i,[[k,v]]);
  }else{
    this._storage.get(i).push([k,v]);
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var result;
   _.each(this._storage.get(i), function(value){
    if(value[0] === k){
      debugger;
      result = value[1];
    }
  });
  return result;
};

HashTable.prototype.remove = function(k){
  this.insert(k, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
