import React, { useContext } from 'react';
import FormToggleContext from '../../contexts/FormToggleContext';
import SMSForm from '../Form/SMSForm';
import ContactForm from '../Form/ContactForm';
import BulkSMSForm from '../Form/BulkSMSForm';

const BulkModal = () => {
  const { modal } = useContext(FormToggleContext);
  let wrapper = '';
  if (modal === 'bulk-sms') {
    wrapper = <BulkSMSForm />;
  } else if (modal === 'upload-contact') {
    wrapper = <ContactForm />;
  } else {
    wrapper = <SMSForm />;
  }
  return (
    <>
      <input type="checkbox" id={modal} className="modal-toggle" />
      <div className="modal bg-[rgba(0,0,0,0.75)]">
        <div className="modal-box w-[95%] md:w-2/6 rounded bg-[#1c1f26] border-[rgba(255,255,255,0.2)] border-[1px] text-[#ccc]">
          <label
            htmlFor={modal}
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-[#d8c5c5] text-[1.3rem] hover:bg-transparent hover:text-black"
          >
            ✕
          </label>
          <div className="p-5 max-h-[500px]">{wrapper}</div>
        </div>
      </div>
    </>
  );
};

export default BulkModal;
