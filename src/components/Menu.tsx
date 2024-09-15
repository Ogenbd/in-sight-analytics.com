"use client";
import { useAnimate } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navButtonClass =
  "h-full text-xl text-white font-semibold hover:text-lightgold transition flex items-center";
const socialClass = "h-full hover:text-lightgold transition flex items-center";
const burgerClass =
  "bg-lightgold block h-1 w-6 rounded-sm transition-all duration-300 ease-out";
const burgerNavButtonClass = "text-xl text-white font-semibold opacity-0 py-4";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();

  const handleOpen = async () => {
    setIsOpen(true);
    animate(scope.current, { y: "100%" }, { bounce: 0, duration: 0.2 });
    await animate("#linka", { opacity: 1 }, { duration: 0.2, delay: 0.1 });
    await animate("#linkb", { opacity: 1 }, { duration: 0.2 });
    await animate("#linkc", { opacity: 1 }, { duration: 0.2 });
    await animate("#linkd", { opacity: 1 }, { duration: 0.2 });
  };

  const handleClose = async () => {
    setIsOpen(false);
    animate("#linkd", { opacity: 0 }, { duration: 0.1 });
    animate("#linkc", { opacity: 0 }, { duration: 0.1 });
    animate("#linkb", { opacity: 0 }, { duration: 0.1 });
    await animate("#linka", { opacity: 0 }, { duration: 0.1 });
    animate(scope.current, { y: 0 }, { bounce: 0, duration: 0.2 });
  };

  return (
    <>
      <div
        ref={scope}
        className="fixed -top-full z-50 flex h-screen w-full flex-col items-center justify-evenly bg-black pt-14 sm:hidden"
      >
        <Link
          id="linka"
          href="/irule"
          className={burgerNavButtonClass}
          onClick={handleClose}
        >
          IRULE
        </Link>
        <Link
          id="linkb"
          href="/#aboutus"
          className={burgerNavButtonClass}
          onClick={handleClose}
        >
          ABOUT US
        </Link>
        <Link
          id="linkc"
          href="/#contact"
          className={burgerNavButtonClass}
          onClick={handleClose}
        >
          CONTACT
        </Link>
        <div
          id="linkd"
          className="flex items-center gap-8 text-white opacity-0"
        >
          <a
            href="https://www.facebook.com/InSightAnalyticsIL"
            className={socialClass}
            onClick={handleClose}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <title>Facebook</title>
              <path
                fill="currentColor"
                d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/27054367"
            className={socialClass}
            onClick={handleClose}
          >
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
            >
              <title>LinkedIn</title>
              <path
                fill="currentColor"
                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
            </svg>
          </a>
        </div>
      </div>
      <div className="fixed z-50 flex w-full justify-center bg-black">
        <div className="flex w-page max-w-full justify-between pr-1">
          <Link href="/" className="flex items-center p-1">
            <Image
              src="/images/ialogo.jpg"
              width={64}
              height={64}
              alt="ialogo"
            />
            <h1 className="inline-block w-36 bg-gradient-to-b from-lightgold to-darkgold bg-clip-text text-2xl font-bold leading-6 text-transparent">
              IN SIGHT ANALYTICS
            </h1>
          </Link>
          <div className="hidden items-center gap-8 sm:flex">
            <Link href="/irule" className={navButtonClass}>
              IRULE
            </Link>
            <Link href="/#aboutus" className={navButtonClass}>
              ABOUT US
            </Link>
            <Link href="/#contact" className={navButtonClass}>
              CONTACT
            </Link>
            <div className="flex h-full items-center gap-3 text-white">
              <a
                href="https://www.facebook.com/InSightAnalyticsIL"
                className={socialClass}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <title>Facebook</title>
                  <path
                    fill="currentColor"
                    d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"
                  />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/27054367"
                className={socialClass}
              >
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                >
                  <title>LinkedIn</title>
                  <path
                    fill="currentColor"
                    d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <button
            className="flex items-center p-3 sm:hidden"
            onClick={isOpen ? () => handleClose() : () => handleOpen()}
          >
            <div className="flex flex-col items-center justify-center">
              <span
                className={`${burgerClass} ${
                  isOpen ? "translate-y-1 rotate-45" : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`${burgerClass} ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`${burgerClass} ${
                  isOpen ? "-translate-y-1 -rotate-45" : "translate-y-0.5"
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
