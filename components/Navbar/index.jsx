/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import useReadingProgress from "../../hooks/useReadingProgress";

const index = () => {
  const [navbar, setNavbar] = useState(false);
  const completion = useReadingProgress();

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
      className={`navbar text-bgColor drop-shadow-md ${
        navbar ? "bg-darkGreen bg-opacity-90" : "bg-darkGreen bg-opacity-30"
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
                <a className="active:bg-darkGreen hover:bg-darkGreen hover:text-bgColor">
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
                    <a className="active:bg-darkGreen hover:bg-yellow hover:text-darkGreen">
                      Our Projects
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-story/our-programs">
                    <a className="active:bg-darkGreen hover:bg-yellow hover:text-darkGreen">
                      Our Programs
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/giving-tuesday">
                <a className="active:bg-darkGreen hover:bg-darkGreen hover:text-bgColor">
                  Giving Tuesday
                </a>
              </Link>
            </li>
            <li>
              <Link href="/news">
                <a className="active:bg-darkGreen hover:bg-darkGreen hover:text-bgColor">
                  News
                </a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a className="active:bg-darkGreen hover:bg-darkGreen hover:text-bgColor">
                  Blog
                </a>
              </Link>
            </li>
            <li tabIndex={0}>
              <Link href="/support-us">
                <a className="active:bg-darkGreen hover:bg-darkGreen hover:text-bgColor">
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
                    <a className="active:bg-darkGreen hover:bg-yellow hover:text-darkGreen">
                      Volunteer
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/support-us/fund-raising">
                    <a className="active:bg-darkGreen hover:bg-yellow hover:text-darkGreen">
                      Fundraising
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/contact">
                <a className="active:bg-darkGreen hover:bg-darkGreen hover:text-bgColor">
                  Contact
                </a>
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
              <a className="active:bg-yellow hover:bg-darkGreen">
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
                  <a className="active:bg-yellow hover:bg-darkGreen hover:text-bgColor">
                    Our Projects
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/our-story/our-programs">
                  <a className="active:bg-yellow hover:bg-darkGreen hover:text-bgColor">
                    Our Programs
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/giving-tuesday">
              <a className="active:bg-yellow hover:bg-darkGreen">
                Giving Tuesday
              </a>
            </Link>
          </li>
          <li>
            <Link href="/news">
              <a className="active:bg-yellow hover:bg-darkGreen">News</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="active:bg-yellow hover:bg-darkGreen">Blog</a>
            </Link>
          </li>
          <li tabIndex={0}>
            <Link href="/support-us">
              <a className="active:bg-yellow hover:bg-darkGreen">
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
                  <a className="active:bg-yellow hover:bg-darkGreen hover:text-bgColor">
                    Volunteer
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/support-us/fund-raising">
                  <a className="active:bg-yellow hover:bg-darkGreen hover:text-bgColor">
                    Fundraising
                  </a>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/contact">
              <a className="active:bg-yellow hover:bg-darkGreen">Contact</a>
            </Link>
          </li>
        </ul>
      </div>

      {/* Donation Button  */}
      <div className="navbar-end">
        <Link href="/donation">
          <a className="btn btn-outline hover:bg-yellow text-yellow border-yellow">
            Donation
          </a>
        </Link>
      </div>

      {/* <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-yellow h-1 w-full -ml-[7px] bottom-0"
      /> */}
    </div>
  );
};

export default index;
