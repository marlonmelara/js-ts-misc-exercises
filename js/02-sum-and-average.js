// Ejercicio 2

// Utilizando un bucle, mostrar la suma y la media de los número introducidos hasta introducir un número negativo y ahí mostrar el resultado

let sum = 0;
let count = 0;
let number = 0;

do {
  // Convertimos la entrada a número inmediatamente
  number = Number(prompt('Introduce un número (negativo para terminar):', 0));

  // Validamos si es un número real y si es positivo o cero
  if (!isNaN(number) && number >= 0) {
    sum += number;
    count++;
  } else if (isNaN(number)) {
    alert('Por favor, introduce un número válido.');
  }
} while (number >= 0);

// Validamos que se hayan introducido números para evitar división por cero
if (count > 0) {
  const average = sum / count;
  console.log(`Suma total: ${sum}`);
  console.log(`Media: ${average}`);
  alert(`Suma: ${sum}\nMedia: ${average}`);
} else {
  console.log('No se introdujeron números válidos para calcular.');
}
