import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numersCollection = new NumbersCollection([10, -3, 0, 5]);
let sorter = new Sorter(numersCollection);
sorter.sort();
console.log(numersCollection.data);

const chars = new CharactersCollection("mario");
sorter = new Sorter(chars);
sorter.sort();
console.log(chars.data);
