const Roulette = () => {
  return (
    <div className="wrapper pt-5 lg:pt-16 pb-8 ">
      <div className="contain justify-center items-center">
        <div className="grid w-full grid-cols-[350px__1fr] gap-5 bg-white rounded-xl overflow-hidden">
          <div className="flex justify-start items-center flex-col bg-gray-400 w-full px-5 py-8">
            <p className="text-white text-opacity-70 text-sm font-medium bg-black rounded-md p-2">
              House Edge:{" "}
              <span className=" text-opacity-100 text-white font-semibold text-sm">
                2.70%
              </span>
            </p>
            <div className="flex justify-start items-start flex-col mt-5  w-full">
              <p className="text-white font-semibold text-sm">Total Bet</p>
              <div className="bg-black border-white border-solid border rounded-lg py-2 px-3 flex justify-between items-center w-full">
                <p className="text-white text-lg font-semibold">0.03</p>
                <img src="/usdt.png" className="w-4 object-contain" alt="" />
              </div>
            </div>
            <div className=" flex justify-between mt-4 items-center w-full">
              <p className="text-black  font-semibold ">Balance</p>
              <div className="flex justify-start items-center gap-1">
                <p className="text-black  font-semibold ">0.00000</p>
                <img src="/usdt.png" className="w-4 object-contain" alt="" />
              </div>
            </div>
            <div className=" flex justify-between items-center w-full">
              <p className="text-black  font-semibold ">Max Bet</p>
              <div className="flex justify-start items-center gap-1">
                <p className="text-black  font-semibold ">516.9999</p>
                <img src="/usdt.png" className="w-4 object-contain" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
