/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import styles from "../../styles/Global.js";
import React, { useState } from "react";
import Image from "next/image";
import { Transition } from "@headlessui/react";

const index = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const [navbar, setNavbar] = useState(false);

  // const changeNavBG = () => {
  //   if (window.scrollY >= 100) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  // if (typeof window != "undefined") {
  //   window.addEventListener("scroll", changeNavBG);
  // }

  return (
    <div className="navbar bg-base-100">
      {/* Mobile Menu  */}
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            {/* Mobile-Dropdown Menu Arrow  */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/">
                <a>
                  Our Story
                  {/* Down Arrow icon  */}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
              </Link>
              <ul className="p-2">
                <li>
                  <Link href="/">
                    <a>Our Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Our Programs</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">
                <a>Giving Tuesday</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Blog</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/">
                <a>
                  Support Us
                  {/* Down Arrow icon  */}
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
              </Link>
              <ul className="p-2">
                <li>
                  <Link href="/">
                    <a>Volunteer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Fundraising</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* Logo  */}
        <Link href="/">
          <a className="btn btn-ghost normal-case xl:text-xl">
            Orphan Breath Foundation
          </a>
        </Link>
      </div>

      {/* Web Menu  */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {/* <li>
            <a>Home</a>
          </li> */}
          <li tabIndex={0}>
            <a>
              Our Story
              {/* Down Arrow icon  */}
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Our Projects</a>
              </li>
              <li>
                <a>Our Programs</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Giving Tuesday</a>
          </li>
          <li>
            <a>News</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
          <li tabIndex={0}>
            <a>
              Support Us
              {/* Down Arrow icon  */}
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Volunteer</a>
              </li>
              <li>
                <a>Fundraising</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>

      {/* Donation Button  */}
      <div className="navbar-end">
        <Link href="/">
          <a className="btn btn-accent">Donation</a>
        </Link>
      </div>
    </div>
  );
};

export default index;
