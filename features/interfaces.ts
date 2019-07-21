interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: "civic",
  year: new Date(200, 1, 10),
  broken: true,
  summary(): string {
    return `Name is ${this.name}`;
  }
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);

const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
  summary(): string {
    return `My drink is ${this.color}`;
  }
};

printSummary(drink);
