const carMakers = ["Ferrari", "Peugeot", "Toyota"];
const dates = [new Date(), new Date()];
const empty: string[] = [];

const carsByMake = [["458"], ["208"], ["Yaris"]];
const empty2: string[][] = [];

// inference
const car = carMakers[0];
const myCar = carMakers.pop();

// prevent
// carMakers.push(100)

// help with methods
carMakers.map(
  (car: string): string => {
    return car;
  }
);

// flexible type
const importantDates = [new Date(), "2018-01-02"];
let empty3: (Date | string)[];
importantDates.push("test");
importantDates.push(new Date());
//importantDates.push(1)
