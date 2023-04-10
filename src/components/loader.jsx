import React from 'react';
import AnimatedLogo from '../assets/images/logo-animated.gif';

const Loader = () => {
  return (
    <div className='loader'>
        <img className='logo' src={AnimatedLogo} alt="animated logo loader" />
    </div>
  )
}

export default Loader;