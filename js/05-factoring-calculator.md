# PSEUDOCÓDIGO: Ejercicio 5 - Calculadora de factores

Mostrar todos los divisores de un número dado

## ENTRADA:

- NumeroA: Un número cualquiera.

## SALIDA:

- Una lista con los divisores (factores) del número evaluado.

## LÓGICA:

```text
INICIO

  FUNCIÓN getFactors(value)
    CONVERTIR value a números

    SI Num NO es un número O si el número <= 0 O no es entero ENTONCES
      LANZAR Error "El valor debe ser un número entero mayor a cero"
    FIN SI

    CREAR array vacío factors

    // Llenar la lista
    PARA i = 1 DESDE inicio HASTA Num SUMAR 1 HACER
      SI el residuo de Num entre i es igual a 0 ENTONCES
        GUARDAR i en el array factors
    FIN PARA

    RETORNAR factorNumbers
  FIN FUNCIÓN

  FUNCIÓN displayFactoring(input)
    INTENTAR
      resultado = LLAMAR getFactors(input)
        MOSTRAR resultado
    CAPTURAR Error
      MOSTRAR mensaje del Error
  FIN FUNCIÓN

  LLAMAR displayFactoring(100)

FIN
```
