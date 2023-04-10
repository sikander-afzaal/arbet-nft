import { useRef, useState } from "react";
import useOutsideClick from "../../hooks/useOutsideClick";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Dice = () => {
  const dropRef = useRef();
  const [dropDown, setDropDown] = useState({
    toggle: false,
    details: {
      name: "ETH",
      ico: "/eth.png",
    },
  });
  useOutsideClick(dropRef, () =>
    setDropDown((prev) => ({ toggle: false, ...prev }))
  );
  const marks = {
    4: 4,
    25: "25",
    50: "50",
    75: "75",
    99: "99",
  };
  const [sliderVal, setSliderVal] = useState(false);
  return (
    <div className="wrapper pt-5 lg:pt-16 pb-8 ">
      <div className="contain flex-col justify-start gap-5 items-center">
        <h2 className="text-white text-6xl sm:text-8xl font-semibold">
          23.94x
        </h2>
        <div className="w-full mb-5 max-w-[800px]  px-10 py-5 bg-secondary rounded-xl">
          <Slider
            min={0}
            max={100}
            marks={marks}
            trackStyle={{
              background: "white",
              height: "20px",
              top: 0,
            }}
            value={sliderVal}
            onChange={(val) => setSliderVal(val)}
            draggableTrack
          />
        </div>
        <div className="sm:flex-row flex-col px-5 sm:px-14 sm:py-0 py-5 rounded-2xl bg-secondary sm:h-[80px] w-full max-w-[800px] flex justify-center items-center sm:gap-0 gap-5">
          <p className="text-white border-none sm:border-r-2 h-full flex items-center sm:border-solid border-white px-4 text-2xl sm:text-lg font-medium">
            BET
          </p>
          <div className="flex justify-between items-center px-4 w-full h-full">
            <input
              type="text"
              placeholder="0.00"
              className="bg-transparent placeholder:text-white text-white font-semibold text-base border-none outline-none"
            />
            <button className="text-white font-medium bg-gray bg-opacity-20 rounded-lg px-4 py-1">
              Max
            </button>
          </div>
          <div className="px-4 border-none sm:border-l-2 h-full flex justify-start items-center border-white sm:border-solid">
            <div
              ref={dropRef}
              className="flex justify-center h-max items-center relative"
            >
              <button
                onClick={() =>
                  setDropDown((prev) => ({ ...prev, toggle: !prev.toggle }))
                }
                className="px-3 w-[128px] bg-gray bg-opacity-20 py-1  flex justify-between h-[40px] items-center gap-3 rounded-lg"
              >
                <div className="flex justify-start items-center gap-2">
                  <img
                    src={dropDown.details.ico}
                    className="object-contain w-5"
                    alt=""
                  />
                  <p className="text-white text-sm font-semibold">
                    {dropDown.details.name}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {dropDown.toggle && (
                <div className="absolute bg-secondary rounded-lg top-[110%] left-0 w-full flex justify-start items-center flex-col z-10 overflow-hidden border border-solid border-gray">
                  <button
                    onClick={() => {
                      setDropDown({
                        toggle: false,
                        details: {
                          name: "USDT",
                          ico: "usdt.png",
                        },
                      });
                    }}
                    className="w-full h-[38px] flex justify-between items-center px-3 hover:bg-white hover:text-black transition-all duration-300 text-white text-sm font-medium"
                  >
                    USDT
                  </button>
                  <button
                    onClick={() => {
                      setDropDown({
                        toggle: false,
                        details: {
                          name: "CARB",
                          ico: "logo.png",
                        },
                      });
                    }}
                    className="w-full h-[38px] flex justify-between items-center px-3 hover:bg-white hover:text-black transition-all duration-300 text-white text-sm font-medium"
                  >
                    CARB
                  </button>
                  <button
                    onClick={() => {
                      setDropDown({
                        toggle: false,
                        details: {
                          name: "ETH",
                          ico: "eth.png",
                        },
                      });
                    }}
                    className="w-full h-[38px] flex justify-between items-center px-3 hover:bg-white hover:text-black transition-all duration-300 text-white text-sm font-medium"
                  >
                    ETH
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center flex-col gap-1 w-full ">
          <div className="sm:flex-row flex-col flex justify-between items-start sm:items-center w-full gap-2 max-w-[800px]">
            <p className="text-white text-sm font-semibold">
              50% win chance 3.5% house edge
            </p>
            <p className="text-white text-sm font-semibold">
              Target payout: -0 CARB
            </p>
          </div>
          <div className="sm:flex-row flex-col flex justify-between items-start sm:items-center w-full gap-2 max-w-[800px]">
            <p className="text-white text-sm font-semibold">
              Bank: 880, 788, 4194 CARB
            </p>
            <p className="text-white text-sm font-semibold">
              Min bet amount: 200 CARB
            </p>
          </div>
          <div className="sm:flex-row flex-col flex justify-between items-start sm:items-center w-full gap-2 max-w-[800px]">
            <p className="text-white text-sm font-semibold"></p>
            <p className="text-white text-sm font-semibold">
              Max payout: 17.615.7684 CARB
            </p>
          </div>
        </div>
        <button className="bg-white border-2 border-white border-solid text-black text-xl sm:text-3xl font-semibold w-full sm:h-[80px] h-[55px] rounded-xl leading-[1] mt-5 max-w-[500px] sm:max-w-[800px] hover:bg-transparent hover:text-white transition-all duration-500">
          Connect Your Wallet
        </button>
      </div>
      <div className="w-full mt-10 sm:mt-20  bg-secondary  overflow-x-auto px-5 py-3">
        <div className="border-b min-w-[1000px] border-solid border-black grid grid-cols-[1fr__1fr__150px__2fr__150px] py-5 w-full gap-3">
          <div className="flex justify-start items-center gap-3">
            <button className="text-white font-semibold text-base">All</button>
            <button className="text-white opacity-40 font-semibold text-base">
              My bets
            </button>
          </div>
          <p className="text-white font-semibold text-base">Player</p>
          <p className="text-white font-semibold text-base">Target</p>
          <p className="text-white font-semibold text-base">Profit</p>
          <p className="text-white font-semibold text-base text-right">Time</p>
        </div>
        <DiceRow />
        <DiceRow />
        <DiceRow />
      </div>
      <div className="flex bg-secondary py-3 px-5 justify-between items-center w-full ">
        <div className="w-full flex justify-center items-center gap-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <p className="text-white text-base font-medium">1 of 2000</p>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
        <select className=" bg-gray bg-opacity-20 text-white rounded w-[60px]">
          <option className="text-black" value="1">
            1
          </option>
          <option className="text-black" value="2">
            2
          </option>
          <option className="text-black" value="3">
            3
          </option>
          <option className="text-black" value="4">
            4
          </option>
        </select>
      </div>
    </div>
  );
};

export default Dice;

const DiceRow = () => {
  return (
    <div className="border-b min-w-[1000px] border-solid border-black grid grid-cols-[1fr__1fr__150px__2fr__150px] py-3 w-full gap-3">
      <div className="flex justify-start items-center gap-2">
        <span className="w-3 aspect-square rounded-full bg-green-800"></span>
        <p className="text-base font-medium text-white">Win</p>
      </div>
      <p className="text-white text-base font-medium">0x7dd…1d0</p>
      <p className="text-white text-base font-medium">4.20x</p>
      <div className="flex justify-start items-center gap-3">
        <img src="/usdt.png" className="w-5 object-contain" alt="" />
        <p className="text-white text-base font-medium">-4,072.8285 ($18.09)</p>
      </div>
      <p className="text-white text-base font-medium text-right">
        about 53 years
      </p>
    </div>
  );
};
