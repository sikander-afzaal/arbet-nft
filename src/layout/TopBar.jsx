const TopBar = ({ setSidebarToggle }) => {
  return (
    <div className="bg-white bg-opacity-80 py-3   topbar lg:hidden flex justify-center items-center w-full">
      <div className=" justify-between items-center flex w-[90%]">
        <img src="/logo.png" className="w-[50px]" alt="" />
        <svg
          onClick={() => setSidebarToggle(true)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="black"
          className="w-8 h-8 cursor-pointer"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default TopBar;
