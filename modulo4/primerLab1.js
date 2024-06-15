let contacts = [{
name: "Maxwell Wright",
phone: "(0191) 719 6495",
email: "Curabitur@nonummyac.co.uk"
}, {
name: "Raja Villarreal",
phone: "0866 398 2895",
email: "posuere@sed.com"
}, {
name: "Helen Richards",
phone: "0800 1111",
email: "libero@convallis.edu"
}];


console.log(`Primer contacto ${contacts[0].name} ${contacts[0].phone} ${contacts[0].email}`);
console.log(`Ultimo contacto ${contacts[contacts.length-1].name} ${contacts[contacts.length-1].phone} ${contacts[contacts.length-1].email}`);


let nombreContacto= prompt('Ingrese el nombre del contacto')
if (nombreContacto) {
    let telefonoContacto= prompt('Ingrese el telefono del contacto')
    if (telefonoContacto) {
        let emailContacto= prompt('Ingrese el email del contacto')
        if (emailContacto) {
            alert(`Nombre: ${nombreContacto} Telefono ${telefonoContacto} Email ${emailContacto}`)
        }else{
            alert('Ingrese el telefono en el campo')
        }
    }else{
        alert('Ingrese el telefono en el campo')

    }
} else{
    alert('Ingrese un nombre en el campo')
}

console.log(nombreContacto);
console.log(telefonoContacto);
console.log(emailContacto);

// if (nombreContacto && telefonoContacto && emailContacto) {
//     alert(`Nombre : ${nombreContacto} Telefono : ${telefonoContacto} Email: ${emailContacto}`)
// } else {
//     alert('Debe llenar todos los campos')
// }
// if (!nombreContacto) {
//     alert('Debe completar el campo de nombre')
// } else if (!telefonoContacto) {
//     alert('Debe completar el campo de telefono')
// } else if (!emailContacto) {
//     alert('Debe completar el campo de email')
// } else {
//     alert(`Nombre : ${nombreContacto} Telefono : ${telefonoContacto} Email: ${emailContacto}`)
// }




