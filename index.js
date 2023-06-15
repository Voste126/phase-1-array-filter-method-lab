// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
//findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. 
//The function should be case insensitive.
function findMatching(drivers, name) {
    //This line creates a new variable lowercaseName and assigns it the lowercase version of the name parameter using the toLowerCase() method. 
    //This ensures that the search is case-insensitive.
    const lowercaseName = name.toLowerCase();
    return drivers.filter(driver =>
        //each driver name is converted to lowercase using the toLowerCase() 
        //includes() method is used to check if it contains the lowercaseName.
      driver.toLowerCase().includes(lowercaseName)
    );
  }
//This function takes an array of drivers' names and a string as arguments for querying the array, 
//and returns all drivers whose names begin with the provided letters.

  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver =>
        //startsWith() method is used to check if it starts with the lowercase query.
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  //This function takes an array of driver objects and a string as arguments. Each driver object has two properties: 
  //name and hometown. The function should return each element whose name property matches the provided string argument.
  function matchName(drivers, query) {
    //Both driver.name and query are converted to lowercase using the toLowerCase() method for case-insensitive comparison.
    //The === operator checks if the lowercase driver name matches the lowercase query exactly.
    return drivers.filter(driver =>
      driver.name.toLowerCase() === query.toLowerCase()
    );
  }

  
  

