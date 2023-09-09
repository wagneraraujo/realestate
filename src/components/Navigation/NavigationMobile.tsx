"use client";
import { NavigationLinks } from "./navigationLinks";
import { HiMenuAlt2 } from "react-icons/hi";
import React, { useState } from "react";
import { navigationLinks } from "features/utils/navigationLinks";
export const NavigationMobile = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const openMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="w-full bg-slate-900 text-slate-300 h-1 flex justify-between  shadow-md lg:hidden flex-col text-left">
        <div className="logo uppercase font-bold font-mono text-2xl flex  delay-300	justify-between  bg-slate-900  p-6 items-center">
          Imobiliaria Mob
          <button className="border-none text-white" onClick={openMenu}>
            <HiMenuAlt2 />
          </button>
        </div>
        <div className={!menuOpen ? "hidden" : "block delay-300	"}>
          <nav>
            <ul className="flex  p-6 gap-6 text-left delay-300	  flex-col w-full bg-slate-900">
              {navigationLinks.map((item) => (
                <NavigationLinks key={item.title} {...item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
