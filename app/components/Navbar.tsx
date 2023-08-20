
'use client'
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [display, setDisplay] = useState("flex");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [bg, setBg] = useState({ bgMenu: 'bg-white text-black', bgLine: 'bg-[#333]' })

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 300) {
        setBg({ bgMenu: 'bg-black text-white', bgLine: 'bg-white' })
      } else {
        setBg({ bgMenu: 'bg-white text-black', bgLine: 'bg-black' })
      }

      if (currentScrollY > 300) {
        if (currentScrollY < prevScrollY) {
          setDisplay("flex");
        } else {
          setDisplay("hidden");
        }
      } else {
        setDisplay("flex");
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY]);

  return (
    <div className={`${display} flex-row w-full justify-between pr-[8vw] top-0 h-[5vw] items-end mb-[1vw] z-50 transition-all duration-300 ${bg.bgMenu} fixed`}>
      <div className="flex flex-row">
        <div  className="flex flex-col items-center justify-around cursor-pointer group">
          <div className={`h-[1px] w-[2vw] ${bg.bgLine} group-hover:translate-y-[3.5px] ease-in duration-100`}></div>
          <div className={`h-[1px] w-[2vw]  ${bg.bgLine} group-hover:hidden   ease-in duration-100`}></div>
          <div className={`h-[1px] w-[2vw]  ${bg.bgLine} group-hover:translate-y-[-3.5px]  ease-in duration-100`}></div>
        </div>
        <div className="flex flex-row pl-[2vw] font-Beatrice gap-4"><span className="cursor-pointer hover:text-[#9b9a9a] ">EN</span><span className="cursor-pointer hover:text-[#9b9a9a]">DE</span><span className="cursor-pointer hover:text-[#9b9a9a]">FR</span></div>
      </div>
      <div className="">right</div>
    </div>
  );
};

export default Navbar;
