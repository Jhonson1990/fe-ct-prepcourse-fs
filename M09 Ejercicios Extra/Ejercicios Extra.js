/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:

   var arreglo1 = [];

   for (const clave in objeto) {
               arreglo1.push([clave, objeto[clave]])
      }
   return arreglo1



} console.log(deObjetoAarray({D: 1, B: 2, C: 3}))

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:

   var contador = {};
   for (let i = 0; i < string.length; i++) {
      const letra = string[i];
      if (!contador[letra]){
         contador[letra] = 1;
      } else {
         contador[letra]++;
      }
   }
   var ordenadas = Object.keys(contador).sort();
   var resultado = {};
   for (let i = 0; i < ordenadas.length; i++) {
      const letra = ordenadas[i];
      resultado[letra] = contador[letra];      
   }
   return resultado
}console.log(numberOfCharacters("adsjfdsfsfjsdjfhacabcsbajda"))

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var str1 = ""
   var str2 = ""
    for (let i = 0; i < string.length; i++) {
     if(string[i] === string[i].toUpperCase()){
         str1 += string[i]
     } else {
         str2 += string[i]
     }
   }
   return str1 + str2
} console.log(capToFront("soyHENRY"))

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
      var nuevaString = [];
     

      for (let i = 0; i < frase.length; i++) {
         nuevaString.unshift(frase[i]) 
      }
   return nuevaString.join("").split(" ").reverse("").join(" ")
    
} console.log(asAmirror("The Henry Challenge is close!"))

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:

   if(numero === parseInt(numero.toString().split("").reverse().join(""))){
      return "Es capicua"
   } return "No es capicua"
    


} console.log(capicua(51055015))

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var nuevaString1 = ""
   var nuevaString2 = ""
   for (let i = 0; i < string.length; i++) {
      if(string[i] === "a" || string[i] === "b" || string[i] === "c" ){
       nuevaString1 = nuevaString1 + string[i]
      } else { 
         nuevaString2 = nuevaString2 + string[i]
            }  
   }   return nuevaString2
} console.log(deleteAbc("abcdariosssasasafffabbbcccc"))

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort((a,b) => a.length - b.length )
  
}console.log(sortArray(["You", "are", "beautiful", "looking"]))

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:

   var array3 = [];

   for (let i = 0; i < array1.length; i++) {
      for (let j = 0; j < array2.length; j++) {
      if(array1[i] === array2[j]){
         array3.push(array1[i])
         }
      }
   } return array3

} console.log(buscoInterseccion([4,2,3],[1,3,4] ))

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
