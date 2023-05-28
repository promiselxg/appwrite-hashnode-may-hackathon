import React, { useContext } from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import { FiSend, FiUser, FiUsers } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import FormToggleContext from '../../contexts/FormToggleContext';
import BulkModal from '../Modal';

const Nav = () => {
  const { modal, switchScreen } = useContext(FormToggleContext);
  return (
    <>
      <div className="hidden md:flex md:flex-col md:w-[17%] bg-[#011B33] text-[#ccc] font-Inter_600 relative h-screen ">
        <div className="flex flex-col justify-center items-center p-10 gap-y-5 w-full">
          <Link to="/admin">
            <h1>APPWRITE</h1>
          </Link>
          <div className="rounded-full h-[50px] w-[50px] bg-[yellow]"></div>
          <h1 className="text-sm">Anuforo Okechukwu</h1>
          <button>
            <AiOutlineLogout className="text-[30px] text-[#fff]" />
          </button>
        </div>
        <nav className="flex flex-col px-5 gap-y-4">
          <div className="collapse">
            <input type="checkbox" className="peer" />
            <div className="btn collapse-title mb-3 flex  gap-2 capitalize">
              <FiSend />
              Send Message
            </div>
            <div className="collapse-content flex flex-col gap-y-3">
              <label
                htmlFor={modal}
                onClick={() => switchScreen('direct-sms')}
                className="flex items-center gap-2 text-[#ccc] hover:text-white font-Inter_400 text-[14px] cursor-pointer"
              >
                <span>
                  <FiUser />
                </span>
                <span>Direct SMS</span>
              </label>
              <Link
                to="/admin/phone-book"
                className="flex items-center gap-2 text-[#ccc] hover:text-white font-Inter_400 text-[14px]"
              >
                <span>
                  <FiUsers />
                </span>
                <span>Group SMS</span>
              </Link>
            </div>
          </div>
        </nav>
        <div className="absolute flex gap-3 bottom-0 w-full bg-[white] p-5 h-[70px] items-center justify-between">
          <button>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress"
              alt=""
              className="object-fit w-[100px]"
            />
          </button>

          <button>
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643310978330/r3rwhcL29.png?w=200&h=200&fit=crop&crop=entropy&auto=compress,format&format=webp"
              alt=""
              className="object-fit w-[50px] h-[50px]"
            />
          </button>
        </div>
      </div>
      <BulkModal modal={modal} />
    </>
  );
};

export default Nav;
