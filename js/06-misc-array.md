# PSEUDOCÓDIGO: Ejercicio 6 - Gestión de Array de Números

1. Pide 6 números por pantalla y agregarlos a un array
2. Mostrar el array en el cuerpo de la página y en la consola

## ENTRADA:

- 6 números ingresados por el usuario.

## SALIDA:

- El contenido del array mostrado en la consola.
- El contenido del array renderizado en el cuerpo de la página.

## LÓGICA

```text
INICIO

  // Initialization
  CREAR array vacío listNumbers
  ESTABLECER targetAmount A 6

  // BLOCK 1: Data Capture and Validation
  PARA i DESDE 0 HASTA targetAmount CON INCREMENTO DE 1 HACER

    ESTABLECER validEntry A FALSO

    MIENTRAS validEntry SEA FALSO HACER
      LEER input "Introduce el número " + (i + 1) + " de " + targetAmount

      // Validation: Not null, not empty, and must be a numeric value
      SI input ES NULO O input.trim() ES VACÍO O input NO ES NUMÉRICO ENTONCES
        MOSTRAR ALERTA "Error: Please enter a valid number."
      SINO
        CONVERTIR input A TIPO NUMÉRICO
        AGREGAR input AL FINAL DE listNumbers
        ESTABLECER validEntry A VERDADERO
      FIN SI

    FIN MIENTRAS
  FIN PARA

  // BLOCK 2: Data Visualization

  // Console Output
  MOSTRAR EN CONSOLA "Original content: " + listNumbers

  // Web Page Output (HTML Construction)
  ESTABLECER html A "<h1>Contenido del Array:</h1><ul>"

  PARA CADA number EN listNumbers HACER
    CONCATENAR A html "<li>" + number + "</li>"
  FIN PARA

  CONCATENAR A html "</ul>"

  // Physical Render
  INSERTAR html EN document.body.innerHTML

FIN
```
