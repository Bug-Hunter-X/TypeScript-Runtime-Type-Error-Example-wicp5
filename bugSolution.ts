function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: both parameters must be numbers');
  }
  return a + b;
}

function subtract(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid input: both parameters must be numbers');
  }
  return a - b;
}

let result1 = add(5, 3); // compiles and runs fine
let result2 = subtract(5, 3); // compiles and runs fine

// Now this will throw an error instead of silently failing
try {
  let result3 = add(5, "3");
} catch (error) {
  console.error(error);
}

try {
  let result4 = subtract(5, "3");
} catch (error) {
  console.error(error);
}
