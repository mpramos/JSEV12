/*Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

el precio de una sola rosa (8) y el número de rosas que tienes (70)
el precio de un solo lirio (10) y el número de lirios que tienes (50)
el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
Ahora declara tres variables, una para cada una de las rosas, lirios y tulipanes que tienes, 
en las que colocas su precio total.
 Inserta los valores correspondientes en las variables utilizando las variables declaradas
  en el paso anterior. Finalmente, declara una variable en la que almacenes el precio de todas
   tus flores (nuevamente, usa las variables anteriores para la inicialización). 
Muestra toda la información del inventario en la consola de la siguiente forma:*/

// guillermo
let precioRosa=8
let numeroRosas=70
//nancy
let precioLirios=10;
let numeroLirios=50;
let valorLirios=precioLirios*numeroLirios;

//paola
let tulipan=2;
let mumerotulipanes=120;

console.log(`Rosas: ${precioRosa*numeroRosas}`);
console.log(`Lirios: ${valorLirios}`);
console.log(`Tulipanes: ${tulipan*mumerotulipanes}`);


/**
 * Modifica el código del ejemplo anterior.
 *  Supón que los precios de las flores serán
 *  constantes (no cambiarán). 
 * Declara e inicializa las variables restantes
 *  de la misma manera que en el ejemplo anterior.
 *  Muestra toda la información recopilada en la consola.
 *  Ahora disminuye el número de rosas en 20 y el de lirios en 30.
 *  Vuelve a mostrar toda la información recopilada en la consola.
 */

const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rosa: precio unitario:", rosePrice, ", cantidad:", numberOfRoses, ", valor:", rosesValue);
console.log("Lirio: precio unitario:", lilyPrice, ", cantidad:", numberOfLilies, ", valor:", liliesValue);
console.log("Tulipán: precio unitario:", tulipPrice, ", cantidad:", numberOfTulips, ", valor:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rosa: precio unitario:", rosePrice, ", cantidad:", numberOfRoses, ", valor:", rosesValue);
console.log("Lirio: precio unitario:", lilyPrice, ", cantidad:", numberOfLilies, ", valor:", liliesValue);
console.log("Tulipán: precio unitario:", tulipPrice, ", cantidad:", numberOfTulips, ", valor:", tulipsValue);
console.log("Total: ", total);

