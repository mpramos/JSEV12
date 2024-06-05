/*Arreglos
Estamos creando una pequeña biblioteca de libros sobre programación en JavaScript. 
Tenemos tres libros y queremos preparar una lista de ellos. 
Almacenaremos tres datos de cada libro: el título, el autor y el número de páginas:
Speaking JavaScript, Axel Rauschmayer, 460.
Programming JavaScript Applications, Eric Elliott, 254.
Understanding ECMAScript 6, Nicholas C. Zakas, 352.
Crea un arreglo de tres objetos que representen los libros. Cada objeto debe tener
 las siguientes propiedades: título, autor, páginas.
Hemos agregado un nuevo libro a nuestra colección: Learning JavaScript Design Patterns,
 por Addy Osmani, 254 páginas. Usa el método apropiado para adjuntar el libro al final del arreglo.
  Muestra la longitud del arreglo y, a su vez, todos los nombres de los libros en la colección.
Utiliza el comando slice para copiar los dos últimos libros al nuevo arreglo.
El primer libro de la colección se pierde en circunstancias inexplicables. Ya has aceptado la pérdida,
 así que ahora elimínalo del arreglo. ¿Cuál método usarás para este propósito? Muestra la longitud del
  arreglo y todos los nombres de los libros de la colección a su vez.
Muestra la suma de las páginas de todos los libros de la colección.*/
let libros=[
    {titulo:'Speaking JavaScript',autor:'Axel Rauschmayer',paginas:460},
    {titulo:'Programming JavaScript Applications',autor:'Eric Elliott',paginas:254},
    {titulo:'Understanding ECMAScript 6',autor:'Nicholas C. Zakas',paginas:352},
]
let libro={titulo:'Learning JavaScript Design Patterns',autor:'Addy Osmani',paginas:254}
libros.push(libro)
console.log('Longitud del arreglo '+libros.length);
console.log(`${libros[0].titulo} ${libros[0].autor} ${libros[0].paginas}`);
console.log(`${libros[1].titulo} ${libros[1].autor} ${libros[1].paginas}`);
console.log(`${libros[2].titulo} ${libros[2].autor} ${libros[2].paginas}`);
console.log(`${libros[3].titulo} ${libros[3].autor} ${libros[3].paginas}`);
let ultimosDosLibros=libros.slice(-2)
libros.shift()
console.log('Longitud del arreglo despues del shift '+libros.length);
console.log(`${libros[0].titulo} ${libros[0].autor} ${libros[0].paginas}`);
console.log(`${libros[1].titulo} ${libros[1].autor} ${libros[1].paginas}`);
console.log(`${libros[2].titulo} ${libros[2].autor} ${libros[2].paginas}`);
console.log('Suma de las paginas de todos los libros '+libros[0].paginas+libros[1].paginas+libros[2].paginas);
