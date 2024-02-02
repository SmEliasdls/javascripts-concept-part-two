// Creating an object
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    isStudent: false,
    address: {
      city: 'Exampleville',
      country: 'JSland'
    },
    sayHello: function() {
      console.log('Hello!');
    }
  };
  
  // Accessing properties
  console.log(person.firstName); // Output: John
  console.log(person['lastName']); // Output: Doe
  
  // Modifying properties
  person.age = 31;
  person['isStudent'] = true;
  
  // Accessing nested properties
  console.log(person.address.city); // Output: Exampleville
  
  // Calling a method
  person.sayHello(); // Output: Hello!
  