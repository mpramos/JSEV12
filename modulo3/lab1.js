let contacts = [
    {
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "egestas@nonummyac.co.uk"
    },
    {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere@sed.com"
    },
    {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@vallis.edu"
    }
];
    // escribe tu código aquí
    let nameNewContact=prompt('Ingrese el nombre del nuevo contacto')
    alert(nameNewContact)
    let phoneNewContact=prompt('Ingrese el telefono del nuevo contacto')
    alert(phoneNewContact)
    let emailNewContact=prompt('Ingrese el email del nuevo contacto')
    alert(emailNewContact)
    let newContact={
        name: nameNewContact,
        phone: phoneNewContact,
        email: emailNewContact
    }
    contacts.push(newContact)
    let last = contacts.length - 1;
    alert(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    alert(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);