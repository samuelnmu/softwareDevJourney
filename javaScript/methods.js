greeting = 'Hello World!'
let char = greeting.charCodeAt(0);
console.log(char);

// 4th character in a string
const name = "Samuel Ngige Mungai"
let me = name.at(4);
console.log(me);

// concatinate
text1 = "Hello";
text2 = "World";
text3 = text1.concat(' ', text2)
console.log(text3);

// replace
hobby = "I love playing monopoly"
hobs = hobby.replace("love", "Enjoy")
console.log(hobs);

// repeat
let text = "Hello world!";
let result = text.repeat(2);
console.log(result);

// length
let test = "Hello Sir";
let testL = test.length;
console.log(testL);

// slice 
let fruits = "Banana, Apple, Orrange, Grapes";
let slice = fruits.slice(7);
console.log(slice);

// pad
let pad = "5"
let padded = pad.padStart(2,"0")
console.log(padded);
