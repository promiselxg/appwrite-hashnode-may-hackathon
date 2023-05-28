import React from 'react';

const ContactForm = () => {
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
              />
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Phone Number(.csv file)</span>
              <input
                type="file"
                className="file-input file-input-bordered w-full"
                accept=".csv"
              />
            </div>

            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
