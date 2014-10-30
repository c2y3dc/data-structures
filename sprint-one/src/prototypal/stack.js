var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(stackMethods);
  newStack.counter = 0;
  newStack.storage = {};

  return newStack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.counter] = value;
  this.counter++;
};

stackMethods.pop = function(){
  var localStorage = this.storage[this.counter-1];
  delete this.storage[this.counter-1];
  if (this.counter > 0){this.counter--;};
  return localStorage;
};

stackMethods.size = function(){
  return this.counter;
};

