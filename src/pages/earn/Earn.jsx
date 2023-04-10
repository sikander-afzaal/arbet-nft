const Earn = () => {
  return (
    <div className="wrapper py-5 lg:py-10">
      <div className="contain flex-col items-start justify-start gap-5">
        <div>
          <h3 className="text-white text-3xl font-semibold">Earn Page</h3>
          <p className="text-white mt-1">
            Stake{" "}
            <a href="#" target="blank" className="underline">
              Arbet
            </a>{" "}
            to earn rewards.
          </p>
        </div>
        <div className="grid mt-2 sm:mt-8 items-start grid-cols-1 sm:grid-cols-2 w-full gap-5 sm:gap-10">
          <div className="flex  justify-start items-start flex-col  w-full rounded-xl overflow-hidden">
            <div className="flex justify-start items-center gap-3 px-5 py-4 bg-white w-full bg-opacity-40">
              <img src="/logo.png" className="object-contain w-[32px]" alt="" />
              <p className="text-black font-semibold uppercase">ARBET</p>
            </div>
            <div className="w-full bg-white p-5 flex justify-start items-start flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold text-black">Price</p>
                <p className="text-sm font-semibold text-black">$1.3300</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold text-black">
                  Arbet Balance
                </p>
                <p className="text-sm font-semibold text-black">35168.19</p>
              </div>
              <div className="flex justify-between items-center w-full border-b border-solid border-black pb-3">
                <p className="text-sm font-semibold text-black">
                  sArbet Balance
                </p>
                <p className="text-sm font-semibold text-black">324324</p>
              </div>
              <div className="flex justify-between items-center w-full mt-2">
                <p className="text-sm font-semibold text-black">Pending Fees</p>
                <p className="text-sm font-semibold text-black">35168.19</p>
              </div>
              <div className="flex justify-between items-center w-full border-b border-solid border-black pb-3">
                <p className="text-sm font-semibold text-black">Claimed Fees</p>
                <p className="text-sm font-semibold text-black">324324</p>
              </div>
              <div className="flex flex-wrap justify-start mt-3 pb-1 items-center gap-3">
                <button className="bg-black text-white rounded-lg px-4 py-1 text-base font-semibold">
                  Buy Arbet
                </button>
                <button className="bg-black text-white rounded-lg px-4 py-1 text-base font-semibold">
                  Stake
                </button>
                <button className="bg-black text-white rounded-lg px-4 py-1 text-base font-semibold">
                  Unstake
                </button>
                <button className="bg-black text-white rounded-lg px-4 py-1 text-base font-semibold">
                  Claim
                </button>
              </div>
            </div>
          </div>
          <div className="flex   justify-start items-start flex-col  w-full rounded-xl overflow-hidden">
            <div className="flex justify-start items-center gap-3 px-5 py-4 bg-white w-full bg-opacity-40">
              <img src="/usdt.png" className="object-contain w-[32px]" alt="" />
              <p className="text-black font-semibold uppercase">USDTVault</p>
            </div>
            <div className="w-full bg-white p-5 flex justify-start items-start flex-col gap-2">
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold text-black">USDT Balance</p>
                <p className="text-sm font-semibold text-black">$1.3300</p>
              </div>

              <div className="flex justify-between items-center w-full border-b border-solid border-black pb-3">
                <p className="text-sm font-semibold text-black">
                  Staked USDT Balance
                </p>
                <p className="text-sm font-semibold text-black">324324</p>
              </div>
              <div className="flex justify-between items-center w-full mt-2">
                <p className="text-sm font-semibold text-black">Pending Fees</p>
                <p className="text-sm font-semibold text-black">35168.19</p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-sm font-semibold text-black">Claimed Fees</p>
                <p className="text-sm font-semibold text-black">324324</p>
              </div>
              <div className="flex justify-between items-center w-full border-b border-solid border-black pb-3">
                <p className="text-sm font-semibold text-black">On Withdraw</p>
                <p className="text-sm font-semibold text-black">4 Days</p>
              </div>
              <div className="flex flex-wrap justify-start mt-3 pb-1 items-center gap-3">
                <button className="bg-black text-white rounded-lg px-4 py-1 text-base font-semibold">
                  Stake
                </button>
                <button className="bg-black text-white rounded-lg px-4 py-1 text-base font-semibold">
                  Unstake
                </button>
                <button className="bg-black text-white rounded-lg px-4 py-1 text-base font-semibold">
                  Claim
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start flex-col bg-white rounded-lg p-4">
          <p className="text-sm font-semibold text-black">
            This interface is a free interface for using the Arbet Protocol. The
            Arbet Protocol and this interface is not available to residents,
            citizens, or agents of: the United States, Iran, Cuba, North Korea,
            Syria, Myanmar (Burma), Sudan, Liberia, or the regions of Crimea,
            Donetsk, or Luhansk. By continuing to use this interface, you
            confirm that you are not a US Person or US Entity and are not
            accessing this interface from within the United States.
          </p>
          <p className="text-sm font-semibold text-black">
            This free interface is maintained by the Arbet community and does
            not receive a cut of house profits. Use this app at your own risk.
            Arbet is a decentralized protocol and the maintainers of this
            interface are not responsible for any losses or damages incurred by
            using this interface.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Earn;
