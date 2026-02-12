# PSEUDOCÓDIGO: Ejercicio 1 - Identificador de Relación Numérica

Crea un programa que pase dos números y que nos diga cuál es el mayor, el menor y si son iguales.

## ENTRADA:

- NumeroA: El primer valor a comparar.
- NumeroB: El segundo valor a comparar.

## SALIDA:

- Un mensaje de texto indicando cuál es el mayor, cuál es el menor o si existe igualdad.

## LÓGICA:

```text
INICIO

  FUNCIÓN identificarNumero(A, B)

    SI A no es un número O B no es un número ENTONCES
      LANZAR Error "Ambos valores deben ser números"
    FIN SI

    SI A es mayor que B ENTONCES
      RETORNAR A + " es mayor y " + B + " es el menor"

    SINO SI B es mayor que A ENTONCES
      RETORNAR B + " es mayor y " + A + " es el menor"

    SINO
      RETORNAR "Ambos números son iguales"

    FIN SI

  FIN FUNCIÓN

  // Bloque principal de ejecución
  INTENTAR
    ESTABLECER valor1 a 10
    ESTABLECER valor2 a 7

    resultado = LLAMAR identificarNumero(valor1, valor2)
    MOSTRAR resultado

  CAPTURAR Error
    MOSTRAR "Hubo un problema: " + Mensaje del Error

  FIN INTENTAR

FIN
```
