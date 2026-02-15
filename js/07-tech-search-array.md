# PSEUDOCÓDIGO: Ejercicio 7 - Buscador de índices

Crea un array con al menos 5 elementos (pueden ser nombres de frutas, ciudades o tecnologías).
Pide al usuario mediante un prompt que introduzca un número de índice para consultar.

Validaciones:

1. Comprobar si el dato introducido es un número.
2. Comprobar que el número sea positivo y esté dentro del rango del array.
3. Mostrar el valor correspondiente mediante un alert o un mensaje de error si no pasa las validaciones.

## ENTRADA:

- Un array 'technologies' con 5 lenguajes de programación.
- Un número ingresado por el usuario (del 1 al 5).

## SALIDA:

- El nombre del lenguaje correspondiente o un mensaje de error detallado.

## LÓGICA

```text
INICIO

  // Inicialización
  ESTABLECER array technologies CON ["JavaScript", "Python", "Java", "C#", "C++"]
  ESTABLECER arrLength A longitud de technologies
  ESTABLECER selectedTech VACÍO
  ESTABLECER validEntry A FALSO

  // Bloque 1: Bucle de captura y validación
  MIENTRAS validEntry ES FALSO HACER

    LEER input "Introduce un número del 1 al " + arrLength + ":"

    // Validación 1: ¿Está vacío o es nulo?
    SI input ES NULO O input ES VACÍO ENTONCES
      MOSTRAR ALERTA "Error: No has ingresado nada."
      SALTAR al inicio del bucle
    FIN SI

    CONVERTIR input A numericInput (Número entero)

    // Validación 2: ¿Es un número entero y está en rango?
    SI numericInput NO ES ENTERO ENTONCES
      MOSTRAR ALERTA "Error: Ingresa un número válido."
    SINO SI numericInput < 1 O numericInput > arrLength ENTONCES
      MOSTRAR ALERTA "Error: El número debe estar entre 1 y " + arrLength + "."
    SINO
      ESTABLECER selectedTech A technologies[numericInput - 1]
      ESTABLECER validEntry A VERDADERO
    FIN SI

  FIN MIENTRAS

  // Bloque 2: Resultado final
  MOSTRAR ALERTA "Has seleccionado: " + selectedTech

FIN
```
