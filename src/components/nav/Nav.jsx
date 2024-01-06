"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { RiArrowDownSLine } from "react-icons/ri";
// import { Menu, MenuItem, MenuButton, SubMenu } from "@szhsin/react-menu";
// import "@szhsin/react-menu/dist/index.css";
// import "@szhsin/react-menu/dist/transitions/slide.css";
// import { useDispatch, useSelector } from "react-redux";
// import { openModalLoadingAction } from "../../app/redux/features/modalLoading/ModalLoadingActions";
// import { useRouter } from "next/navigation";

export default function Nav() {
  return (
    <nav className="bg-transparent py-4 px-4 md:py-8 md:px-8 text-artistfont mb-[1px] bg-red-700">
      <ul className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8">
        <div className="text-center md:flex md:justify-center">
          <li>
            <Link href="/">
              <span className="font-rocksalt text-md lg:text-4xl hover:text-pink-600 hover:border-pink-600 border-b-[2px]">
                Constanza Weiner
              </span>
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-x-4 md:gap-x-8">
          <li>
            <Link href="/education">
              <span className="hover:text-pink-600 hover:border-pink-600 pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border-gray-200 border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md">
                Education
              </span>
            </Link>
          </li>
          <li>
            <Link href="/experience">
              <span className="hover:text-pink-600 cursor-pointer hover:border-pink-600 pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md border-gray-200">
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className="hover:text-pink-600 cursor-pointer hover:border-pink-600 pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md border-gray-200">
                About me
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-pink-600 cursor-pointer hover:border-pink-600 pb-1 font-newrocker text-[14px] md:text-[19px] border-b-[2px] border border-1px px-2 md:px-4 py-1 md:py-2 rounded-md border-gray-200">
                Contact me
              </span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
