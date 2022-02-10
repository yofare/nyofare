import React from 'react';
import Link from 'next/link';
function Header() {
  return ( 
  <>
      <div classNameName="sticky top-0 z-50 scroll-smooth">
            <nav className="flex w-screen navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                <Link href="/">
                <span className="navbar-brand p-0">
                    <h1 className="text-green-500 m-0 text-4xl font-bold"><i className="fa fa-utensils me-3"></i>Yofare</h1>
                </span>
                </Link>
                <button className="navbar-toggler bg-green-500" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="fa fa-bars"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarCollapse">
                    <div className="navbar-nav ms-auto py-0 pe-4">
                        <Link href="#driver">
                        <span  className="nav-item nav-link text-green-500">Driver</span>
                        </Link>
                        <Link href="#passenger">
                        <span  className="nav-item nav-link text-green-500">Passenger</span>
                        </Link>
                        <Link href="#bodaLoans">
                        <span  className="nav-item nav-link text-green-500">BodaLoans</span>
                        </Link>
                    </div>
                    <Link href="">
                    <span  className="py-2 px-4 bg-green-500 hover:bg-white text-gray-50">Download</span>
                    </Link>
                </div>
            </nav>    
            </div>
  </>
    )
}
export default Header;
