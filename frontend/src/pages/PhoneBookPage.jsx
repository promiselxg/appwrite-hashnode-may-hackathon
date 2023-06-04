import React, { useContext, useEffect } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import FormToggleContext from '../contexts/FormToggleContext';
import BulkModal from '../components/Modal';
import MobileHeader from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const PhoneBookPage = () => {
  const { modal, switchScreen } = useContext(FormToggleContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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
          <div className="flex flex-col mb-5">
            <h1 className="text-sm font-Inter_400">
              Hi,Anuforo! Welcome to your phonebook
            </h1>
            <h1 className="text-[40px] font-Bebas">N2792.7</h1>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-start md:items-center border-b-[1px] pb-8 flex-col md:flex-row w-full">
              <span className="w-full">
                <h2 className="text-sm font-Inter_400 mb-3 md:mb-0">
                  Campaign Statistics
                </h2>
              </span>
              <div className="gap-5 flex w-full md:w-1/2">
                <label
                  className="btn text-[11px] capitalize px-4 py-[0px] m-0 w-1/2"
                  htmlFor={modal}
                  onClick={() => switchScreen('bulk-sms')}
                >
                  Send a campaign
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
                    <th></th>
                    <th>Group Name</th>
                    <th>Number of Contacts</th>
                    <th>Messages sent</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Littel, Schaden and Vandervort</td>
                    <td>
                      <FiMoreVertical />
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <th></th>
                    <th>Group Name</th>
                    <th>Number of Contacts</th>
                    <th>Messages sent</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
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
