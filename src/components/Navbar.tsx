import { INavbar } from '@/interfaces/navbar';
import classNames from 'classnames';
import Image from 'next/image';
import { memo, useEffect, useState } from 'react';
import { MdOutlineDensityMedium, MdClose } from 'react-icons/md';

const Navbar = (props: INavbar) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav
        className={classNames(
          `bg-base-100 hidden md:block px-3 bg-opacity-70 backdrop-blur-xl ${props.className}`
        )}>
        <div className='container mx-auto py-3 flex justify-between items-center'>
          <Image
            src={props.logo.src}
            alt={props.logo.alt}
            width={50}
            height={50}
          />
          <ul className='flex space-x-10 font-medium'>
            {props.menu.map((item, index) => (
              <li
                key={index}
                className={`font-bold ${
                  props.activeSection === index
                    ? 'text-primary'
                    : 'text-secondary'
                }`}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <nav
        className={`bg-base-100 block md:hidden px-6 md:px-0 collapse ${
          open ? 'collapse-open' : 'collapse-close'
        }`}>
        <div className='container mx-auto py-3 flex justify-between items-center'>
          <Image
            src={props.logo.src}
            alt={props.logo.alt}
            width={50}
            height={50}
          />
          <label className={`swap swap-flip text-3xl peer`}>
            <input type='checkbox' onChange={() => setOpen(!open)} />
            <MdOutlineDensityMedium className='swap-off' />
            <MdClose className='swap-on' />
          </label>
        </div>
        <div className={`collapse-content font-medium ${props.className}`}>
          <ul className=''>
            {props.menu.map((item, index) => (
              <li
                key={index}
                className={`py-3 active:text-primary text-secondary`}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default memo(Navbar);
