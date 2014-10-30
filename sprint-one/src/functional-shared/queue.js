var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  newQueue.lowest = 0;
  newQueue.highest = 0;
  newQueue.counter = 0;
  newQueue.storage = {};

  extend(newQueue, queueMethods);

  return newQueue;
};

var extend = function(to, from){
  for (var key in from){
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.highest] = value;
  this.counter++;
  this.highest++;
};

queueMethods.dequeue = function(){
  if (this.counter > 0){

    this.counter--;

    var results = this.storage[this.lowest];
    delete this.storage[this.lowest];

    this.lowest++;
    console.log(results)
    return results;
  }
};

queueMethods.size = function(){
  return this.counter;
};
