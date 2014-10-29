var makeQueue = function(){
  var someInstance = {};
  var counter = 0;
  var lowest = 0;
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    counter++;
    storage[counter] = value;
  };

  someInstance.dequeue = function(){

    debugger;
    var output = storage[lowest];

    delete storage[lowest];

    lowest++;
    counter = counter - lowest;
    if(counter < 0){return counter = 0;}
    return output;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
