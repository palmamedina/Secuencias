# Generador de Secuencias

Este proyecto es un **generador de secuencias numéricas** desarrollado en **React**. Permite al usuario seleccionar un tipo de secuencia y la cantidad de números que desea generar.

---

## Tipos de Secuencias y su Lógica

### 1. Pares
- **Lógica:** Se generan números que son múltiplos de 2.  
- **Fórmula:** `número = índice * 2`  
- **Ejemplo:** Si la cantidad es 5 → `[0, 2, 4, 6, 8]`  

### 2. Impares
- **Lógica:** Se generan números que son impares, empezando desde 1.  
- **Fórmula:** `número = índice * 2 + 1`  
- **Ejemplo:** Si la cantidad es 5 → `[1, 3, 5, 7, 9]`  

### 3. Múltiplos de 3
- **Lógica:** Se generan números que son múltiplos de 3, empezando desde 0.  
- **Fórmula:** `número = índice * 3`  
- **Ejemplo:** Si la cantidad es 5 → `[0, 3, 6, 9, 12]`  

---

## Cómo Funciona el Programa

1. **El usuario selecciona** el tipo de secuencia: Pares, Impares o Múltiplos de 3.  
2. **El usuario ingresa** la cantidad de elementos a generar.  
3. Al presionar el **botón "Aplicar cambios"**, el programa:
   - Evalúa el tipo de secuencia con un **`if`**.
   - Recorre cada índice desde 0 hasta la cantidad deseada usando un **ciclo `for`**.
   - Calcula cada número según la **fórmula correspondiente**.
   - Agrega cada número al **array** `resultado`.
4. Finalmente, muestra la secuencia en pantalla de forma visual.

---

## Ejemplo de Uso

- **Tipo:** Múltiplos de 3  
- **Cantidad:** 6  
- **Resultado:** `[0, 3, 6, 9, 12, 15]`

---

## Conceptos Aplicados

- **Ciclos (`for`)** → Para repetir la generación de cada número según la cantidad.  
- **Condiciones (`if`)** → Para decidir qué tipo de secuencia generar.  

---
