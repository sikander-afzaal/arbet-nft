import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Roulette = () => {
  return (
    <div className="wrapper pt-5 lg:pt-16 pb-8 ">
      <div className="contain justify-center items-center">
        <div className="grid w-full gap-8 2xl:grid-cols-[350px__1fr] 2xl:gap-5 bg-secondary rounded-xl overflow-hidden">
          <div className="flex bg-gray bg-opacity-20 justify-start items-center flex-col bg-gray-400 w-full px-5 py-8">
            <p className="text-white text-sm font-medium bg-secondary rounded-md p-2">
              House Edge:{" "}
              <span className=" text-opacity-100 text-white font-semibold text-sm">
                2.70%
              </span>
            </p>
            <div className="flex mt-5 justify-start items-start flex-col w-full">
              <p className="text-white font-semibold text-sm">
                Chip Value 0.010000 USDT
              </p>
              <div className="flex justify-center items-center py-2 mt-1 w-full border-2 border-black border-solid rounded-lg">
                <Splide
                  options={{
                    perPage: 5,
                    perMove: 1,
                    width: "80%",
                    drag: true,
                    type: "loop",
                    gap: 0,
                  }}
                >
                  <SplideSlide>
                    <div className="relative">
                      <img
                        src="/chip.webp"
                        className="w-[38px] aspect-square"
                        alt=""
                      />
                      <p className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 text-[11px] text-white">
                        1K
                      </p>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
            <div className="flex justify-start items-start flex-col mt-5  w-full">
              <p className="text-white font-semibold text-sm">Total Bet</p>
              <div className="bg-secondary border-gray border-solid border rounded-lg py-2 px-3 flex justify-between items-center w-full">
                <p className="text-white text-lg font-semibold">0.03</p>
                <img src="/usdt.png" className="w-4 object-contain" alt="" />
              </div>
            </div>
            <div className=" flex justify-between mt-4 items-center w-full">
              <p className="text-white  font-semibold ">Balance</p>
              <div className="flex justify-start items-center gap-1">
                <p className="text-white  font-semibold ">0.00000</p>
                <img src="/usdt.png" className="w-4 object-contain" alt="" />
              </div>
            </div>
            <div className=" flex justify-between items-center w-full">
              <p className="text-white  font-semibold ">Max Bet</p>
              <div className="flex justify-start items-center gap-1">
                <p className="text-white  font-semibold ">516.9999</p>
                <img src="/usdt.png" className="w-4 object-contain" alt="" />
              </div>
            </div>
            <button className="text-white bg-secondary w-full py-3 border-2 border-solid border-secondary hover:bg-transparent hover:text-black text-lg mt-5 rounded-xl font-semibold transition-all duration-300">
              Spin Now
            </button>
            <div className=" flex mt-3 justify-between items-center w-full">
              <p className="text-white text-lg font-semibold cursor-pointer">
                Undo
              </p>
              <p className="text-white text-lg font-semibold cursor-pointer">
                Clear
              </p>
            </div>
          </div>
          <div className="flex pb-8 overflow-hidden justify-start items-center flex-col w-full">
            <img
              src="/wheel.png"
              className="aspect-square w-[316px] object-contain"
              alt=""
            />
            <div className="flex justify-start overflow-x-auto  px-5 2xl:pr-5 items-start flex-col gap-[2px] w-full">
              <div className="grid-rows-3 min-w-[800px] grid grid-cols-[repeat(14,1fr)] w-full gap-[2px]">
                <div className="w-full   bg-green-500 h-full col-span-1 row-span-3 flex justify-center items-center text-white text-base">
                  0
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  3
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  6
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  9
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  12
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  15
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  18
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  21
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  24
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  27
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  30
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  33
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  36
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-black text-white test-base">
                  2:1
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  2
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  5
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  8
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  11
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  14
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  17
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  20
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  23
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  26
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  29
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  32
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  36
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-black text-white test-base">
                  2:1
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  1
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  4
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  7
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  10
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  13
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  16
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  19
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  22
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  25
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  28
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-slate-900 text-white test-base">
                  31
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-red-600 text-white test-base">
                  34
                </div>
                <div className="flex justify-center items-center w-full aspect-square bg-black text-white test-base">
                  2:1
                </div>
              </div>
              <div className="w-full gap-0.5 min-w-[800px] grid grid-rows-[77px__77px] grid-cols-[72px__1fr__1fr__1fr__1fr__1fr__1fr__72px]">
                <div className="col-span-1 row-span-2 opacity-0 w-full h-full"></div>
                <div className="flex justify-center col-span-2 items-center w-full bg-black text-base text-white">
                  1st 12
                </div>
                <div className="flex justify-center col-span-2 items-center w-full bg-black text-base text-white">
                  2nd 12
                </div>
                <div className="flex justify-center col-span-2 items-center w-full bg-black text-base text-white">
                  3rd 12
                </div>
                <div className="flex justify-center row-start-2 row-end-3 col-start-2 col-end-3  items-center w-full bg-black text-base text-white">
                  1 to 18
                </div>
                <div className="flex justify-center row-start-2 row-end-3 col-start-3 col-end-4  items-center w-full bg-black text-base text-white">
                  EVEN
                </div>
                <div className="flex justify-center row-start-2 row-end-3 col-start-4 col-end-5  items-center w-full bg-red-600 text-base text-white">
                  RED
                </div>
                <div className="flex justify-center row-start-2 row-end-3 col-start-5 col-end-6  items-center w-full bg-slate-900 text-base text-white">
                  BLACK
                </div>
                <div className="flex justify-center row-start-2 row-end-3 col-start-6 col-end-7   items-center w-full bg-black text-base text-white">
                  ODD
                </div>
                <div className="flex justify-center row-start-2 row-end-3 col-start-7 col-end-8  items-center w-full bg-black text-base text-white">
                  19 to 36
                </div>
                <div className="col-start-8 col-end-9 row-span-2 opacity-0 w-full h-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roulette;
