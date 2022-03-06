type Combineable = string | number;

// Function overload
function add(a:string, b:string): string;
function add(a:number, b:string): string;
function add(a:string, b:number): string;
function add(a:number, b:number): number;
function add (a: Combineable, b: Combineable): Combineable  {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
};

const result = add('Ibnu', ' Shevayanto');
// Jika tidak menggunakan function overload, akan ada error pada result.split, karena fungsi add dibaca number
console.log(result.split(' '));