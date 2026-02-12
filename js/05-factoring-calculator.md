# PSEUDOCÓDIGO: Ejercicio 5 - Calculadora de factores

Mostrar todos los divisores de un número dado

## ENTRADA:

- NumeroA: Un número cualquiera.

## SALIDA:

- Una lista con los divisores (factores) del número evaluado.

## LÓGICA:

```text
INICIO

  FUNCIÓN factoringCalculator(numA)
    CONVERTIR numA a números

    SI NumA NO es un número O si el número <= 0 O no es entero ENTONCES
      LANZAR Error "El valor debe ser un número entero mayor a cero"
    FIN SI

    CREAR array vacío factorNumbers

    // Llenar la lista
    PARA i = 1 DESDE inicio HASTA NumA SUMAR 1 HACER
      SI el residuo de NumA entre i es igual a 0 ENTONCES
        GUARDAR i en el array factorNumbers
    FIN PARA

    RETORNAR factorNumbers
  FIN FUNCIÓN

  FUNCIÓN displayResult(a)
    INTENTAR
      resultado = LLAMAR factoringCalculator(a)
        MOSTRAR resultado
    CAPTURAR Error
      MOSTRAR mensaje del Error
  FIN FUNCIÓN

  LLAMAR displayResult(20)

FIN
```
