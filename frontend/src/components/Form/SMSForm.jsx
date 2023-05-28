import React from 'react';

const SMSForm = () => {
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <h1 className="text-[30px] font-Bebas">Direct Message</h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col">
              <span className="pb-2">Recipients country code</span>
              <input
                type="text"
                name="country_code"
                placeholder="Recipients country code"
                className="input w-full text-black"
              />
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Phone Number</span>
              <textarea
                className="textarea w-full text-black"
                placeholder="Seperate the numbers using a comma eg. 07015564131,08059403111"
              ></textarea>
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

export default SMSForm;
