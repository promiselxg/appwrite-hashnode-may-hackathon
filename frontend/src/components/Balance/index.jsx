/* eslint-disable react/prop-types */
import React from 'react';
import Loading from '../Loading';
import useFetch from '../../hooks/useFetch';

const Balance = ({ label }) => {
  const { loading, data } = useFetch(`/api/v1/sms/balance`);
  return (
    <>
      <div className="flex flex-col mb-5">
        <h1 className="text-sm font-Inter_400">{label}</h1>
        <h1 className="text-[40px] font-Bebas">
          {loading ? (
            <Loading />
          ) : (
            <>
              {data?.response?.currency}
              {data?.response?.balance}
            </>
          )}
        </h1>
      </div>
    </>
  );
};

export default Balance;
