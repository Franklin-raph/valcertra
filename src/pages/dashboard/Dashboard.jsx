import React, { useState, useEffect } from "react";
import TopNav from "../../components/top-nav/TopNav";
import SideNav from "../../components/side-nav/SideNav";


const Dashboard = () => {

    const [toggleNav, setToggleNav] = useState(false)
  
  return (
    <div>
      <>
        <SideNav toggleNav={toggleNav} setToggleNav={setToggleNav}/>
        <div className="w-full lg:w-[82%] ml-auto">
          <TopNav setToggleNav={setToggleNav} toggleNav={toggleNav} />
          <div className="px-[10px] md:px-[30px] py-[1rem]">

            
          </div>
        </div>
      </>
    </div>
  );
}

export default Dashboard;
