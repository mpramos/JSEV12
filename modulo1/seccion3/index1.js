console.log('hola desde mi otro script')
function hazmeClick() {
   alert('Me hiciste click')
}

let button= document.getElementById('buttonSecond')
button.addEventListener('click',()=>alert('hola soy el segundo boton'))