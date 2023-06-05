import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [files, setFiles] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!files || !name) {
      Swal.fire({
        title: 'Empty Fields',
        text: 'Please fill out the form.',
        icon: 'error',
      });
      setLoading(false);
    }
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append('files', files);
      formData.append('group_name', name);
      await axios.post(
        `https://appwrite.braga.com.ng/api/v1/sms/bulk/contact`,
        formData
      );
      Swal.fire({
        title: 'Created Successfully.',
        text: 'New Contact List Created Successfully',
        icon: 'success',
      }).then((r) => {
        if (r.isConfirmed) {
          window.location = window.location;
        }
      });
    } catch (error) {
      Swal.fire({
        title: 'Error occured',
        text: error,
        icon: 'error',
      });
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <h1 className="text-[30px] font-Bebas">New Contact List</h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col">
              <span className="pb-2">Group Name</span>
              <input
                type="text"
                name="country_code"
                placeholder="Recipients country code"
                className="input w-full text-black"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Phone Number(.csv file)</span>
              <input
                type="file"
                name="files"
                className="file-input file-input-bordered w-full"
                accept="text/csv"
                onChange={(e) => setFiles(e.target.files[0])}
              />
            </div>

            <button className="btn" onClick={handleSubmit} disabled={loading}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
