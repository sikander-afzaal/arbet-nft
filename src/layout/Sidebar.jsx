import { useState } from "react";

const Sidebar = () => {
  const [gamesDropToggle, setGamesDropToggle] = useState(false);
  return (
    <div className="sidebar sticky top-0 left-0 h-screen max-h-screen overflow-y-auto py-4 wrapper px-5 bg-black">
      <div className="w-full border-b-2 border-solid border-white border-opacity-30 pb-4 flex justify-start  items-center flex-col gap-4">
        <img
          src="/logo.png"
          className="w-full aspect-square object-contain max-w-[112px]"
          alt=""
        />
        <div className="flex justify-start items-center flex-col w-full gap-3">
          <div className="flex justify-start w-full items-center gap-3">
            <img
              src="/eth.png"
              className="w-5 aspect-square object-contain"
              alt=""
            />
            <p className="text-white font-semibold text-sm">0.335 ETH</p>
          </div>
          <div className="flex justify-start w-full items-center gap-3">
            <img
              src="/usdt.png"
              className="w-5 aspect-square object-contain"
              alt=""
            />
            <p className="text-white font-semibold text-sm">10,450,000 USDT</p>
          </div>
        </div>
        <button className="text-black bg-white w-full h-[44px] text-sm border-2 border-solid border-white transition-all duration-300 hover:bg-transparent hover:text-white font-semibold rounded-xl">
          Select Wallet
        </button>
      </div>
      <div className="flex justify-start mt-5 items-start gap-3 flex-col w-full  border-b-2 border-solid border-white border-opacity-30 pb-4">
        <h4 className="text-white font-bold mb-1">Dashboard</h4>
        <SidebarLink
          ico={
            <svg
              className="group-hover:text-black text-white transition-all duration-300"
              width="25"
              height="17"
              viewBox="0 0 25 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.28906 13.4424C7.75689 15.2119 9.97428 16.3413 12.4535 16.3413C14.9327 16.3413 17.1493 15.2119 18.6164 13.4424C16.7999 13.8316 14.6935 14.0528 12.4535 14.0528C10.2103 14.0528 8.10705 13.8316 6.28906 13.4424Z"
                fill="currentColor"
              ></path>
              <path
                d="M20.5246 4.93522C20.6622 5.25802 20.781 5.58942 20.8787 5.93019C21.7205 6.25768 22.2121 6.63675 22.2121 7.04318C22.2121 7.51526 21.561 7.95061 20.452 8.30858C20.4348 3.90586 16.859 0.341797 12.4531 0.341797C8.04572 0.341797 4.4715 3.90586 4.4543 8.30936C3.34444 7.95061 2.69337 7.51448 2.69337 7.04318C2.69337 6.63753 3.18578 6.2569 4.02677 5.93019C4.12525 5.58942 4.24483 5.25802 4.38161 4.93444C1.70231 5.7559 0 6.97753 0 8.34219C0 8.51961 0.0281374 8.6939 0.0836305 8.86507C0.803478 11.0926 6.06751 12.8199 12.4531 12.8199C18.8372 12.8199 24.1028 11.0926 24.8242 8.86507C24.8781 8.69234 24.907 8.51961 24.907 8.34219C24.9055 6.97753 23.2039 5.75668 20.5246 4.93522Z"
                fill="currentColor"
              ></path>
            </svg>
          }
          name="Home Page"
        />
        <SidebarLink
          ico={
            <svg
              className="group-hover:text-black text-white transition-all duration-300"
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7536 4.45097C15.6688 4.19046 15.4434 4.00045 15.1727 3.96113L12.5952 3.58653L11.4422 1.25068C11.3213 1.00516 11.0711 0.849609 10.797 0.849609C10.523 0.849609 10.2727 1.00516 10.1519 1.25068L8.99881 3.58658L6.42096 3.96118C6.15013 4.00054 5.92476 4.1905 5.83998 4.45102C5.75521 4.71154 5.82593 4.99758 6.02225 5.18874L7.88799 7.00691L7.44713 9.57403C7.40073 9.84413 7.5118 10.1171 7.73343 10.278C7.95554 10.4397 8.24931 10.4596 8.49153 10.3329L10.7972 9.12075L13.1024 10.3329C13.3502 10.4628 13.6429 10.436 13.8605 10.278C14.0821 10.1171 14.1932 9.84417 14.1468 9.57428L13.7064 7.00691L15.5717 5.18874C15.7677 4.99758 15.838 4.71149 15.7536 4.45097Z"
                fill="currentColor"
              ></path>
              <path
                d="M13.6743 11.8145H7.91695C7.51949 11.8145 7.19727 12.1367 7.19727 12.5341V22.8494H14.394V12.5341C14.394 12.1367 14.0718 11.8145 13.6743 11.8145Z"
                fill="currentColor"
              ></path>
              <path
                d="M0.71968 14.6934C0.322221 14.6934 0 15.0156 0 15.413V22.2807C0 22.5949 0.25476 22.8496 0.568989 22.8496H5.7574V14.6934H0.71968Z"
                fill="currentColor"
              ></path>
              <path
                d="M20.8717 17.5723H15.834V22.8499H21.0224C21.3367 22.8499 21.5914 22.5951 21.5914 22.2809V18.2919C21.5913 17.8945 21.2691 17.5723 20.8717 17.5723Z"
                fill="currentColor"
              ></path>
            </svg>
          }
          name="Earn"
        />
        <div className="w-full flex gap-2 justify-start items-start flex-col">
          <SidebarLink
            ico={
              <svg
                className="group-hover:text-black text-white transition-all duration-300"
                width="22"
                height="23"
                viewBox="0 0 22 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.7536 4.45097C15.6688 4.19046 15.4434 4.00045 15.1727 3.96113L12.5952 3.58653L11.4422 1.25068C11.3213 1.00516 11.0711 0.849609 10.797 0.849609C10.523 0.849609 10.2727 1.00516 10.1519 1.25068L8.99881 3.58658L6.42096 3.96118C6.15013 4.00054 5.92476 4.1905 5.83998 4.45102C5.75521 4.71154 5.82593 4.99758 6.02225 5.18874L7.88799 7.00691L7.44713 9.57403C7.40073 9.84413 7.5118 10.1171 7.73343 10.278C7.95554 10.4397 8.24931 10.4596 8.49153 10.3329L10.7972 9.12075L13.1024 10.3329C13.3502 10.4628 13.6429 10.436 13.8605 10.278C14.0821 10.1171 14.1932 9.84417 14.1468 9.57428L13.7064 7.00691L15.5717 5.18874C15.7677 4.99758 15.838 4.71149 15.7536 4.45097Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M13.6743 11.8145H7.91695C7.51949 11.8145 7.19727 12.1367 7.19727 12.5341V22.8494H14.394V12.5341C14.394 12.1367 14.0718 11.8145 13.6743 11.8145Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M0.71968 14.6934C0.322221 14.6934 0 15.0156 0 15.413V22.2807C0 22.5949 0.25476 22.8496 0.568989 22.8496H5.7574V14.6934H0.71968Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M20.8717 17.5723H15.834V22.8499H21.0224C21.3367 22.8499 21.5914 22.5951 21.5914 22.2809V18.2919C21.5913 17.8945 21.2691 17.5723 20.8717 17.5723Z"
                  fill="currentColor"
                ></path>
              </svg>
            }
            arrow
            gamesDropToggle={gamesDropToggle}
            setGamesDropToggle={setGamesDropToggle}
            name="Games"
          />
          {gamesDropToggle && (
            <div className="flex w-full gap-2 justify-start items-start flex-col ">
              <div className="flex justify-start group items-center w-full py-2.5 px-6 hover:bg-white rounded-lg transition-all duration-300">
                <p className="text-white group-hover:text-black transition-all duration-300 font-semibold text-sm">
                  Roulette
                </p>
              </div>
              <div className="flex justify-start group items-center w-full py-2.5 px-6 hover:bg-white rounded-lg transition-all duration-300">
                <p className="text-white group-hover:text-black transition-all duration-300 font-semibold text-sm">
                  Dice
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-start mt-5 items-start gap-3 flex-col w-full  border-b-2 border-solid border-white border-opacity-30 pb-6">
        <h4 className="text-white font-bold mb-1">Official Rooms</h4>
        <button className="hover:bg-opacity-30 transition-all  border-2 border-white border-solid border-opacity-20 bg-white bg-opacity-10 flex justify-between items-center w-full p-3 rounded-lg">
          <div className="flex justify-start items-center gap-3">
            <img src="/infinite.svg" className="w-7 object-contain" alt="" />
            <p className="text-white font-semibold">Poker Room</p>
          </div>
          <img
            src="/eth.png"
            className="w-6 object-contain aspect-square"
            alt=""
          />
        </button>
        <button className="hover:bg-opacity-30 transition-all  border-2 border-white border-solid border-opacity-20 bg-white bg-opacity-10 flex justify-between items-center w-full p-3 rounded-lg">
          <div className="flex justify-start items-center gap-3">
            <img src="/shrimp.svg" className="w-5 object-contain" alt="" />
            <p className="text-white font-semibold">Black Jack Room</p>
          </div>
          <img
            src="/eth.png"
            className="w-6 object-contain aspect-square"
            alt=""
          />
        </button>
      </div>
      <a
        href="#"
        target="blank"
        className="text-white mt-5 w-full mb-3 font-bold "
      >
        Additional Information
      </a>
      <a href="#" target="blank" className="text-white w-full font-bold mb-1">
        Twitter
      </a>
    </div>
  );
};

export default Sidebar;

const SidebarLink = ({
  ico,
  name,
  setGamesDropToggle,
  arrow,
  gamesDropToggle,
}) => {
  return (
    <button
      onClick={() => {
        setGamesDropToggle((prev) => !prev);
      }}
      className="flex justify-between text-white hover:text-black gap-3 hover:bg-white items-center px-4 w-full py-3 group rounded-lg transition-all duration-200"
    >
      <div className="flex justify-start items-center gap-3">
        {ico}
        <p className="text-white group-hover:text-black transition-all duration-300 font-semibold text-sm">
          {name}
        </p>
      </div>
      {arrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-5 h-5 ${gamesDropToggle ? "rotate-180" : "rotate-0"}`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      )}
    </button>
  );
};
