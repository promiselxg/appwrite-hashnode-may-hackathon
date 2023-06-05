import React, { useContext, useEffect } from 'react';
import FormToggleContext from '../contexts/FormToggleContext';
import BulkModal from '../components/Modal';
import MobileHeader from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import Balance from '../components/Balance';
import useFetch from '../hooks/useFetch';
import { format } from 'date-fns';

const PhoneBookPage = () => {
  const { modal, switchScreen } = useContext(FormToggleContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { loading, data } = useFetch('/api/v1/sms/group/stats');

  useEffect(() => {
    if (!user || user === null) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <>
      <div className="">
        <MobileHeader />
        <div className="p-10 md:p-20 w-full">
          <Balance label="Hi,Welcome to your phonebook" />
          <div className="w-full">
            <div className="flex justify-between items-start md:items-center border-b-[1px] pb-8 flex-col md:flex-row w-full">
              <span className="w-full">
                <h2 className="text-[20px] font-Inter_400 mb-3 md:mb-0">
                  Statistics
                </h2>
              </span>
              <div className="gap-5 flex w-full md:w-1/2">
                <label
                  className="btn text-[11px] capitalize px-4 py-[0px] m-0 w-1/2"
                  htmlFor={modal}
                  onClick={() => switchScreen('bulk-sms')}
                >
                  Send to a group
                </label>
                <label
                  className="btn text-[12px] capitalize p-2 w-1/2"
                  htmlFor={modal}
                  onClick={() => switchScreen('upload-contact')}
                >
                  Add New Contact
                </label>
              </div>
            </div>
            <div className="overflow-x-auto bg-white p-5 shadow-md rounded-[10px] mt-5">
              <table className="table  w-full">
                <thead>
                  <tr>
                    <th>Group Name</th>
                    <th>Number of Contacts</th>
                    <th>Messages sent</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading
                    ? 'loading...'
                    : data?.documents?.map((doc) => {
                        return (
                          <tr key={doc.$id}>
                            <td className="font-Poppins_600">
                              {doc?.group_name}
                            </td>
                            <td className="text-[18px] font-Bebas">
                              {
                                doc?.phone_numbers?.toString()?.split(',')
                                  ?.length
                              }
                            </td>
                            <td>
                              {format(
                                new Date(doc?.$createdAt),
                                'dd MMMM, yyyy'
                              )}
                            </td>
                            <td className="text-sm text-[green] font-Inter_400">
                              Active
                            </td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <BulkModal modal={modal} />
    </>
  );
};

export default PhoneBookPage;
