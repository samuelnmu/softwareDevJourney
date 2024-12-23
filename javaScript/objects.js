// car = {type : "Benz", model: "Glc", year: 2024};

// console.log(car.type);


// const person = new Object()
// person.firstName = 'Samuel';
// person.middleNmae = 'Ngige';
// person.dreamCar = 'Benz GLC AMG 43';
// person.favFood = 'ugali and pork';

// console.log(person.firstName +  ' is a succer of ' + person.dreamCar);

// const me = {
//     firstName : 'Samuel',
//     secondName : 'Ngige',
//     lastName : 'Mungai',
// }
// delete me.lastName;
// console.log(me);


// dot notation

// myObj = {
//     name : 'Samuel',
//     age : 24,
//     myCars : {
//         car1 : "Benz Glc",
//         car2 : "VW GTI",
//         car3 : "Landcruiser V8" 
//     }
// }
// console.log(myObj.myCars.car1);


// object methods
// const person = {
//     firstName : 'Samuel',
//     secondName : 'Ngige',
//     age : 24,
//     id : 444777,

//     fullName : function(){
//         return this.firstName + " " + this.secondName;
//     },
// };

// const name = person.fullName()

// console.log(name);
// console.log(person.fullName());


// Create an Object
// const person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };

// // Stringify Object
// let myString = JSON.stringify(person);

// console.log(myString);


// object constructors

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;

  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}
