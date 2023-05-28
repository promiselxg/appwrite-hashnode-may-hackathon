import React, { useContext } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { FiChevronDown, FiUser, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import FormToggleContext from '../../contexts/FormToggleContext';

const MobileHeader = () => {
  const { modal, switchScreen } = useContext(FormToggleContext);
  return (
    <>
      <div className="md:hidden w-full bg-[#011B33] h-[80px] flex justify-between items-center px-10 shadow-md text-white mb-5 ">
        <div>
          <Link to="/admin">
            <h1 className="text-[30px] font-Bebas">Appwrite</h1>
          </Link>
        </div>
        <div>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className=" m-1 flex items-center gap-2 cursor-pointer"
            >
              Quick Menu <FiChevronDown />
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-[#011B33] rounded-box w-52"
            >
              <li>
                <label
                  htmlFor={modal}
                  onClick={() => switchScreen('direct-sms')}
                >
                  <FiUser /> Direct SMS
                </label>
              </li>
              <li>
                <Link to="/admin/phone-book">
                  <FiUsers />
                  Group SMS
                </Link>
              </li>
              <li>
                <Link to="/">
                  <AiOutlineLogout />
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
