import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const AdminPage = () => {
  return (
    <>
      <div className="flex w-full h-screen bg-[red]">
        <div className="flex w-full">
          <Nav />
          <div className="w-full md:w-[83%]  bg-[whitesmoke] h-screen overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
