/*Escribe un fragmento de código que creará variables y las inicializará con valores Boolean, Number, BigInt, 
String y tipos undefined utilizando (siempre que sea posible) literales y funciones constructoras.
Imprime todos los valores y todos los tipos de esos valores usando console.log. Intenta usar la interpolación
 de cadenas para mostrar el valor y el tipo al mismo tiempo con una sola llamada a console.log, por ejemplo,
  en el siguiente formato: 1000 [número].
Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir de un Number que se
 creó a partir de un String. Comienza con el valor "1234". ¿Es posible?
Intenta agregar dos valores del mismo tipo y verifica el tipo de resultado. Pruébalo para todos los tipos de 
datos primitivos.
Intenta sumar dos valores de diferentes tipos y verifica los resultados.
Intenta modificar la línea const str1 = 42 + "1"; para obtener el resultado 43 (sin eliminar las comillas 
    alrededor del 1)*/

    const boolLiteral=true
    const boolContructor= Boolean(false)
    const numLiteral=42
    const numConstrutor=Number(numLiteral)
    const BigIntLiteral=2131262666363636363636363n
    const BigContructor= BigInt(BigIntLiteral)
    const strLiteral='Hola a todos'
    const strConstructor=String(strLiteral)

    console.log(`${boolLiteral} [${typeof boolLiteral}]`);
    console.log(`${boolContructor} [${typeof boolContructor}]`);
    console.log(`${numLiteral} [${typeof numLiteral}]`);
    console.log(`${numConstrutor} [${typeof numConstrutor}]`);
    console.log(`${BigIntLiteral} [${typeof BigIntLiteral}]`);
    console.log(`${BigContructor} [${typeof BigContructor}]`);
    console.log(`${strLiteral} [${typeof strLiteral}]`);
    console.log(`${strConstructor} [${typeof strConstructor}]`);
    
    // Realiza una cadena de conversiones: crea un Boolean a partir de un BigInt creado a partir de un Number que se
    // creó a partir de un String. Comienza con el valor "1234". ¿Es posible?
    
    const strValue="1234"
    const numValue= Number(strValue)
    const bigIntValue= BigInt(numValue)
    const boolValue= Boolean(bigIntValue)
    console.log(`${strValue} [${typeof strValue}]-> ${numValue} [${typeof numValue}]->${bigIntValue} [${typeof boolValue}->${boolValue} [${typeof boolValue}]]`);
    