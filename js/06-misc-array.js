// Ejercicio 6

const listNumbers = [];
const targetAmount = 6;

// 1. Pide 6 números y agregarlos a un array con validación
for (let i = 0; i < targetAmount; i++) {
  let validEntry = false;

  while (!validEntry) {
    const input = prompt(`Introduce el número ${i + 1} de ${targetAmount}:`);

    if (input === null || input.trim() === '' || isNaN(input)) {
      alert('Error: Por favor, introduce un número válido.');
    } else {
      listNumbers.push(Number(input));
      validEntry = true;
    }
  }
}

// 2. Mostrar el array en el cuerpo de la página y en la consola
console.log('Contenido original:', listNumbers);

let html = '<h2>Contenido del Array:</h3><ul>';

listNumbers.forEach(number => {
  html += `<li>${number}</li>`;
});

html += '</ul>';

document.body.innerHTML += html;
