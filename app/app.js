//creating an empty object and adding properties
var dog = {};

dog.name = 'fido';
dog.age = 3;
dog.gender = 'male';
dog.breed = 'labrador';

console.log(dog);

//creating an object with properties
var dog2 = {name:'sam', age:4};

console.log(dog2);

//creating a dog with user input properties

var prompt = require('sync-prompt').prompt;

var dog3 = {};

dog3.name = prompt('What is your dog\'s name? ');
dog3.age = parseInt(prompt('What is your dog\'s age? '));
dog3.gender = prompt('What is your dog\'s gender? ');
dog.breed = prompt('What is your dog\'s breed? ');

console.log(dog3);

//creating objects inside arrays from user input

var dogs = [];
var newDog = prompt('Add dog? y or n ');

while (newDog !== 'n') {
  var name = prompt('dog\'s name: ');
  var age = prompt('dog\'s age: ');
  var gender = prompt('dog\'s gender: ');
  var dog = {name:name, age:parseInt(age), gender:gender};
  dogs.push(dog);
  newDog = prompt('Add dog? y or n ');
}

console.log(dogs);

//in the above example, dogs = array, dogs[1] = object, dogs[1].age = number

//
