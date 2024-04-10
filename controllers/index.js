import { agenda } from './dependencies.js';

document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('guardarBtn');
    const showButton = document.getElementById('mostrarBtn');

    addButton.addEventListener('click', addContact);
    showButton.addEventListener('click', showContacts);
});

function addContact() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;

    const contact = { nombre, apellido, telefono, email };
    agenda.addContact(contact);

    alert('Contacto agregado con éxito!');
    clearForm();
}

// function showContacts() {
//     if (agenda.contacts.isEmpty()) {
//         console.log("No hay contactos para mostrar");
//     } else {
//         console.clear(); // Limpia la consola antes de mostrar los contactos actuales
//         let currentContact = agenda.contacts.front;
//         while (currentContact) {
//             console.log(currentContact.data);
//             currentContact = currentContact.next;
//         }
//     }
// }

function showContacts() {
    const listaContactos = document.getElementById('listaContactos');
    listaContactos.innerHTML = ''; // Limpia la lista antes de mostrar los contactos

    if (agenda.contacts.isEmpty()) {
        listaContactos.textContent = "No hay contactos para mostrar";
    } else {
        let currentContact = agenda.contacts.front;
        while (currentContact) {
            const contactNode = document.createElement('div');
            contactNode.classList.add('contacto');

            const nombreNode = document.createElement('p');
            nombreNode.textContent = "Nombre: " + currentContact.data.nombre;

            const apellidoNode = document.createElement('p');
            apellidoNode.textContent = "Apellido: " + currentContact.data.apellido;

            const telefonoNode = document.createElement('p');
            telefonoNode.textContent = "Teléfono: " + currentContact.data.telefono;

            const emailNode = document.createElement('p');
            emailNode.textContent = "Email: " + currentContact.data.email;

            const espacio = document.createElement('br')
            espacio.textContent = " ";

            contactNode.appendChild(nombreNode);
            contactNode.appendChild(apellidoNode);
            contactNode.appendChild(telefonoNode);
            contactNode.appendChild(emailNode);
            contactNode.appendChild(espacio)

            listaContactos.appendChild(contactNode);
            currentContact = currentContact.next;
        }
    }
}


function clearForm() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';
}