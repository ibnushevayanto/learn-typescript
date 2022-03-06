/**
 * interface juga bisa digunakan untuk mendefinisikan function
 * cara normal mendefinisikan function adalaha seperti ini
 *
 * type addFn = (a: number, b: number) => number;
 *
 * Kita juga bisa mendefinisikan function menggunakan interface
 */
interface addFn {
  (a: number, b: number): number;
}
let add: addFn;
add = (a: number, b: number) => a + b;
console.log(add(1, 1));

/**
 * @readonly digunakan agar user tidak bisa menset data properti secara sembarangan
 * karena di interface kita gabisa menggunakna tipe data private
 *
 * charachter "?"
 * bisa diguanakn sebagai lambang optional
 * kita bisa membuat optional properti / parameter dengan tanda "?"
 */
interface Named {
  // contoh membuat optional properti
  readonly name?: string;
  nickname?: string;
}

/**
 * @extends
 * untuk mengextends interface
 */
interface Greetable extends Named {
  greetings(phrase: string): void;
}

class Person implements Greetable {
  name?: string;

  // Contoh membuat optional parmeter
  constructor(n?: string) {
    if (n) {
      this.name = n;
    } else {
      this.name = "John Doe";
    }
  }

  greetings(phrase: string): void {
    console.log(phrase + " " + this.name);
  }
}

/** Use Interface */
let ibnu: Greetable;
ibnu = {
  name: "Ibnu Shevayanto",
  greetings(phrase: string): void {
    console.log(phrase + " " + this.name);
  },
};
ibnu.greetings("Halo Nama Saya");

/** Use Class */
const kevin = new Person();
kevin.greetings("Halo Nama Saya");
