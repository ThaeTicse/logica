/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
/* Ejemplo de Anagrama ==>  sergio - riesgo */
/* Ejemplo de Anagrama ==>  amor - roma */
function dosPalabras(cadena1, cadena2){
    if(cadena1.toLowerCase().split('').sort().join('') === cadena2.toLowerCase().split('').sort().join('') ) return console.log(true)
        return console.log(false)
}
dosPalabras('AmOr', 'rOMas')

