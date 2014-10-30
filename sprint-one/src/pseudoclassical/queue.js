var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.counter = 0;
  this.lowest = 0;
  this.highest = 0;
  this.storage = {};
};

Queue.prototype.enqueue = function(value){
  this.storage[this.highest] = value;
  this.counter++;
  this.highest++;
};

Queue.prototype.dequeue = function(){
  if(this.counter > 0){
  var result = this.storage[this.lowest];
  delete this.storage[this.lowest];
  this.counter--;
  this.lowest++;
  return result;
  }
};

Queue.prototype.size = function(){
  return this.counter;
};


