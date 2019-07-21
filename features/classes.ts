class Vehicle {
  //color: string;

  constructor(public color: string) {
    //this.color = color;
  }

  protected honk(): void {
    console.log("beep");
  }
}

class Car extends Vehicle {
  constructor(public wheel: number, color: string) {
    super(color);
  }

  private drive(): void {
    console.log(this.color + " car drive method");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "blue");
car.startDrivingProcess();
