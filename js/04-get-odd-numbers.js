// Ejercicio 4
// Mostrar todos los números impares que hay entre dos números

function getOddNumbers(a, b) {
  const numA = Number(a);
  const numB = Number(b);

  if (isNaN(numA) || isNaN(numB)) {
    throw new Error('Los valores deben ser números válidos');
  }

  const min = Math.min(numA, numB);
  const max = Math.max(numA, numB);
  const oddNumbersResult = [];

  for (let i = min + 1; i < max; i++) {
    if (i % 2 !== 0) {
      oddNumbersResult.push(i);
    }
  }

  return oddNumbersResult;
}

// try {
//   const result = getOddNumbers(15, 10);
// } catch (error) {
//   console.error(`Hubo un problema: ${error.message} `);
// }

function displayResult(a, b) {
  try {
    const result = getOddNumbers(a, b);
    if (result.length === 0) {
      console.log('No hay impares');
    } else {
      console.log(result);
    }
  } catch (error) {
    console.error(`Hubo un problema: ${error.message} `);
  }
}

displayResult(10, 20);
