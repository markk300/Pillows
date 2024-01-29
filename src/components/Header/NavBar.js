import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/Icons/Logo.png'
import Search from '../../assets/Icons/search.png'
import Sleep from '../../assets/Icons/sleep.png'
import Cart from '../../assets/Icons/shopping-cart.png'
import Bars from '../../assets/Icons/bars.png'
import Close from '../../assets/Icons/close.png'


const Navbar = () => {
 const [nav, setNav] = useState(false);
 const [search, setSearch] = useState(false);

 const handleSearch = () => {
    setSearch(!search);
 }

 const handleNav = () => {
    setNav(!nav);
 };

 const navItems = [
    { id: 1, text: 'Pillows', to: '/pillows' },
    { id: 2, text: 'Hotel Bedding', to: '/hotel-bedding' },
    { id: 3, text: 'Shop By Brand', to: '/shop-by-brand' },
    { id: 4, text: 'Shop All Products', to: '/shop-all-products' },
    { id: 5, text: 'Pillow Finder', to: '/pillow-finder' },
    { id: 6, text: 'Sale', to: '/sale' },
 ];

 return (
    <div className='bg-white flex justify-between md:flex-wrap md:justify-around items-center h-[78px]  mx-auto  text-primary'>
      <NavLink to='/'><img src={Logo} alt='Site logo' className='w-[165px]' /></NavLink>

      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className={`p-4 text-sm font-semibold hover:text-cyan-700 rounded-xl m-2 md:m-0 xl:m-2 cursor-pointer duration-300 ${item.text === 'Sale' ? 'text-red-500' : ''} `}
          >
            <NavLink to={item.to}>{item.text}</NavLink>
          </li>
          
        ))}
      </ul>
      <div className='hidden md:flex md:gap-2 xl:gap-3 md:w-5 xl:w-6 mr-1 cursor-pointer  '>
        <img src={Search} onClick={handleSearch} alt='Search icon' />
        <img src={Sleep} alt='Sleep icon' />
        <img src={Cart} alt='Cart icon' />
      </div>
      <div className=' '>
        {search ? <input className='border-2 rounded-md border-slate-950'></input> : ""}
        {search && <button onClick={handleSearch}>X</button>}
      </div>

      <div onClick={handleNav} className='block md:hidden w-7 mx-5 '>
        {nav ? <img src={Close} alt='close icon' /> : <img src={Bars} alt='bars icon' />}
      </div>

      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-700 bg-promotion ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
      >
        <NavLink to='/'><img src={Logo} alt='Site logo' className='w-[300px]' /></NavLink>

        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-slate-300 duration-300 text-primary hover:text-black cursor-pointer border-gray-600'
          >
            <NavLink to={item.to}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
      
    </div>
 );
};

export default Navbar;
