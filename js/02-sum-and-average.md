# PSEUDOCÓDIGO: Ejercicio 2 - Calculador de Suma y Media Progresiva

Utilizando un bucle, mostrar la suma y la media de los número introducidos hasta introducir un número negativo y ahí mostrar el resultado.

## ENTRADA:

- Una secuencia de valores introducidos por el usuario (números).

## SALIDA:

- Suma total de los números positivos.
- Promedio (media) de los números positivos.

## LÓGICA:

```texto
INICIO

  // Inicialización de acumuladores
  ESTABLECER suma_total a 0
  ESTABLECER contador_entradas a 0
  ESTABLECER numero_actual a 0

  REPETIR

    MOSTRAR "Introduce un número (negativo para terminar):"
    LEER entrada_usuario

    // Validación de entrada nula o vacía
    SI entrada_usuario es NULO O entrada_usuario está VACÍO ENTONCES
      MOSTRAR "Entrada no válida. Por favor, escriba un número."
      SALTAR a la siguiente iteración
    FIN SI

    CONVERTIR entrada_usuario a valor_numerico

    // Validación de tipo de dato
    SI valor_numerico NO ES UN NÚMERO ENTONCES
      MOSTRAR "Error: El valor introducido no es un número válido."
      numero_actual = 0 // Reset para evitar salida accidental

    SINO SI valor_numerico es MAYOR O IGUAL a 0 ENTONCES
      // Procesamiento de lógica de negocio
      suma_total = suma_total + valor_numerico
      contador_entradas = contador_entradas + 1
      numero_actual = valor_numerico

    SINO
      // Es un número negativo, se prepara la salida
      numero_actual = valor_numerico
    FIN SI

  MIENTRAS numero_actual sea MAYOR O IGUAL a 0 O NO SEA UN NÚMERO

  // Cálculo y Visualización de Resultados
  SI contador_entradas es MAYOR que 0 ENTONCES
    media = suma_total / contador_entradas
    MOSTRAR "Suma total: " + suma_total
    MOSTRAR "Media: " + media
  SINO
    MOSTRAR "No se procesaron números válidos para calcular estadísticas."
  FIN SI

FIN
```
