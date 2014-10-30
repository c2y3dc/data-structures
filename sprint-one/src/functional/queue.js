var makeQueue = function(){
  var someInstance = {};
  var counter = 0;
  var lowest = 0;
  var highest = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[highest] = value;
    counter++;
    highest++;
  };

  someInstance.dequeue = function(){
    if(counter > 0){
      counter--;
      var output = storage[lowest];
      delete storage[lowest];
      lowest++;
      return output;
    }
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
