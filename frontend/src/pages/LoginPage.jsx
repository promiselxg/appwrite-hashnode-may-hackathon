import React from 'react';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const LoginPage = () => {
  return (
    <>
      <div className="flex bg-[#001217] h-screen text-[#fff] items-center">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center px-[20px]">
            <div className="mb-5">
              <Link to="/" className="font-Bebas text-[40px]">
                <h1>APPWRITE</h1>
              </Link>
            </div>
            <div className="w-full rounded-[15px] md:w-[400px] bg-[#124ebb] h-fit shadow-sm">
              <div className="p-10 flex flex-col">
                <h2 className="text-[20px] font-Bebas mb-1">Sign in</h2>
                <div className="flex flex-col gap-y-3 mb-3">
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input w-full text-[#001217]"
                  />
                  <input
                    type="password"
                    placeholder="Type here"
                    className="input  w-full text-[#001217]"
                  />
                </div>
                <button className="btn my-2">Sign in</button>
                <div className="divider my-5">OR</div>
                <div className="flex gap-2 flex-col md:flex-row">
                  <button className="btn w-full md:w-1/2 bg-[#34A853] border-none flex items-center gap-2">
                    <AiFillGoogleCircle className="text-[24px]" />
                    Google
                  </button>
                  <button className="btn w-full md:w-1/2 bg-[#6e5494] border-none flex items-center gap-2">
                    <AiOutlineGithub className="text-[24px]" />
                    Github
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
