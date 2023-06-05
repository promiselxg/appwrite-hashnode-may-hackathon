import React, { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { alphaNumericAndSpecialChars, numbersOnly } from '../../utils/restrict';
import Swal from 'sweetalert2';

const BulkSMSForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [inputFields, setInputFields] = useState({
    group_name: '',
    country_code: '',
    message: '',
  });
  const { data, loading } = useFetch(`/api/v1/sms/group`);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !inputFields.country_code ||
      !inputFields.group_name ||
      !inputFields.message
    ) {
      return false;
    } else {
      try {
        setIsLoading(true);
        const response = await axios.post(
          'http://localhost:8081/api/v1/sms/bulk',
          inputFields
        );
        if (response) {
          Swal.fire({
            title: 'Message Sent Successfully.',
            text: `SMS successfully sent to user's in the selected contact list`,
            icon: 'success',
          }).then((r) => {
            if (r.isConfirmed) {
              window.location = window.location;
            }
          });
        }
      } catch (error) {
        Swal.fire({
          title: 'Error occured',
          text: error,
          icon: 'error',
        });
        setIsLoading(false);
      }
    }
  };
  return (
    <>
      <div className="w-full">
        <div className="flex flex-col">
          <h1 className="text-[30px] font-Bebas">Send Bulk Message</h1>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col">
              <span className="pb-2">Contact List</span>
              <select
                className="select w-full uppercase"
                value={`${inputFields.group_name}`}
                disabled={loading}
                name="group_name"
                onChange={(e) =>
                  setInputFields({
                    ...inputFields,
                    group_name: e.target.value,
                  })
                }
              >
                <option value="">Select contact list</option>

                {!loading &&
                  data?.response?.map((group, i) => (
                    <option
                      value={group?.$id}
                      key={i}
                      className="p-2 text-black"
                    >
                      {group?.group_name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Country Code</span>
              <input
                type="text"
                name="country_code"
                placeholder="Recipients country code"
                className="input w-full text-black"
                maxLength={4}
                value={inputFields.country_code}
                onKeyUp={(e) =>
                  setInputFields({
                    ...inputFields,
                    country_code: numbersOnly(e),
                  })
                }
                onChange={(e) =>
                  setInputFields({
                    ...inputFields,
                    country_code: e.target.value,
                  })
                }
              />
            </div>
            <div className="flex flex-col">
              <span className="pb-2">Message</span>
              <textarea
                className="textarea w-full text-black"
                placeholder="Message"
                name="message"
                value={inputFields.message}
                onKeyUp={(e) =>
                  setInputFields({
                    ...inputFields,
                    message: alphaNumericAndSpecialChars(e),
                  })
                }
                onChange={(e) =>
                  setInputFields({
                    ...inputFields,
                    message: e.target.value,
                  })
                }
              ></textarea>
            </div>
            <button className="btn" onClick={handleSubmit} disabled={isLoading}>
              Send message
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BulkSMSForm;
