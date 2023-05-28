import React from 'react';
import MobileHeader from '../components/Header';

const Dashboard = () => {
  return (
    <>
      <div className="container w-full">
        <MobileHeader />
        <div className="p-10 md:p-20">
          <div className="flex flex-col mb-5">
            <h1 className="text-sm font-Inter_400">
              Hi,Anuforo! Welcome to your Dashboard
            </h1>
            <h1 className="text-[40px] font-Bebas">N2792.7</h1>
          </div>
          <div className="flex flex-col p-10 bg-white shadow-sm  rounded-md">
            <div className="mb-5">
              <h1 className="text-sm font-Inter_600">Transaction History</h1>
            </div>
            <div className="overflow-x-auto">
              <table className="table w-full">
                {/* head*/}
                <thead>
                  <tr>
                    <th></th>
                    <th>Transaction ID</th>
                    <th>Transaction Date</th>
                    <th>Receipients No.</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr className="border-b-[1px]">
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>2347015564131</td>
                    <td>Blue</td>
                    <td>Success</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
