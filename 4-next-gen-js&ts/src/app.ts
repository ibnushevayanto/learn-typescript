const add = (a: number, b: number = 20): number => a + b; // <= jika ingin ada default value parameter pastikan dimulai dari parameter akhir

// Membuat arrow function dengan 1 parameter dan langsung di return di typescript
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

//   Rest parameter
const addMultiple = (...numbers: number[]): number => {
  return numbers.reduce((a: number, b: number): number => a + b, 0);
};

printOutput(add(10));
printOutput(addMultiple(1, 2, 3, 4, 5, 6));
