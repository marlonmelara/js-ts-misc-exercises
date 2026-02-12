# PSEUDOCÓDIGO: Ejercicio 4 - Obtener números impares en un rango

Mostrar todos los números impares que hay entre dos números

## ENTRADA:

- NumeroA: Primer límite.
- NumeroB: Segundo límite.

## SALIDA:

- Una lista con los números impares en un rango o un mensaje informativo.

## LÓGICA:

```text
INICIO

  FUNCIÓN getOddNumbers(a,b)
    CONVERTIR a y b a números si recibimos números como texto y guardar en variables numA y numB

    SI numA o numB no son un número ENTONCES
      LANZAR Error "Ambos valores deben ser números"

    ESTABLECER el mínimo entre numA y numB y guardar en variable min
    ESTABLECER el máximo entre numA y numB y guardar en variable max

    CREAR una variable con nombre START que sume 1 a la variable min

    CREAR una variable para un array vacío OddNumbers

    PARA i que inicia en START HASTA max sumar 1 a i HACER
      SI el residuo de i entre 2 es diferente de 0 ENTONCES
        GUARDAR i en el array OddNumbers
    FIN PARA

    RETORNAR OddNumbers
  FIN FUNCIÓN


  FUNCIÓN displayResult(a, b)
    INTENTAR
      resultado = LLAMAR getOddNumbers(a, b)

      SI el array resultado esta vacío ENTONCES
        MOSTRAR mensaje de que no hay números impares en el rango otorgado
      SINO
        MOSTRAR resultado
    CAPTURAR Error
      MOSTRAR mensaje del Error
  FIN FUNCIÓN


  LLAMAR displayResult(1, 2)

FIN
```
