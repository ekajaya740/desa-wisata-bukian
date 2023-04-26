import { IFooter } from '@/interfaces/footer';
import classNames from 'classnames';
import Link from 'next/link';
import { memo } from 'react';
import { RiInstagramFill, RiWhatsappFill } from 'react-icons/ri';

const Footer = (props: IFooter) => {
  return (
    <footer
      className={classNames(
        `bg-primary text-base-100 mt-10 ${props.className}`
      )}>
      <div className='container mx-auto py-10 px-3 md:px-0 flex space-y-3 flex-col md:flex-row md:space-y-0 justify-between'>
        <div className='space-y-2 md:basis-1/2'>
          <h2
            className='
            text-2xl
            font-bold
          '>
            Profil
          </h2>
          <div className='space-y-1'>
            <h3 className='text-md font-semibold'>
              Desa Bukian - Kecamatan Payangan - Kabupaten Gianyar - Bali
            </h3>
            <p className='text-sm'>
              Desa Bukian terletak di Kecamatan Payangan, Kabupaten Gianyar,
              Provinsi Bali. Ketika mendengar kata Desa Bukian mungkin masih
              terasa asing ditelinga para wisatawan. Desa Bukian memiliki
              potensi yang beragam mulai dari budaya, alam dan wisata buatan
              yang dapat dikembangkan sebaga daya tarik wisata. Karya seni pun
              dapat ditemukan disini. Desa Bukian berjarak kurang lebih 20 menit
              perjalanan dari Desa Ubud.
            </p>
          </div>
        </div>
        <div className='space-y-2 md:basis-1/4'>
          <h2 className='text-2xl font-bold'>Kontak Kami</h2>
          <ul className='space-y-1 text-md'>
            <li className='flex items-center space-x-1'>
              <RiInstagramFill className='text-lg' />
              <Link
                href={'https://www.instagram.com/jagat_bukian/'}
                className='hover:underline'
                target='_blank'>
                @jagatbukian
              </Link>
            </li>
            <li className='flex items-center space-x-1'>
              <RiWhatsappFill className='text-lg' />
              <Link
                href={'https://wa.me/62881037246997'}
                className='hover:underline'
                target='_blank'>
                0881037246997
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
