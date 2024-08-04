'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <div className="container">
            {/* Left Logo for Mobile View */}
            <Link href="#" className="navbar-brand cursor-scale small d-lg-none">
              <Image src="/assets/images/logo/logo.png" width={150} height={50} alt="Logo" />
            </Link>

            {/* Toggler for Mobile View */}
            <button
              className={`navbar-toggler ${isOpen ? 'd-none' : ''}`}
              type="button"
              onClick={toggleNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Close button */}
            <button
              className={`navbar-toggler ${isOpen ? '' : 'd-none'}`}
              type="button"
              onClick={closeNavbar}
              aria-controls="navbarSupportedContent"
              aria-expanded={isOpen}
              aria-label="Close navigation"
            >
              <span className="navbar-toggler-close">X</span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
              {/* Left Navigation Menu */}
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="#" className="nav-link cursor-scale">
                      Service
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link cursor-scale">
                     Project
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link cursor-scale">
                    Technology
                  </Link>
                </li>
              </ul>

              {/* Centered Logo for Desktop View */}
              <Link href="#" className="navbar-brand mx-auto d-none d-lg-block cursor-scale">
                <Image src="/assets/images/logo/logo.png" width={150} height={60} className="nav-logo" alt="Logo" />
              </Link>

              {/* Right Navigation Menu */}
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="#" className="nav-link cursor-scale">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link cursor-scale">
                    Insights
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link cursor-scale">
                    Careers
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link href="#" className="nav-link cursor-scale">
                    Contact
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
