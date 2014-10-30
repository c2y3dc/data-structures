var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.counter = 0;
  newQueue.highest = 0;
  newQueue.lowest = 0;
  newQueue.storage = {};

  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.highest] = value;
  this.highest++;
  this.counter++;

};

queueMethods.dequeue = function(){
  if(this.counter > 0){
    this.counter--;
    var result = this.storage[this.lowest];
    delete this.storage[this.lowest];
    this.lowest++;
    return result;
  }
};

queueMethods.size = function(){
  return this.counter;
};

