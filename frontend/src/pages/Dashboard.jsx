import React, { useContext, useEffect } from 'react';
import MobileHeader from '../components/Header';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { format } from 'date-fns';
import Balance from '../components/Balance';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { loading, data } = useFetch(`/api/v1/sms/single`);
  useEffect(() => {
    if (!user || user === null) {
      navigate('/');
    }
  }, [navigate, user]);

  return (
    <>
      <div className="container w-full">
        <MobileHeader />
        <div className="p-10 md:p-20">
          <Balance label="Hi,Welcome to your Dashboard" />
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
                    <th>country code</th>
                    <th>Receipients No.</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {loading
                    ? 'loading...'
                    : data?.response?.map((record, i) => {
                        return (
                          <tr className="border-b-[1px]" key={record.$id}>
                            <td className="w-[5%]">{i + 1}</td>
                            <td className="w-[10%]">{record.country_code}</td>
                            <td className="w-[10%] max-w-[200px] truncate">
                              {record.phone_number}
                            </td>
                            <td className="w-[10%]">
                              {format(
                                new Date(record.$createdAt),
                                'dd MMMM, yyyy'
                              )}
                            </td>
                            <td className="text-[green] font-Inter_600 text-sm w-[10%]">
                              Success
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
    </>
  );
};

export default Dashboard;
