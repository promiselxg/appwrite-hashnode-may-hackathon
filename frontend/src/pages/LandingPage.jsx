import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <section className="flex flex-col w-full bg-[#001217] h-fit md:h-screen  2xl:h-[650px]">
        <div className="container mx-auto p-10  2xl:h-[650px] 2xl:w-[1400px] ">
          <div className="container  w-full flex justify-between">
            <div className="gap-2 font-Bebas text-[white] text-[30px]">
              <Link
                to="/"
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600"
              >
                sendSMS
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <Link to="/login" className="text-white font-Inter_600">
                Sign in
              </Link>
              <button className="btn bg-[#ffb33f] hidden md:flex">
                <a href="mailto:okeydeede@gmail.com">get quote</a>
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center h-[100%]  gap-4 flex-col md:flex-row pt-20 md:py-0">
            <div className="w-full md:w-2/3 md:max-w-2xl mx-auto text-center md:text-left">
              <h2 className="font-Inter_600 text-[#ffb33f] text-[14px] md:text-[16px] pb-2 md:pb-0">
                Build a better Customer Experience
              </h2>
              <h1 className="text-[30px] md:text-[50px] font-Poppins_600 leading-tight text-[rgba(255,255,255,0.8)]">
                Reach More Customers With Faster, More Reliable SMS Messaging.
              </h1>
              <div className="flex gap-5 py-10 md:py-5 flex-col md:flex-row w-full">
                <button className="btn bg-[#ffb33f]">
                  <a href="mailto:okeydeede@gmail.com">get quote</a>
                </button>
                <label
                  htmlFor="video"
                  className="flex items-center gap-2 text-[#ccc] text-[12px] font-Poppins_600 justify-center md:justify-end cursor-pointer"
                >
                  Watch product tour{' '}
                  <FiPlayCircle className="text-[40px] shadow" />
                </label>
              </div>
            </div>
            <div className="w-full md:w-1/2 hidden md:flex">
              <img
                src="./nobg.png"
                alt="img"
                className="object-cover w-full  2xl:object-fit 2xl:h-[500px] 2xl:w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-fit bg-[whitesmoke]">
        <div className="container mx-auto p-10 md:p-20  2xl:w-[1400px]">
          <div className="flex items-center flex-col text-center">
            <div className="text-center justify-center">
              <h1 className="text-[30px] font-Bebas text-[#001217] ">
                Send that Message with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600">
                  sendSMS
                </span>
              </h1>
              <p className="max-w-[320px] mx-auto text-center font-Inter_400 text-[12px]">
                Easy-to-use, all-in-one platform to start,run,grow and simplify
                your sms campaign business.
              </p>
            </div>
            <div className="flex w-full py-10">
              <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="p-10 bg-[rgba(0,0,0,0.1)] rounded-[10px] shadow-sm">
                  <h1 className="text-[15px] md:text-[20px] font-Bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600">
                    Direct Messaging
                  </h1>
                  <p className="text-[12px] md:text-[14px] font-Inter_400 py-2">
                    Send direct sms to individual numbers across any mobile
                    network.
                  </p>
                </div>
                <div className="p-10 bg-[rgba(0,0,0,0.1)] rounded-[10px] shadow-sm">
                  <h1 className="text-[15px] md:text-[20px] font-Bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600">
                    Bulk Messaging
                  </h1>
                  <p className="text-[12px] md:text-[14px] font-Inter_400 py-2">
                    Send direct sms to multiple numbers across any mobile
                    network.
                  </p>
                </div>
                <div className="p-10 bg-[rgba(0,0,0,0.1)] rounded-[10px] shadow-sm">
                  <h1 className="text-[15px] md:text-[20px] font-Bebas text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600">
                    Group Messaging
                  </h1>
                  <p className="text-[12px] md:text-[14px] font-Inter_400 py-2">
                    Send personalized sms to mulitple numbers in a particular
                    campaign group.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full py-10 justify-center">
              <h1 className="text-sm font-Poppins_400 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-yellow-600">
                Powered by
              </h1>
              <div className="flex justify-center items-center gap-5 pt-2">
                <a
                  href="https://hashnode.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1675531271955/ALEtNA1cM.png?auto=compress"
                      alt=""
                      className="object-fit w-[100px]"
                    />
                  </button>
                </a>
                <a
                  href="https://appwrite.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <img
                      src="https://cdn.hashnode.com/res/hashnode/image/upload/v1643310978330/r3rwhcL29.png?w=200&h=200&fit=crop&crop=entropy&auto=compress,format&format=webp"
                      alt=""
                      className="object-fit w-[50px] h-[50px]"
                    />
                  </button>
                </a>
                <a
                  href="https://termii.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button>
                    <img
                      src="https://termii.com/assets/images/logo.png"
                      alt=""
                      className="object-fit w-[100px] h-[30px]"
                    />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <input type="checkbox" id="video" className="modal-toggle" />
      <div className="modal bg-[rgba(0,0,0,0.75)]">
        <div className="modal-box  rounded bg-[#1c1f26] border-[rgba(255,255,255,0.2)] border-[1px] text-[#ccc]">
          <label
            htmlFor="video"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-transparent border-none text-[#d8c5c5] text-[1.3rem] hover:bg-transparent hover:text-black"
          >
            ✕
          </label>
          <div className="p-5 ">
            <video controls width="100%" autoPlay={true}>
              <source
                src="https://res.cloudinary.com/promiselxg/video/upload/v1685933230/appwrite/sendSMS_hb7ble.mp4"
                type="video/mp4"
              />
              Sorry, your browser doesnt support embedded videos.
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
