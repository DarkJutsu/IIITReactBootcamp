import PropType from "prop-types";
import { BsToggleOff, BsToggleOn } from "react-icons/bs";
import { MdDeleteForever } from 'react-icons/md';
import { Contacts } from "../models/contacts.class";

export const Contact = ({ contact, stateVerif, remove }) => {
  return (
    <div className="text-2xl bg-sky-100 p-4 rounded-md">
      {contact.state ? (
        <>
          <h1 className="text-slate-800 font-medium">{contact.name}</h1>
          <h3 className="text-slate-600 pl-2 pb-2">Mail: {contact.mail}</h3>
          <h3 className="text-slate-600 pl-2 pb-2">Phone: {contact.phone}</h3>
        </>
      ) : (
        <>
          <h1 className="text-slate-800 line-through">{contact.name}</h1>
          <h3 className="text-slate-600 pl-2 pb-2 line-through">Mail: {contact.mail}</h3>
          <h3 className="text-slate-600 pl-2 pb-2 line-through">Phone: {contact.phone}</h3>
        </>
      )}
      <h1 className="text-slate-600 py-2 flex gap-2">
        State:
        {contact.state ? (
          <BsToggleOn
            onClick={() => stateVerif(contact)}
            className="text-green-300 text-4xl cursor-pointer"
          />
        ) : (
          <BsToggleOff
            onClick={() => stateVerif(contact)}
            className="text-slate-500 text-4xl cursor-pointer"
          />
        )}
      </h1>
      <div className='mt-3'>
				<MdDeleteForever
					onClick={() => remove(contact)}
					className='text-red-400 text-3xl cursor-pointer'
				/>
			</div>
    </div>
  );
};
Contact.propType = {
  contact: PropType.instanceOf(Contacts).isRequired,
};
