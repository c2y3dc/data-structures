var makeStack = function(){
  var someInstance = {};
  var counter = 0;

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value){
    storage[counter] = value;
    counter++;
    console.log(storage);
  };

  someInstance.pop = function(){
    var test =  storage[counter-1];
    delete storage[counter-1];
    counter--;
    if(counter < 0){
      counter = 0;
    }
      return test;
  };

  someInstance.size = function(){
    return counter;
  };

  return someInstance;
};
