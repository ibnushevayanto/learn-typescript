// ! Intersection using type

// type Admin = {
//   name: string;
//   privileges: string[];
// };

// type Employee = {
//   name: string;
//   startDate: Date;
// };

// type combineable = Admin & Employee;

// const data: combineable = {
//     name: 'Ibnu Shevayanto',
//     privileges: ['create-data'],
//     startDate: new Date()
// }

// ! Intersection using type 2

// type numeric = number | boolean;
// type combineable = string | number;
// type universal = combineable & numeric;

// ! Intersection using interface

// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

// interface combineable extends Admin, Employee {}

// const data: combineable = {
//   name: "Ibnu Shevayanto",
//   privileges: ["create-data"],
//   startDate: new Date(),
// };

