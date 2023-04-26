import Image from 'next/image';
import { memo } from 'react';

const Navbar = () => {
  return (
    <nav className='bg-base-100'>
      <div className='container mx-auto py-3 flex justify-between items-center'>
        <Image src={'/logo.png'} alt={''} width={50} height={50} />
        <ul className='flex space-x-10 font-medium text-secondary'>
          <li>Profil</li>
          <li>Letak</li>
          <li>Profil Desa</li>
        </ul>
      </div>
    </nav>
  );
};

export default memo(Navbar);
