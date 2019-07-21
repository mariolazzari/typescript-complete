const profile = {
  name: "Mario",
  age: 44,
  coords: {
    lat: 0,
    long: 15
  },
  setAge(age: number): void {
    this.age = age;
  }
};

// destructoring
const { age }: { age: number } = profile;
const {
  coords: { lat, long }
}: { coords: { lat: number; long: number } } = profile;
