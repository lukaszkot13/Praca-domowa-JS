// 1)

const name = "Karol";
const age = 40;
const isOpen = true;
const stringBoolean = "true";
const stringNumber = 100;

// 2)

let name1 = "Michał";

console.log(name1);

let sayHellow = "Hello Ania";

console.log(sayHellow);

let namber = 4;

console.log(namber);

let answer = false;

console.log(answer);

// 3)

console.log(name);
consol.log(age);
console.log(isOpen);
console.log(stringBoolean);
consol.log(stringNumber);

// 4)

// a)

function sum(a, b) {
  console.log(a);
  console.log(b);
  const result = 2 + 2;
  return result;
}
// -------> ta opcja wyświetla tylko wynik 4 bezwzględnie jaki liczby przyjmniemy

function sum(a, b) {
  console.log(a);
  console.log(b);
  const result = a + b;
  return result;
}

// b)

function sum(a = "Michał", b = "Kowalski") {
  console.log(a);
  console.log(b);
  const result = a + b;
  return result;
}

// c)

function equ(a = 0, b = 0, c = 0) {
  console.log("a =", a);
  console.log("b =", b);
  console.log("c =", c);
  const result = a + b * c;
  return result;
}

// lub

function equ(a, b, c) {
  console.log(a);
  console.log(b);
  console.log(c);
  const result = a + b * c;
  return result;
}

// 5)

function sum(a, b) {
  console.log(a);
  console.log(b);
  const result = a + b;
  return result;
}

// 6)

let name2 = "Michał";
console.log(name2);
name2 = "Łukasz";
console.log(name2);
name2 = "Agata";
console.log(name2);

// 7)

// a)

function sum() {
  return 2 + 2;
}

// b)

function word() {
  return "Hello Word!";
}

// c)

function answer() {
  return true;
}

// d)

function modulo() {
  const result = 6 % 4;
  return result;
}

// e)

function power() {
  const result = 3 ** 4;
  return result;
}

// f)

function say() {
  const result = "Hello, " + "How are You?";
  return result;
}

// g)

function multiple() {
  const result = 5 * 60;
  return result;
}
(function multiple(a, b) {
  const result = a * b;
  return result;
});

// h)

function multiple1() {
  const result = 3 * 3600;
  return result;
}

// i)

function equ1() {
  const result = (10 * 9) / 2;
  return result;
}

// j)

function minus() {
  const result = 10 - 200;
  return result;
}

// 8)

// a)

let arr = [1, 2, 3];

// b)

let arr = ["Audi", "Mercedes", "BMW", "Volvo", "Opel"];

// c)

let arr = [true, false, true];

// d)

let arr = [];

// e)

let arr = [1, true, "Mercedes", 12, false];

// f)

let arr = [1, true, "Mercedes"];
arr[1];

// g)

// length ta właściwość służy do wyświetlania długość tablicy
let auto = ["Audi", "Mercedes", "Opel"];
console.log(auto.length);

// h)

let tab = [];
tab.push(1, 2, 369);
console.log(tab);

// 9)

// a)

let obj = {};

// b)

let person = {
  name: "Iza",
};

// c)

let personDetails = {
  name: "Agata",
  lastName: "Kowalska",
  age: 26,
  drivingLicence: true,
};

//  d)

console.log(personDetails.drivingLicence);

// e)

console.log(personDetails);

// 10)

// a)

function sum1(firstNumber, secondNamber) {
  return firstNumber + secondNamber;
}

// b)

function goodBye(name) {
  return "dobranoc " + name;
}

// c)

function bool(boolean) {
  return boolean;
}

// d)

function modulo1(a, b) {
  return a % b;
}

// e)

function power1(a, b) {
  return a ** b;
}

// f)

function name1(name, surname) {
  return name + surname;
}

// g)

function minutesToSecond(minutes) {
  return minutes * 60;
}

// h)

function hourToSecond(hour) {
  return hour * 3600;
}

// i)

function areaOfTriangle(a, b, c) {
  return a * b * 0, 5;
}

// j)

function yareOfDay(yare) {
  return yare * 365;
}

// k)

function power2(a) {
  return a ** a;
}

// l)

function sideOfTheTriangle(a, b) {
  return a + b - 1;
}

// m)

function hello(name) {
  return "Cześć, " + name;
}

// n)

function age(yare) {
  return 2021 - yare;
}

// o)

function points(a, b) {
  return a * 2 + b * 3;
}

// xyz

// let person = {
//   name: 'Karol',
//   age: 40,
//   isOpen: true,
//   stringBoolean: 'true',
//   stringNumber: 100
// }
// console.log(person)
