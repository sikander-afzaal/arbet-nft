import { Route, Routes } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Earn from "./pages/earn/Earn";
import TopBar from "./layout/TopBar";
import { useState } from "react";
import Dice from "./pages/dice/Dice";

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div className="area grid grid-cols-1 grid-rows-[auto__1fr] lg:grid-rows-1 lg:grid-cols-[320px__1fr] w-full gap-5">
      <Sidebar
        setSidebarToggle={setSidebarToggle}
        sidebarToggle={sidebarToggle}
      />
      <TopBar setSidebarToggle={setSidebarToggle} />
      <div className="main w-full overflow-x-hidden">
        <Routes>
          <Route element={<Earn />} path="/" />
          <Route element={<Dice />} path="/dice" />
        </Routes>
      </div>
    </div>
  );
};

export default App;
