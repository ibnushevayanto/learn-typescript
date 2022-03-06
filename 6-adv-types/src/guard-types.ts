// ! Type Guard 1 Example

// type Combineable = string | number;
// const add = (a: Combineable, b: Combineable): Combineable => {
//   if (typeof a === "string" || typeof b === "string") {
//     return a.toString() + b.toString();
//   }
//   return a + b;
// };

// ! Type Guard 2 Example

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type Combineable = Admin | Employee;

// const getDataEmployee = (data: Combineable): void => {
//   console.log("Nama Saya : " + data.name);

//   if ("privileges" in data) {
//     console.log("Privileges Saya : " + data.privileges.join(","));
//   }

//   if ("startDate" in data) {
//     console.log("Start Date : " + data.startDate);
//   }
// };

// getDataEmployee({
//   name: "Ibnu Shevayanto",
//   privileges: ["Buat Data"],
//   startDate: new Date(),
// });

// ! Type Guard 3 Example

class Car {
  drive(): void {
    console.log("Drive...");
  }
}

class Truck {
  drive(): void {
    console.log("Drive...");
  }
  loadCargo(numberCargo: number): void {
    console.log("Load Cargo", numberCargo);
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle): void => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);
