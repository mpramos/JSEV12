let contacts = [
    {
        name: "Maxwell Wright",
        phone: "(0191) 719 6495",
        email: "Curabitur@nonummyac.co.uk"
    },
    {
        name: "Raja Villarreal",
        phone: "0866 398 2895",
        email: "posuere@sed.com"
    },
    {
        name: "Helen Richards",
        phone: "0800 1111",
        email: "libero@convallis.edu"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    const contactList = document.getElementById('contact-list');
    const showFirstBtn = document.getElementById('show-first');
    const showLastBtn = document.getElementById('show-last');
    const newContactForm = document.getElementById('new-contact-form');
    
    function displayContact(contact) {
        contactList.innerHTML = `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
            </tr>
        `;
    }

    showFirstBtn.addEventListener('click', function () {
        if (contacts.length > 0) {
            displayContact(contacts[0]);
        }
    });

    showLastBtn.addEventListener('click', function () {
        if (contacts.length > 0) {
            displayContact(contacts[contacts.length - 1]);
        }
    });

    newContactForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;

        if (name && phone && email) {
            contacts.push({ name, phone, email });
            alert('Contacto añadido con éxito!');
        } else {
            alert('Por favor, complete todos los campos antes de añadir un contacto.');
        }

        newContactForm.reset();
    });
});
