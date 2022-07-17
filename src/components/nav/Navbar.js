import React, { useEffect, useRef, useState } from 'react'
import NavLink from './NavLink'
import { navLinks } from './NavLinks'
import './Nav.css';
import personalDetails from '../pages/PersonalDetails';

export default function Navbar({ navLinkId, scrollToId }) {
  const [state, setState] = useState(false)
  const navRef = useRef()

  
  
    

  return (
      <nav ref={navRef} className="bg-white w-full top-0 z-20 position: sticky">
          <div className="items-center px-4 max-w-screen-xl mx-auto lg:flex lg:px-8">
              <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
                    <a href="#">
                        МСКВЫВОЗ
                    </a>
                    <div className="lg:hidden">
                        <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
              </div>
              <div className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${ state ? 'h-screen pb-20 overflow-auto pr-4' : 'hidden'}`}>
                    <div>
                        <ul className="flex flex-col-reverse space-x-0 lg:space-x-6 lg:flex-row">
                            
                            <li className="mt-4 lg:mt-0">
                                <a href="https://www.avito.ru/user/cdcd1949c73202fdc2ee56b8c58bc3fd/profile?src=sharing" className="py-3 px-4 text-center border text-gray-600 hover:text-gray-800 rounded-md block lg:inline lg:border-0">
                                    Авито
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="flex-1">
                        <nav className="justify-center sm:display-table items-center space-y-8 lg:flex lg:space-x-6 lg:space-y-0">
                            
                                
                                    {navLinks.map(({ navLinkId, scrollToId }, idx) => (
                                        <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
                                    ))}
                                
                            
                        </nav>
                    </div>
              </div>
          </div>
      </nav>
  )
}