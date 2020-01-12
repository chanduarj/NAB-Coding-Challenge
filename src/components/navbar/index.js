import React from 'react';

const Navbar = () => {
  const displayCompanyInfo = () => {

    return<div className='company-details'>
       <span className='company-title'> Coin Base Market</span>
       <span className='company-moto'> We Trade Crypto Currency</span>
      </div>

  }
    return(
        <nav className="navbar bg-dark">
      {displayCompanyInfo()} 
    </nav>
    )
}

export default Navbar;
