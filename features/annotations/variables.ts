let apple: number = 5;
let string: string = "fast";
let hasName: boolean = true;

let notMuch: null = null;
let nothing: undefined = undefined;

// buuilt in obj
let now: Date = new Date();

// array
let colors: string[] = ["red", "green", "blue"];
let myNumbers: number[] = [1, 2, 3];
let thruts: boolean[] = [true, true, false];

// classes
class Car {}
let car: Car = new Car();

// obj litteral
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// any type
const json = '{"x":10,"y":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

// delaued init
let words = ["red", "green", "blus"];
let found: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === "red") {
    found = true;
  }
}

// inferred not possible
let numbers = [-1, 1 - 11];
let numberAboveZero: boolean | number = false;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 0) {
    numberAboveZero = numbers[i];
  }
}
