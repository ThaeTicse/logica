/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 *   
 * 
 */

var fibonacci = []
fibonacci[0] = 0;
fibonacci[1] = 1;
for (var i = 2; i <= 50; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}
console.log(fibonacci)