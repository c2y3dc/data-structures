var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.counter = 0;
  newStack.storage = {};

  extend(newStack, stackMethods);
  return newStack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.pop = function(){
    var localStorage = this.storage;
    var test =  localStorage[this.counter-1];
    delete localStorage[this.counter-1];
    this.counter--;
    if(this.counter < 0){
      this.counter = 0;
    }
      return test;
};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.size = function(){
  return this.counter;
};


