// import React from 'react'
import { FaSearch } from "react-icons/fa"
import MegaProjectLogo from "./../../assets/images/megaproject.png"
import { Link } from "react-router-dom"

const Navigation = () => {
  const navLink = [
    {
      id: 0,
      name: "Country"
    },
    {
      id: 1,
      name: "megaproject"
    },
    {
      id: 2,
      name: "news"
    },
    {
      id: 3,
      name: "particpants"
    },
    {
      id: 4,
      name: "service"
    },
  ]
  return (
    <header>
      <section className="md:grid md:grid-flow-col justify-between items-center">
        <div className="max-h-32 max-w-lg mx-auto md:mx-0 relative -z-[1]">
          <img src={MegaProjectLogo} alt="Mega project logo" className=""/>
        </div>

        <form id="search-form" role="search" className='mx-2 px-2 text-center md:text-left'>
          <label htmlFor="Search" className='relative'>
            <input type="search" name="Search" id="Search" placeholder={"search"} aria-label="Search"/>
            <span className='absolute right-1 inset-y-0 grid items-center justify-center pl-3 p-px mx-1.5 border-0 border-l-2 border-solid border-[#57068c]'>
              <FaSearch className='inline-block text-lg cursor-pointer'/>
            </span>
          </label>
        </form>
      </section>

      <nav className="mainColor">
        <ul className="grid grid-flow-col px-5 py-2 text-center max-w-5xl mx-auto">
          {navLink.map((link) => {

            return (
              <li key={link.id} className="text-white font-lora font-medium text-2xl uppercase tracking-wider">
                <Link to={"/"}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navigation
