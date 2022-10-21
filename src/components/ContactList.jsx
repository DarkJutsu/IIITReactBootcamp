import { useState } from "react";
import { Contacts } from "../models/contacts.class";
import { Contact } from "./Contact";
import { ContactForm } from "./ContactForm";

export const ContactList = () => {
  const newContact = new Contacts(
    "Samuel Ulloa",
    "samllo95@hotmail.com",
    "+50379085721",
    true
  );

  const [contacts, setContacts] = useState([newContact]);

  function stateContact(contact) {
    const i = contacts.indexOf(contact);
    const tempContact = [...contacts];

    tempContact[i].state = !tempContact[i].state;
    setContacts(tempContact);
  }

  function addContact(contact) {
    const i = contacts.indexOf(contact);
    const tempContact = [...contacts];

    tempContact.push(contact);
    setContacts(tempContact);
  }

  function deleteContact(contact) {
    const i = contacts.indexOf(contact);
    const tempContact = [...contacts];

    tempContact.splice(i, 1);
    setContacts(tempContact);
  }

  return (
    <>
      <ContactForm add={addContact} />
      {contacts.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 pt-4">
          {contacts.map((cnt, i) => {
            return (
              <Contact
                key={i}
                contact={cnt}
                stateVerif={stateContact}
                remove={deleteContact}
              />
            );
          })}
        </div>
      ) : (
        <h1 className="text-center text-3xl text-red-400">
          No hay contactos registrados...
        </h1>
      )}
    </>
  );
};
