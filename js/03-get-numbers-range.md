# PSEUDOCÓDIGO: Ejercicio 3 - Generador de Lista de Rango Numérico

## ENTRADA:

- NumeroA: Primer límite.
- NumeroB: Segundo límite.

## SALIDA:

- Una lista con los números intermedios o un mensaje informativo.

## LÓGICA:

```text
INICIO

  // FUNCIÓN 1: Lógica de procesamiento
  FUNCIÓN obtenerNumeros(a, b)
    CONVERTIR a y b a números

    SI a O b NO son números válidos ENTONCES
      LANZAR Error "Los valores deben ser números válidos"
    FIN SI

    // Identificar límites
    ESTABLECER minimo a valor menor entre (a, b)
    ESTABLECER maximo a valor mayor entre (a, b)

    ESTABLECER lista_resultados como una lista vacía
    ESTABLECER inicio a (minimo + 1)

    // Llenar la lista
    PARA i DESDE inicio HASTA (maximo - 1) HACER
      AGREGAR i a lista_resultados
    FIN PARA

    RETORNAR lista_resultados
  FIN FUNCIÓN

  // FUNCIÓN 2: Interfaz y visualización
  FUNCIÓN mostrarResultado(val1, val2)
    INTENTAR
      ESTABLECER resultado a LLAMAR obtenerNumeros(val1, val2)

      SI el tamaño de resultado es IGUAL a 0 ENTONCES
        MOSTRAR "No hay números enteros que mostrar en el rango provisto"
      SINO
        MOSTRAR "Números en el rango: " + resultado
      FIN SI

    CAPTURAR Error
      MOSTRAR "Hubo un problema: " + Mensaje del Error
    FIN INTENTAR
  FIN FUNCIÓN

  // Ejecución principal
  LLAMAR mostrarResultado("10", 15)

FIN
```
