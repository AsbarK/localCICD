
function add(a: number, b: number): number {
    return a + b;
  }
  
  function subtract(a: number, b: number): number {
    return a - b;
  }
  
  function multiply(a: number, b: number): number {
    return a * b;
  }
  
  function divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
  
  const num1: number = 10;
  const num2: number = 5;
  
  console.log("Simple TypeScript Demo");
  
  console.log(`${num1} + ${num2} = ${add(num1, num2)}`);
  console.log(`${num1} - ${num2} = ${subtract(num1, num2)}`);
  console.log(`${num1} * ${num2} = ${multiply(num1, num2)}`);
  console.log(`${num1} / ${num2} = ${divide(num1, num2)}`);
  
  // Perform a calculation with an array
  const numbers: number[] = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);
  console.log(`The sum of the array [${numbers.join(", ")}] is ${sum}`);
  