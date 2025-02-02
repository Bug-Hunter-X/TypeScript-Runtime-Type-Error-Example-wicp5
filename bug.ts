function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b; 
}

let result1 = add(5, 3); // compiles and runs fine
let result2 = subtract(5, 3); // compiles and runs fine

// This will cause a runtime error because TypeScript does not check for runtime type errors!
let result3 = add(5, "3"); // Type 'string' is not assignable to type 'number'.
let result4 = subtract(5, "3"); // Argument of type 'string' is not assignable to parameter of type 'number'.