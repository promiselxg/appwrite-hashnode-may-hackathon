const Loading = () => {
  return (
    <>
      <div className="rounded-md w-full">
        <div className="animate-pulse flex space-x-4">
          <div className="flex-1 space-y-6 py-1">
            <div className="h-2 bg-slate-300 rounded"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loading;
