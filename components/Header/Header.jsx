"use client";
import { menuList } from "@/Data/changableData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose, IoSearchOutline } from "react-icons/io5";
import SignUp from "../auth/SignUp/SignUp";

const Header = () => {
  const locationMatch = usePathname();
  const [openToggle, setOpenToggle] = useState(false);

  const blockHeader = [
    "/sign-up",
    "/login",
    "/sign-up/verify",
    "/login/verify",
  ];

  // ✅ FIXED: Properly check if current path is in the blockHeader list
  if (blockHeader.includes(locationMatch)) {
    return null;
  }

  return (
    <>
      <header className="w-full sticky top-0 right-0 z-50 bg-white">
        <nav className="w-full h-[80px] flex items-center px-[10px] md:px-[7%] z-50 shadow justify-between">
          {/* logo section */}
          <div className="md:w-[180px] w-14">
            <img
              src="./l-logo.png"
              alt="kraviona"
              loading="lazy"
              className="w-full object-center md:block hidden"
            />
            <img
              src="./fevicon.png"
              alt="kraviona"
              loading="lazy"
              className="w-full object-center md:hidden block"
            />
          </div>

          {/* menu list */}
          <section className="flex gap-8 items-center">
            <div className="md:flex hidden text-sm font-semibold md:gap-8 items-center">
              {menuList.map((menu, idx) => {
                const isActive = locationMatch === menu.link;
                return (
                  <Link
                    href={menu.link}
                    key={idx}
                    className={`${
                      isActive ? "text-emerald-500" : "text-gray-700 capitalize"
                    }`}
                  >
                    {menu.name}
                  </Link>
                );
              })}
            </div>

            <button className="md:block hidden bg-[#00cba9] px-8 py-2 text-white rounded-full">
              Login
            </button>

            <section className="flex gap-4">
              {/* search */}
              <button className="w-[22px] h-[22px]">
                <IoSearchOutline className="w-full h-full" />
              </button>

              {/* toggle menu */}
              <button
                onClick={() => setOpenToggle(!openToggle)}
                className="w-[25px] h-[25px] md:hidden block"
              >
                <TiThMenu className="w-full h-full text-gray-500" />
              </button>
            </section>
          </section>
        </nav>
      </header>

      {/* small screen menu */}
      {openToggle && (
        <section className="md:hidden block z-50">
          <div className="fixed bg-transparent w-full h-screen top-0 z-50 animate-slideIn">
            <div className="w-full h-full flex items-center">
              <div className="w-[70%] h-full bg-white slideIn">
                {/* logo */}
                <div className="w-full p-4">
                  <img
                    src="/l-logo.jpg"
                    alt="kraviona"
                    className="w-[90%] mx-auto"
                  />
                </div>

                {/* divider */}
                <div className="w-full bg-gray-400 h-[1px] rounded-full" />

                <div className="w-full">
                  <div className="flex flex-col gap-3 mt-4">
                    {menuList.map((menu, idx) => {
                      const isActive = locationMatch === menu.link;
                      return (
                        <Link
                          href={menu.link}
                          key={idx}
                          className={`w-full px-4 py-2 hover:bg-gray-200 ${
                            isActive ? "bg-sky-50" : ""
                          }`}
                        >
                          {menu.name}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div
                className="w-[30%] relative h-full bg-gray-700/90"
                onClick={() => setOpenToggle(false)}
              >
                <IoClose className="absolute top-4 right-4 text-rose-400 text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
        </section>
      )}

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slideIn {
          animation: slideIn 0.3s ease forwards;
        }
      `}</style>
    </>
  );
};

export default Header;
