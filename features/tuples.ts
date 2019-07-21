const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40
};

const pepsi: [string, boolean, number] = ["brown", true, 40];
//pepsi[0] = 1

// type alias
type Drink = [string, boolean, number];
const sprite: Drink = ["clear", true, 30];

// csv!
const carSpecs: [number, number] = [400, 3456];
const carStats = {
  hp: 400,
  weigth: 3456
};
