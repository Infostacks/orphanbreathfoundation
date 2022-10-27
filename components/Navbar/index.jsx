/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
// import styles from "../../styles/Global.js";
import React, { useState } from "react";
import Image from "next/image";
// import { Transition } from "@headlessui/react";

const index = () => {
  const [navbar, setNavbar] = useState(false);

  const changeNavBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window != "undefined") {
    window.addEventListener("scroll", changeNavBG);
  }

  return (
    <div
      className={`navbar text-bgColor ${
        navbar
          ? "bg-darkGreen bg-opacity-90 drop-shadow-md"
          : "bg-darkGreen bg-opacity-90 drop-shadow-md"
      } z-[1200px]`}
    >
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
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow text-darkGreen rounded-box w-52"
          >
            {/* <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li> */}
            <li tabIndex={0}>
              <Link href="/our-story">
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
              <ul className="p-2 bg-darkGreen text-yellow">
                <li>
                  <Link href="/our-story/our-projects">
                    <a>Our Projects</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-story/our-programs">
                    <a>Our Programs</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/giving-tuesday">
                <a>Giving Tuesday</a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a>News</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/support-us">
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
              <ul className="p-2 bg-darkGreen text-yellow">
                <li>
                  <Link href="/support-us/volunteer">
                    <a>Volunteer</a>
                  </Link>
                </li>
                <li>
                  <Link href="/support-us/fund-raising">
                    <a>Fundraising</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">
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
            <Link href="/our-story">
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
            <ul className="p-2 text-darkGreen bg-yellow">
              <li>
                <Link href="/our-story/our-projects">
                  <a>Our Projects</a>
                </Link>
              </li>
              <li>
                <Link href="/our-story/our-programs">
                  <a>Our Programs</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/giving-tuesday">
              <a>Giving Tuesday</a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a>News</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li tabIndex={0}>
            <Link href="/support-us">
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
            <ul className="p-2 text-darkGreen bg-yellow">
              <li>
                <Link href="/support-us/volunteer">
                  <a>Volunteer</a>
                </Link>
              </li>
              <li>
                <Link href="/support-us/fund-raising">
                  <a>Fundraising</a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Donation Button  */}
      <div className="navbar-end">
        <Link href="/donation">
          <a className="btn btn-outline text-yellow border-yellow">Donation</a>
        </Link>
      </div>
    </div>
  );
};

export default index;
