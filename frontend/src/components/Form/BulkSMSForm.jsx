import React from 'react';

const BulkSMSForm = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <h1 className="text-[30px] font-Bebas">Send Bulk Message</h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col">
              <span className="pb-2">Contact List</span>
              <select className="select w-full">
                <option disabled selected>
                  Select contact list
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Country Code</span>
              <input
                type="text"
                name="country_code"
                placeholder="Recipients country code"
                className="input w-full text-black"
              />
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Message</span>
              <textarea
                className="textarea w-full text-black"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="btn">Send message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulkSMSForm;
