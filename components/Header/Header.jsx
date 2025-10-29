"use client";
import { menuList } from "@/Data/changableData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const locationMatch = usePathname();
  const [openToggle, setOpenToggle] = useState(false);

  const blockHeader = [
    "/sign-up",
    "/login",
    "/sign-up/verify",
    "/login/verify",
  ];

  if (blockHeader.includes(locationMatch)) {
    return null;
  }

  return (
    <>
      {/* ===== Header Section ===== */}
      <header className="w-full sticky top-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-md">
        <nav className="w-full h-[80px] flex items-center px-[10px] md:px-[7%] justify-between">
          {/* Logo Section */}
          <div className="md:w-[180px] w-14">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.ico"
                alt="Kraviona"
                loading="lazy"
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col leading-tight">
                <p className="text-white text-lg font-semibold">Kraviona</p>
                <small className="text-gray-400 text-xs">
                  IT Web Solutions
                </small>
              </div>
            </div>

            <img
              src="/favicon.ico"
              alt="Kraviona"
              loading="lazy"
              className="w-full object-center md:hidden block"
            />
          </div>

          {/* Menu List */}
          <section className="flex gap-8 items-center">
            <div className="md:flex hidden text-sm font-semibold md:gap-8 items-center">
              {menuList.map((menu, idx) => {
                const isActive = locationMatch === menu.link;
                return (
                  <Link
                    href={menu.link}
                    key={idx}
                    className={`${
                      isActive
                        ? "text-[#00cba9]"
                        : "text-gray-300 hover:text-[#00cba9] transition-colors"
                    } capitalize`}
                  >
                    {menu.name}
                  </Link>
                );
              })}
            </div>

            {/* Login Button */}
            <button className="md:block hidden bg-[#00cba9] hover:bg-[#009e8b] px-8 py-2 text-white rounded-full font-semibold transition-all">
              Login
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpenToggle(!openToggle)}
              className="w-[28px] h-[28px] md:hidden block text-white"
            >
              <TiThMenu className="w-full h-full" />
            </button>
          </section>
        </nav>
      </header>

      {/* ===== Mobile Sidebar ===== */}
      {openToggle && (
        <section className="md:hidden block z-50">
          <div className="fixed bg-black/80 w-full h-screen top-0 z-50 animate-slideIn">
            <div className="w-full h-full flex items-center">
              <div className="w-[70%] h-full bg-gray-900 shadow-2xl border-r border-gray-700 slideIn">
                {/* Logo */}
                <div className="w-full p-4 flex justify-center border-b border-gray-800">
                  <img
                    src="/l-logo.png"
                    alt="Kraviona"
                    className="w-[80%] mx-auto"
                  />
                </div>

                {/* Menu Items */}
                <div className="flex flex-col gap-3 mt-4 text-gray-200">
                  {menuList.map((menu, idx) => {
                    const isActive = locationMatch === menu.link;
                    return (
                      <Link
                        href={menu.link}
                        key={idx}
                        className={`w-full px-5 py-3 hover:bg-gray-800 ${
                          isActive ? "bg-gray-800 text-[#00cba9]" : ""
                        } transition-all`}
                        onClick={() => setOpenToggle(false)}
                      >
                        {menu.name}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Overlay Close */}
              <div
                className="w-[30%] relative h-full bg-transparent"
                onClick={() => setOpenToggle(false)}
              >
                <IoClose className="absolute top-4 right-4 text-[#00cba9] text-3xl cursor-pointer" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Animation ===== */}
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
