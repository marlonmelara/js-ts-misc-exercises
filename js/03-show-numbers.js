// Ejercicio 3
// Hacer un programa que muestre todos los números entre dos números

function showNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);
  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Los valores deben ser números válidos');
  }

  const min = Math.min(numA, numB);
  const max = Math.max(numA, numB);

  for (let i = min + 1; i < max; i++) {
    console.log(i);
  }
}

try {
  showNumbers('10', 15);
} catch (error) {
  console.error(`Hubo un problema: ${error.message}`);
}
