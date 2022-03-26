// Code goes here!

// ! Permasalahan jika menggunakan function yang return object seperti diata
// function merge(objectA: object, objectB: object) {
//   return Object.assign(objectA, objectB);
// }
// const mergedObj = merge({ nama: "ibnu" }, { umur: 20 });
// mergedObj.nama // ! <= akan mengalami error disini, tidak bisa mendapatkan properti nama

// * A, B memiliki cara kerja yang sama seperti function yang memiliki parameter
// * extends object, membuat agar jika memanggil function merge parameter yang menggunakan 'A' harus bernilai object
function merge<A extends object, B extends object>(objectA: A, objectB: B) {
  return Object.assign(objectA, objectB);
}
const mergedObj = merge<{ nama: string; hoby: string[] }, { umur: number }>(
  { nama: "ibnu", hoby: ["Rebahan"] },
  { umur: 20 }
);

console.log(mergedObj.nama);

/** Generics dengan menggunakan interface */

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements.";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi There !"));

/** Generics sebagai key untuk mendapatkan sebuah object */
function extractAndConvert<A extends object, B extends keyof A>(
  obj: A,
  key: B
) {
  return "Value : " + obj[key];
}

console.log(extractAndConvert({ name: "Kura" }, "name"));

/** Generics dengan menggunakan class */

class StorageClass<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const itemsStorage = new StorageClass<string>();
itemsStorage.addItem("Manu");
itemsStorage.addItem("Max");
itemsStorage.removeItem("Max");
console.log(itemsStorage.getItems());

/** Partial */
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  completeUntil: Date
): CourseGoal {
  const goalCourse: Partial<CourseGoal> = {}; // * Partial mendefinisikan sebuah object yang nanti akan dibentuk seperti apa
  goalCourse.title = title;
  goalCourse.description = description;
  goalCourse.completeUntil = completeUntil;

  return goalCourse as CourseGoal;
}
