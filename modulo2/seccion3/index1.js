
/* Tareas
Objetos
Crea un objeto que describa un boleto de tren y guárdalo en la variable ticket. El objeto debe tener tres campos:
estación inicial (el nombre clave es 'from', y como valor, proporciona el nombre de la estación más cercana 
en tu área)
estación final (el nombre clave es 'to', y como valor, dar cualquier otra estación dentro de 100 km)
el precio del boleto (el nombre clave es 'price', y como valor, proporciona la cantidad que te gustaría pagar
 por este boleto)
El objeto debe crearse usando llaves {}, en los que todos los campos se enumerarán inmediatamente. 
Luego muestra los valores de todos los campos del ticket en la consola.
Declara un objeto vacío y guárdalo en la variable person. Usando la notación de punto, agrega los campos 
firstName y lastName al objeto ingresando tus datos como valores. Intenta mostrar los campos individuales en la
 consola.*/
let ticket={
    from:'estacion 1',
    to:'estacion2',
    price:50
}
console.log(ticket);
let person={}
console.log(person);
person.firstName='Juana'
person.lastName='Ramirez'
console.log(person);