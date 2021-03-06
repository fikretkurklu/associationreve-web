// import Link from 'next/link'
import React, { useState } from 'react'

import styles from '../../styles/components/NavBar.module.css'
import NavLink from './NavLink'

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  return (
    <nav className="fixed z-50 flex w-full flex-wrap items-center bg-white">
      <a className="logo-image mr-4 inline-flex items-center p-2">
        {/* <img src="student.svg" width={60} className="mr-3" /> */}
        <span className={styles.title + ' text-2xl font-medium tracking-tight'}>
          ASSOCIATION REVE
        </span>
        <span
          className={
            styles.titleMobile + ' text-2xl font-medium tracking-tight'
          }
        >
          A. REVE
        </span>
      </a>
      {/* <button
        onClick={handleClick}
        className=" ml-auto inline-flex rounded p-3 text-black outline-none hover:bg-sky-600 hover:text-white lg:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button> */}
      <div
        className={`${
          active ? '' : 'hidden'
        }   w-full lg:inline-flex lg:w-auto lg:flex-grow`}
      >
        <div className="flex w-full flex-col items-start lg:ml-auto lg:inline-flex lg:h-auto  lg:w-auto lg:flex-row lg:items-center">
          <NavLink
            to="introduction"
            styleData={styles.navLink}
            title="Présentation"
          />
          <NavLink to="activity" styleData={styles.navLink} title="Activité" />
          <NavLink to="team" styleData={styles.navLink} title="Équipe" />
          <NavLink
            to="subscribe"
            styleData={styles.navLink}
            title="Devenir Adhérent"
          />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
