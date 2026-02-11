// Ejercicio 3
// Hacer un programa que muestre todos los números entre dos números

function showNumbers(a: number, b: number): void {
  const min = Math.min(a, b);
  const max = Math.max(a, b);

  for (let i = min + 1; i < max; i++) {
    console.log(i);
  }
}

showNumbers(10, 15);
