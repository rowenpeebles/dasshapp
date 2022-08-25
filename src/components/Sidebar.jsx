import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiCodesandbox } from 'react-icons/fi';
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { links } from '../data/dummy'; 
import { useStateContext } from '../contexts/ContextProvider';

const Sidebar = () => {
  
  const { activeMenu, setActiveMenu, screenSize } = useStateContext();
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900) {
      setActiveMenu(false);
    }
  }
  const activeLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2';
  const normalLink = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';
  
  return (
    <div className="ml-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
      {activeMenu && (<>
        <div className="flex justify-between items-center">
          
          {/* Logo and Name */}
          <Link to="/" onClick={handleCloseSideBar} className="items-center gap-3 ml-3 mt-4 flex text-xl 
          font-extrabold tracking-tight dark:text-white text-slate-900">
            <FiCodesandbox /> <span>DashApp</span>
          </Link>

          {/* Close Button */}
          <TooltipComponent content="Menu" position="BottomCenter">
            <button type="button" onClick={() => setActiveMenu(false)} className="text-xl rounded-full p-3 
            hover:bg-light-gray mt-4 block">
              <MdOutlineCancel />
            </button>
          </TooltipComponent>
        </div> 

        {/* Mapping Items */}
        <div className="mt-10 ">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 dark:text-gray-400 m-3 mt-4 uppercase">
                  {item.title}
                </p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    onClick={handleCloseSideBar}
                    className={({ isActive }) => (isActive ? activeLink : normalLink)}
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Sidebar