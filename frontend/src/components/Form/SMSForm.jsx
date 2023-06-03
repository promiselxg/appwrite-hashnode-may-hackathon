import React, { useState } from 'react';
import axios from 'axios';
import {
  alphaNumericAndSpecialChars,
  numberWithComma,
  numbersOnly,
} from '../../utils/restrict';
import Swal from 'sweetalert2';

const SMSForm = () => {
  const [loading, setLoading] = useState(false);
  const [inputFields, setInputFields] = useState({
    country_code: '',
    phone_number: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      if (
        !inputFields.phone_number ||
        !inputFields.country_code ||
        !inputFields.message
      ) {
        Swal.fire({
          title: 'Required Fields',
          text: `Please fill out the form`,
          icon: 'error',
        });
        setLoading(false);
      } else {
        let phone = inputFields.phone_number.at(-1);
        if (isNaN(phone)) {
          inputFields.phone_number = inputFields.phone_number.slice(0, -1);
        }
        setLoading(false);
        const response = await axios.post(
          'http://localhost:8081/api/v1/sms/single',
          inputFields
        );
        if (response) {
          Swal.fire({
            title: 'Sent Successfully.',
            text: 'SMS sent successfully',
            icon: 'success',
          }).then((r) => {
            if (r.isConfirmed) {
              window.location = window.location;
            }
          });
          setLoading(false);
        }
      }
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
          <h1 className="text-[30px] font-Bebas">Direct Message</h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col">
              <span className="pb-2">Recipient{`'s`} country code</span>
              <input
                type="text"
                name="country_code"
                id="country_code"
                placeholder="Recipient  country code"
                className="input w-full text-black"
                maxLength={4}
                onChange={(e) =>
                  setInputFields({
                    ...inputFields,
                    country_code: e.target.value,
                  })
                }
                value={inputFields.country_code}
                onKeyUp={(e) =>
                  setInputFields({
                    ...inputFields,
                    country_code: numbersOnly(e),
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <span className="pb-2 flex flex-col">
                Phone Number{' '}
                <span className="text-[10px] ">
                  (Seperate the numbers using a comma eg.
                  07015564131,08059403111)
                </span>
              </span>
              <textarea
                className="textarea w-full text-black"
                name="phone_number"
                placeholder="Seperate the numbers using a comma eg. 07015564131,08059403111"
                onChange={(e) =>
                  setInputFields({
                    ...inputFields,
                    phone_number: e.target.value,
                  })
                }
                value={inputFields.phone_number}
                onKeyUp={(e) =>
                  setInputFields({
                    ...inputFields,
                    phone_number: numberWithComma(e),
                  })
                }
              ></textarea>
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Message</span>
              <textarea
                className="textarea w-full text-black"
                placeholder="Message"
                name="message"
                onChange={(e) =>
                  setInputFields({
                    ...inputFields,
                    message: e.target.value,
                  })
                }
                value={inputFields.message}
                onKeyUp={(e) =>
                  setInputFields({
                    ...inputFields,
                    message: alphaNumericAndSpecialChars(e),
                  })
                }
              ></textarea>
            </div>
            <button
              className="btn disabled:cursor-not-allowed"
              onClick={handleSubmit}
              disabled={loading}
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SMSForm;
