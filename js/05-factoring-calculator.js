// Ejercicio 5
// Mostrar todos los divisores de un número dado

function factoringCalculator(a) {
  const numA = Number(a);

  if (isNaN(numA) || numA <= 0 || !Number.isInteger(numA)) {
    throw new Error('El valor debe ser un número entero mayor a cero');
  }

  const factorNumbers = [];

  for (let i = 1; i <= numA; i++) {
    if (numA % i === 0) {
      factorNumbers.push(i);
    }
  }

  return factorNumbers;
}

function displayResult(a) {
  try {
    const result = factoringCalculator(a);
    console.log(`Los factores de ${a} son ${result.join(', ')}`);
  } catch (error) {
    console.error(`Hubo un problema: ${error.message}`);
  }
}

displayResult(100);
