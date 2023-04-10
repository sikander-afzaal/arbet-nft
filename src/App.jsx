import Sidebar from "./layout/Sidebar";

const App = () => {
  return (
    <div className="area grid grid-cols-[320px__1fr] w-full gap-5">
      <Sidebar />
      <div className="main w-full"></div>
    </div>
  );
};

export default App;
