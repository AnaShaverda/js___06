function sayHello() {
  console.log("hello");
}

sayHello();

function greetUser(name) {
  console.log(`hello ${name}`);
}

greetUser("Aniko");

function add(a, b) {
  let sum = a + b;

  return sum;
}

console.log(add(8, 10));

const subtract = function (a, b) {
  return a - b;
};

console.log(subtract(10, 5));

const firstAdd = function (a, b) {
  return a + b;
};

const secondAdd = (a, b) => {
  return a + b;
};

const doubleNumber = (num) => num * 2;

const double = (number) => {
  return number * 2;
};

//callback

function runSomething(callback) {
  callback();
}

const sayHi = () => {
  console.log("hi");
};

runSomething(sayHi);

runSomething(function () {
  console.log("hello");
});

let stundeName = "aniko";

let studentsNames = ["aniko", "marita", "lizi"];

let student = {
  name: "Aniko",
  age: 20,
  city: "tbiliis",
  isStudent: true,
  hasLicense: false,
  lastName: "giorgadze",
  languages: ["english", "russion", "spanish"],
};

console.log(student.email);

student.grade = 100;

console.log(student);

delete student.age;

console.log(student);

console.log(student.languages[0]);

let person = {
  name: "aniko",

  addresses: {
    city: "tbilisi",
    street: "saburatlo",
  },
};

console.log(person.addresses);

let users = [
  {
    name: "aniko",
    age: 10,
    email: "ysagd@gmail.com",
  },

  { name: "marita", age: 20, email: "ysagd@gmail.com" },
  { name: "luka", age: 12, email: "ysagd@gmail.com" },
];

console.log(users);

let numbers = [1, 2, 4, 6, 24];

numbers.forEach(function (number, index) {
  console.log(number, index);
});

let foreachResult = numbers.forEach((number) => number * 2);
console.log(foreachResult);

users.forEach((user) => {
  console.log(user.name);
});

let doubledNumbers = numbers.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

let scores = [40, 80, 30, 100, 70];

let hightScores = scores.filter((score) => {
  return score >= 50;
});

console.log(hightScores);

let hight = scores.filter((score) => score >= 80);

console.log(hight);

let adulets = users.filter((user) => user.age >= 18);
console.log(adulets);

let values = [5, 10, 20, 30];
let foundNumber = values.find((number) => number > 10);

console.log(foundNumber);

let fruits = ["orange", "apple", "banana"];

fruits.sort();

console.log(fruits);

let randomNumbers = [50, 10, 20, 70];

randomNumbers.sort((a, b) => b - a);

console.log(randomNumbers);

let sortByName = fruits.sort((a, b) => a.localeCompare(b));

console.log(sortByName);
