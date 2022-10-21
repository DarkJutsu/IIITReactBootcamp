import PropTypes from "prop-types";
import { useRef } from "react";
import { Contacts } from "../models/contacts.class";

export const ContactForm = ({ add }) => {
  const nameRef = useRef("");
  const mailRef = useRef("");
  const phoneRef = useRef("");

  function addContact(e) {
    e.preventDefault();
    const newContact = new Contacts(
      nameRef.current.value,
      mailRef.current.value,
      phoneRef.current.value,
      true
    );

    add(newContact);
  }

  return (
    <div>
      <form onSubmit={addContact} className="mt-3 p-3">
        <div className="grid grid-cols-3">
          <div>
            <label className="text-zinc-700">Name Contact</label>
            <input
              ref={nameRef}
              id="inpName"
              type="text"
              required
              autoFocus
              className="mt-0 block w-96 px-2 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800"
            />
          </div>

          <div>
            <label className="text-zinc-700">Mail</label>
            <input
              ref={mailRef}
              id="inpName"
              type="email"
              required
              className="mt-0 block w-96 px-2 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800"
            />
          </div>
        </div>
        <div className="mt-8">
          <label className="text-zinc-700">Phone</label>
          <input
            ref={phoneRef}
            id="inpName"
            type="tel"
            required
            className="mt-0 block w-96 px-2 border-b-2 border-t-0 border-x-0 border-zinc-400 focus:ring-0 focus:border-zinc-800"
          />
        </div>
        <button
          type="submit"
          className="bg-zinc-500 text-lime-100 mt-5 py-2 px-3 rounded-md hover:shadow-xl hover:bg-zinc-600"
        >
          Add
        </button>
      </form>
    </div>
  );
};
ContactForm.propType = {
  add: PropTypes.func.isRequired,
};
