import React from 'react';
import { FaHamburger } from 'react-icons/fa';
import { LiaHamburgerSolid } from "react-icons/lia";
import { SiBurgerking } from "react-icons/si";
import { LuSandwich } from "react-icons/lu";
import { GiFrenchFries,GiSteak } from "react-icons/gi";

const Sidebar = () => (
  <aside className="sidebar">
    <FaHamburger />
    <ul>
      <li><LiaHamburgerSolid/></li>
      <li><SiBurgerking/>
        <ul>
          <li><LuSandwich/></li>
          <li><GiFrenchFries/></li>
        </ul>
      </li>
      <li><GiSteak/></li>
    </ul>
  </aside>
);

export default Sidebar;
