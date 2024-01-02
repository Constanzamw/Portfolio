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
    <nav className="bg-transparent py-8 px-8 text-artistfont mb-[1px] bg-red-700">
      <ul className="flex flex-col sm:flex-row  items-center justify-center sm:justify-between gap-8">
        <div className="text-center sm:flex sm:justify-center">
          <li>
            <Link href="/">
              <span className="font-rocksalt text-4xl hover:text-pink-600 hover:border-pink-600 ">
                Constanza Weiner
           
              </span>
            </Link>
          </li>
        </div>
        <div className="flex items-center gap-x-8">
          <li>
            <Link href="/education">
              <span className="hover:text-pink-600 hover:border-pink-600 pb-1 font-newrocker text-[19px] border-b-[2px] border-gray-200">
                Education
              </span>
            </Link>
          </li>
          <li>
            <Link href="/experience">
              <span className=" hover:text-pink-600 cursor-pointer hover:border-pink-600 pb-1 font-newrocker text-[19px] border-b-[2px]  border-gray-200">
                Experience
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span className=" hover:text-pink-600 cursor-pointer hover:border-pink-600 pb-1 font-newrocker text-[19px] border-b-[2px]  border-gray-200">
                About me
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span className=" hover:text-pink-600 cursor-pointer hover:border-pink-600 pb-1 font-newrocker text-[19px] border-b-[2px]  border-gray-200">
                Contact me
              </span>
            </Link>
          </li>
        </div>
      </ul>
    </nav>
  );
}
