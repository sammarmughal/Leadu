"use client";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapPin,
  faEnvelope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FaLocationDot } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };
  const isActive = (path) =>
    pathname === path
      ? "bg-[#0c6bac] text-white"
      : "hover:bg-[#0c6bac] hover:text-white";

  const closeMenu = () => {
    setIsOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="relative flex flex-col">
      <section className="justify-center flex h-8 bg-[#0c6bac]">
        <div className="max-w-[1000px] mx-auto w-full justify-end flex items-center">
          <ul className="flex items-center space-x-4 text-sm">
            <li className="flex items-center space-x-2">
              <Link
                href="https://maps.google.com/?q=Sialkot Bypass, Gujranwala"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-700"
                title="View on Google Maps"
              >
                <FaLocationDot className="text-sm items-center flex text-white hover:text-slate-200" />
              </Link>
            </li>
            <li className="flex items-center border-l border-gray-400 pl-4 space-x-2">
              <Link className="hover:text-gray-700" href="mailto:info@leadu.pk">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-sm items-center flex text-white hover:text-slate-200"
                  title="Send an Email"
                />
              </Link>
            </li>
            <li className="flex items-center border-l border-gray-400 pl-4 space-x-2">
              <Link
                href="tel:+92 321 7421808"
                className="hover:text-gray-700"
                title="+92 321 7421808"
              >
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-sm items-center flex text-white hover:text-slate-200"
                />
              </Link>
            </li>
          </ul>
          <ul className="border-l border-gray-400 h-full items-center flex mx-4">
            <li className="flex space-x-4 ml-4">
              <Link
                href="https://www.facebook.com/ShafqatHayatOfficial"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-blue-600"
                aria-label="Follow on Facebook"
                title="Follow on Facebook"
              >
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-sm items-center flex text-white hover:text-slate-200"
                />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCuaofzj85lke8ecwJV2grhw/videos"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="hover:text-red-600"
                title="Follow on YouTube"
              >
                <FontAwesomeIcon
                  icon={faYoutube}
                  className="text-sm items-center flex text-white hover:text-slate-200"
                />
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="relative">
        <div className="w-full bg-white shadow-md top-0 z-50">
          <div className="flex max-w-[1100px] lg:mx-auto lg:justify-around sm:px-20 px-6 justify-between items-center w-full md:h-28 lg:px-4">
            <Link href="/">
              <Image
                src="/leadu-logo.png"
                alt="LEAD U"
                width={100}
                height={55}
                className="cursor-pointer h-full p-2 sm:p-0"
                title="LEAD U"
              />
            </Link>
            <div className="lg:hidden">
              <svg
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8 text-white p-2 rounded-full bg-[#0c6bac]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>

            <div className="hidden lg:flex w-full justify-center ml-8">
              <ul className="flex flex-row text-[#0c6bac] uppercase whitespace-nowrap font-bold text-sm items-center">
                <li className="relative group">
                  <Link
                    href="/"
                    className={`${isActive("/")} rounded-full py-1 px-3`}
                  >
                    Home
                  </Link>
                </li>
                <li className="relative group">
                  <div
                    onMouseEnter={() => toggleDropdown("about us")}
                    className={`rounded-full py-1 px-3 flex items-center gap-2 cursor-pointer ${
                      isActive("/about-us") || isActive("/contact-us")
                        ? "hover:bg-[#0c6bac] hover:text-white"
                        : ""
                    }`}
                  >
                    About Lead
                    <MdKeyboardArrowDown className="text-neutral-500" />
                  </div>
                  {openDropdown === "about us" && (
                    <ul
                      className="absolute z-20 left-0 mt-2 p-2 w-48 bg-white text-neutral-500 normal-case font-light shadow-md rounded"
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      <li className="hover:bg-[#0c6bac] hover:text-white my-1 rounded-full py-1 px-3">
                        <Link href="/about-us">About Us</Link>
                      </li>
                      <li className="hover:bg-[#0c6bac] hover:text-white my-1 rounded-full py-1 px-3">
                        <Link href="/contact-us">Contact Us</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative group">
                  <div
                    onMouseEnter={() => toggleDropdown("courses")}
                    className={`rounded-full py-1 px-3 flex items-center gap-2 cursor-pointer ${
                      isActive("/takhasus-fil-quran")
                        ? "hover:bg-[#0c6bac] hover:text-white"
                        : ""
                    }`}
                  >
                    Courses
                    <MdKeyboardArrowDown className="text-neutral-500" />
                  </div>
                  {openDropdown === "courses" && (
                    <ul
                      className="absolute z-20 left-0 mt-2 p-2 w-max bg-white text-neutral-500 normal-case font-light shadow-md rounded"
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      <li className="hover:bg-[#0c6bac] hover:text-white my-1 rounded-full py-1 px-3">
                        <Link href="/takhasus-fil-quran">
                          Al’ Takhasus Fil Quran Wa’ Tafseer
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative group">
                  <div
                    onMouseEnter={() => toggleDropdown("admissions")}
                    className={`rounded-full py-1 px-3 flex gap-2 items-center cursor-pointer  ${
                      isActive("/admissions")
                        ? "hover:bg-[#0c6bac] hover:text-white"
                        : ""
                    }`}
                  >
                    Admissions
                    <MdKeyboardArrowDown className="text-neutral-500" />
                  </div>
                  {openDropdown === "admissions" && (
                    <ul
                      className="absolute z-20 left-0 mt-2 p-2 w-max bg-white text-neutral-500 normal-case font-light shadow-md rounded"
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="/leadu-prospectus-final.pdf"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        >
                          Download Prospectus
                        </Link>
                      </li>
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="/admission-form.pdf"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        >
                          Download Admission Form{" "}
                        </Link>
                      </li>
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="/admissions"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer ${isActive(
                            "/admissions"
                          )}`}
                        >
                          Apply Now{" "}
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative group">
                  <div
                    onMouseEnter={() => toggleDropdown("Media")}
                    className={`rounded-full py-1 px-3 flex gap-2 items-center cursor-pointer  ${
                      isActive("/audios") || isActive("/videos")
                        ? "hover:bg-[#0c6bac] hover:text-white"
                        : ""
                    }`}
                  >
                    Media
                    <MdKeyboardArrowDown className="text-neutral-500" />
                  </div>
                  {openDropdown === "Media" && (
                    <ul
                      className="absolute z-20 left-0 mt-2 p-2 w-48 bg-white text-neutral-500 normal-case font-light shadow-md rounded"
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="/audios"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        >
                          Audios
                        </Link>
                      </li>
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="/videos"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        >
                          Videos
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative group">
                  <div
                    onMouseEnter={() => toggleDropdown("e-library")}
                    className={`rounded-full py-1 px-3 hover:bg-[#0c6bac] hover:text-white flex gap-2 items-center cursor-pointer${
                      isActive("#") || isActive("#") || isActive("#")
                        ? "hover:bg-[#0c6bac] "
                        : ""
                    }`}
                  >
                    E-library
                    <MdKeyboardArrowDown className="text-neutral-500" />
                  </div>
                  {openDropdown === "e-library" && (
                    <ul
                      className="absolute z-20 left-0 mt-2 p-2 w-48 bg-white text-neutral-500 normal-case font-light shadow-md rounded"
                      onMouseLeave={() => toggleDropdown(null)}
                    >
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="#"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        >
                          E-Quran
                        </Link>
                      </li>
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="#"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        >
                          E-Hadith
                        </Link>
                      </li>
                      <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                        <Link
                          href="#"
                          className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        >
                          Others
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="relative group">
                  <Link
                    href="/learning"
                    className={`${isActive("/learning")} rounded-full p-2`}
                  >
                    Learning
                  </Link>
                </li>
              </ul>
            </div>
            <Link href="/admissions" className="md:ml-4 lg:block hidden">
              <button className="rounded-full py-1 text-white whitespace-nowrap px-3 flex gap-2 items-center bg-[#73b5e0] hover:bg-[#5085a6] cursor-pointer">
                Apply Now
              </button>
            </Link>
          </div>
        </div>
      </section>
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden block">
          <div
            className="absolute inset-0 bg-black opacity-50"
            onClick={toggleMenu}
          ></div>
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 mt-4 ml-2 text-neutral-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
          <div className="absolute right-0 top-0 bg-white shadow h-full w-2/3 sm:w-1/3 z-50 p-4">
            <ul className="mt-4 space-y-4 text-neutral-500">
              <li className="relative group">
                <Link
                  href="/"
                  className={`${isActive("/")} rounded-full py-1 px-3`}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li className="relative group">
                <div
                  className={`rounded-full py-1 px-3 justify-between flex items-center gap-2 cursor-pointer ${
                    isActive("/about-us") || isActive("/contact-us")
                      ? "hover:bg-[#0c6bac] hover:text-white"
                      : ""
                  }`}
                >
                  About Lead
                  <MdKeyboardArrowDown
                    onClick={() => toggleDropdown("about us")}
                    className={`text-neutral-500 group-hover:text-white transform transition-transform ${
                      openDropdown === "about us" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === "about us" && (
                  <ul className="mt-2 p-2 text-neutral-500 normal-case font-light">
                    <li className="hover:bg-[#0c6bac] hover:text-white my-1 rounded-full py-1 px-3">
                      <Link href="/about-us"   onClick={closeMenu}>About Us</Link>
                    </li>
                    <li className="hover:bg-[#0c6bac] hover:text-white my-1 rounded-full py-1 px-3">
                      <Link href="/contact-us"   onClick={closeMenu}>Contact Us</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <div
                  className={`rounded-full justify-between py-1 px-3 flex items-center gap-2 cursor-pointer ${
                    isActive("/takhasus-fil-quran")
                      ? "hover:bg-[#0c6bac] hover:text-white"
                      : ""
                  }`}
                >
                  Courses
                  <MdKeyboardArrowDown
                    onClick={() => toggleDropdown("courses")}
                    className={`text-neutral-500 group-hover:text-white transform transition-transform ${
                      openDropdown === "courses" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === "courses" && (
                  <ul className="mt-2 p-2 text-neutral-500 normal-case font-light">
                    <li className="hover:bg-[#0c6bac] hover:text-white my-1 rounded-full py-1 px-3">
                      <Link href="/takhasus-fil-quran"   onClick={closeMenu}>
                        Al’ Takhasus Fil Quran Wa’ Tafseer
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <div
                  className={`rounded-full justify-between py-1 px-3 flex gap-2 items-center cursor-pointer ${
                    isActive("/admissions")
                      ? "hover:bg-[#0c6bac] hover:text-white"
                      : ""
                  }`}
                >
                  Admissions
                  <MdKeyboardArrowDown
                    onClick={() => toggleDropdown("admissions")}
                    className={`text-neutral-500 group-hover:text-white transform transition-transform ${
                      openDropdown === "admissions" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === "admissions" && (
                  <ul className="mt-2 p-2 text-neutral-500 normal-case font-light">
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="/leadu-prospectus-final.pdf"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                      >
                        Download Prospectus
                      </Link>
                    </li>
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="/admission-form.pdf"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                      >
                        Download Admission Form{" "}
                      </Link>
                    </li>
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="/admissions"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer ${isActive(
                          "/admissions"
                        )}`}   onClick={closeMenu}
                      >
                        Apply Now{" "}
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <div
                  className={`rounded-full justify-between py-1 px-3 flex gap-2 items-center cursor-pointer ${
                    isActive("/audios") || isActive("/videos")
                      ? "hover:bg-[#0c6bac] hover:text-white"
                      : ""
                  }`}
                >
                  Media
                  <MdKeyboardArrowDown
                    onClick={() => toggleDropdown("Media")}
                    className={`text-neutral-500 group-hover:text-white transform transition-transform ${
                      openDropdown === "Media" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === "Media" && (
                  <ul className="mt-2 p-2 text-neutral-500 normal-case font-light">
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="/audios"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        onClick={closeMenu}
                      >
                        Audios
                      </Link>
                    </li>
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="/videos"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                        onClick={closeMenu}
                      >
                        Videos
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <div
                  className={`rounded-full py-1 px-3 hover:bg-[#0c6bac] justify-between hover:text-white flex gap-2 items-center cursor-pointer${
                    isActive("#") || isActive("#") || isActive("#")
                      ? "hover:bg-[#0c6bac] "
                      : ""
                  }`}
                >
                  E-library
                  <MdKeyboardArrowDown
                    onClick={() => toggleDropdown("e-library")}
                    className={`text-neutral-500 group-hover:text-white transform transition-transform ${
                      openDropdown === "e-library" ? "rotate-180" : ""
                    }`}
                  />
                </div>
                {openDropdown === "e-library" && (
                  <ul className="mt-2 p-2 text-neutral-500 normal-case font-light">
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="#"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                      >
                        E-Quran
                      </Link>
                    </li>
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="#"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                      >
                        E-Hadith
                      </Link>
                    </li>
                    <li className="hover:bg-[#0c6bac] hover:text-white rounded-full my-1 py-1 px-3">
                      <Link
                        href="#"
                        className={`rounded-full py-1 px-3 flex items-center cursor-pointer`}
                      >
                        Others
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative group">
                <Link
                  href="/learning"
                  className={`${isActive("/learning")} rounded-full p-2`}
                >
                  Learning
                </Link>
              </li>
              <Link href="/admissions" className="md:ml-4 mt-6"   onClick={closeMenu}>
                <button className="rounded-full py-1 mt-6 text-white whitespace-nowrap px-3 flex gap-2 items-center bg-[#73b5e0] hover:bg-[#5085a6] cursor-pointer">
                  Apply Now
                </button>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}
