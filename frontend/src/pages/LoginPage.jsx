import React, { useContext, useEffect, useState } from 'react';
import { AiFillGoogleCircle, AiOutlineGithub } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2';
import { account } from '../config/appwrite.config';

const LoginPage = () => {
  const { loading, user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      if (!userData.email || !userData.password) {
        Swal.fire({
          title: 'Login Failed',
          text: `Invalid email or Password`,
          icon: 'error',
        });
        dispatch({ type: 'LOGIN_FAILURE' });
      } else {
        const response = await account.createEmailSession(
          userData.email,
          userData.password
        );

        dispatch({ type: 'LOGIN_SUCCESS', payload: response.userId });
        navigate('/admin');
      }
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err });
      console.log(err);
      Swal.fire({
        title: 'Login Failed',
        text: `${err}`,
        icon: 'error',
      });
    }
  };

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    try {
      await account.createOAuth2Session(
        'google',
        'https://sendsms.netlify.app/login', //success
        'https://sendsms.netlify.app/login' //failure
      );
    } catch (error) {
      throw error;
    }
  };

  const loginWithGithub = async (e) => {
    e.preventDefault();
    try {
      await account.createOAuth2Session(
        'github',
        'https://sendsms.netlify.app/login', //success
        'https://sendsms.netlify.app/login' //failure
      );
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [navigate, user]);

  useEffect(() => {
    const getSession = async () => {
      try {
        if (account) {
          const response = await account.getSession('current');
          const userInfo = {
            userid: response.userId,
            token: response.providerAccessToken,
          };
          dispatch({ type: 'LOGIN_SUCCESS', payload: userInfo });
          navigate('/admin');
        }
      } catch (error) {
        return;
      }
    };
    getSession();
  }, [dispatch, navigate]);

  return (
    <>
      <div className="flex bg-[#001217] h-screen text-[#fff] items-center">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-center px-[20px]">
            <div className="mb-5">
              <Link to="/" className="font-Bebas text-[40px] ">
                <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-yellow-600">
                  sendSMS
                </h1>
              </Link>
            </div>
            <div className="w-full rounded-[15px] md:w-[400px] bg-[#124ebb] h-fit shadow-sm">
              <div className="p-10 flex flex-col">
                <div className="flex flex-col gap-y-3 mb-3">
                  <span className="text-[12px] text-[rgba(255,255,255,0.7)]">
                    Email Address
                  </span>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    className="input w-full text-[#001217]"
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        email: e.target.value,
                      })
                    }
                  />
                  <span className="text-[12px] text-[rgba(255,255,255,0.7)]">
                    Email Address
                  </span>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input  w-full text-[#001217]"
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({
                        ...userData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  className="btn my-2"
                  onClick={handleLogin}
                  disabled={loading}
                >
                  {loading ? 'Please wait...' : 'Sign in'}
                </button>
                <div className="divider my-5">OR</div>
                <div className="flex gap-2 flex-col md:flex-row">
                  <button
                    className="btn w-full md:w-1/2 bg-[#34A853] border-none flex items-center gap-2 hover:bg-[#34A853] hover:text-black"
                    onClick={loginWithGoogle}
                  >
                    <AiFillGoogleCircle className="text-[24px]" />
                    Google
                  </button>
                  <button
                    className="btn w-full md:w-1/2 bg-[#6e5494] border-none flex items-center gap-2"
                    onClick={loginWithGithub}
                  >
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
