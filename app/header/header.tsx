"use client";

import classes from "./header.module.css";
import Image from "next/image";
import imageAvatar from "../../public/Images/imageAvatar.svg";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  // Navigate
  const navigate = useRouter();
  const pathname = usePathname();

  const navItems: string[] = [
    "Collections",
    "Men",
    "Women",
    "About",
    "Contact",
  ];

  const openSideNav = (): void => {
    const sideNav: HTMLElement | null = document.getElementById("sideNav");
    if (sideNav) sideNav.style.width = "50%";
  };

  const closeNav = (): void => {
    const sideNav: HTMLElement | null = document.getElementById("sideNav");
    if (sideNav) sideNav.style.width = "0%";
  };

  return (
    <div className={classes.outerContainer}>
      <div className={classes.container}>
        <div className={classes.hamburgerMenu}></div>
        <div className={classes.logoSection}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            onClick={openSideNav}
          >
            <g clip-path="url(#clip0_8_99)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16 12V15H0V12H16ZM16 6V9H0V6H16ZM16 0V3H0V0H16Z"
                fill="#69707D"
              />
            </g>
            <defs>
              <clipPath id="clip0_8_99">
                <rect width="16" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p>sneakers</p>
        </div>
        <div className={classes.nav}>
          {navItems.map((navItem, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                  navigate.push(`/${navItem.toLowerCase()}`);
                }}
                className={
                  pathname.toLowerCase().includes(navItem.toLowerCase())
                    ? classes.active
                    : classes.inActive
                }
              >
                {navItem}
              </div>
            );
          })}
        </div>
        <div className={classes.profileAndNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="21"
            viewBox="0 0 22 21"
            fill="none"
            className={classes.cart}
          >
            <g clip-path="url(#clip0_203_427)">
              <path
                d="M20.925 4.141H3.86298L3.60998 1.316C3.58999 1.09301 3.48724 0.885582 3.32196 0.734558C3.15669 0.583533 2.94086 0.499856 2.71698 0.5H0.896977C0.659343 0.5 0.431441 0.5944 0.263409 0.762433C0.0953763 0.930465 0.000976563 1.15837 0.000976562 1.396C0.000976563 1.63363 0.0953763 1.86154 0.263409 2.02957C0.431441 2.1976 0.659343 2.292 0.896977 2.292H1.89698L2.92798 13.775C3.00098 14.603 3.44798 15.501 4.21898 16.111C2.82998 17.885 4.09898 20.5 6.35898 20.5C8.23398 20.5 9.55598 18.63 8.91298 16.858H13.818C13.176 18.628 14.495 20.5 16.373 20.5C17.0933 20.4992 17.7839 20.2127 18.2933 19.7033C18.8027 19.194 19.0892 18.5034 19.09 17.783C19.0892 17.0627 18.8027 16.372 18.2933 15.8627C17.7839 15.3533 17.0933 15.0668 16.373 15.066H6.36498C5.68398 15.066 5.09098 14.656 4.83498 14.057L19.156 13.215C19.3465 13.2039 19.5285 13.1322 19.6755 13.0104C19.8224 12.8887 19.9267 12.7231 19.973 12.538L21.794 5.255C21.8269 5.12281 21.8293 4.98485 21.801 4.85159C21.7727 4.71833 21.7144 4.59326 21.6306 4.48589C21.5467 4.37852 21.4395 4.29166 21.3171 4.2319C21.1946 4.17214 21.0602 4.14105 20.924 4.141H20.925ZM6.35798 18.708C6.12009 18.6969 5.89561 18.5946 5.73118 18.4224C5.56675 18.2501 5.475 18.0211 5.475 17.783C5.475 17.5449 5.56675 17.3159 5.73118 17.1436C5.89561 16.9714 6.12009 16.8691 6.35798 16.858C6.59586 16.8691 6.82034 16.9714 6.98477 17.1436C7.14921 17.3159 7.24095 17.5449 7.24095 17.783C7.24095 18.0211 7.14921 18.2501 6.98477 18.4224C6.82034 18.5946 6.59586 18.6969 6.35798 18.708ZM16.373 18.708C16.1351 18.6969 15.9106 18.5946 15.7462 18.4224C15.5817 18.2501 15.49 18.0211 15.49 17.783C15.49 17.5449 15.5817 17.3159 15.7462 17.1436C15.9106 16.9714 16.1351 16.8691 16.373 16.858C16.6109 16.8691 16.8353 16.9714 16.9998 17.1436C17.1642 17.3159 17.256 17.5449 17.256 17.783C17.256 18.0211 17.1642 18.2501 16.9998 18.4224C16.8353 18.5946 16.6109 18.6969 16.373 18.708ZM18.394 11.465L4.59398 12.275L4.02398 5.934H19.777L18.394 11.464V11.465Z"
                fill="#68707D"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_427">
                <rect
                  width="22"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>

          <Image
            src={imageAvatar}
            alt="Avatar"
            className={classes.profileImage}
          />
        </div>
      </div>
      <div className={classes.sideNav} id="sideNav">
        <div className={classes.close}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="#000000"
            onClick={closeNav}
          >
            <g clip-path="url(#clip0_203_253)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.596 0.781982L13.718 2.90398L9.11998 7.49898L13.717 12.096L11.595 14.218L6.99998 9.61998L2.40498 14.217L0.282982 12.095L4.87798 7.49998L0.281982 2.90398L2.40398 0.781982L6.99898 5.37798L11.596 0.781982Z"
                fill="#68707D"
              />
            </g>
            <defs>
              <clipPath id="clip0_203_253">
                <rect width="14" height="15" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className={classes.navLinks}>
          {navItems.map((navItem, i) => {
            return (
              <Link key={i} href={`/${navItem.toLowerCase()}`}>
                {navItem}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;