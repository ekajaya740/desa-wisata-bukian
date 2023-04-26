import ImageCarousel from '@/components/ImageCarousel';
import { IImageCarousel } from '@/interfaces/image-carousel';
import useSWR from 'swr';
import Layout from '@/components/Layout';
import TentangDesa from '@/components/home/TentangDesa';
import PotensiDesa from '@/components/home/PotensiDesa';
import { fetcher } from '@/helper/fetcher';
import LetakDesa from '@/components/home/LetakDesa';
import useScrollSpy from 'react-use-scrollspy';
import { useRef } from 'react';
import { Lora, Merriweather } from 'next/font/google';

const lora = Merriweather({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
});

export default function Index() {
  const { data, error } = useSWR<IImageCarousel>(
    'api/home/main-carousel',
    fetcher
  );

  const sectionRefs = [useRef(null), useRef(null), useRef(null)];

  const activeSection = useScrollSpy({
    sectionElementRefs: sectionRefs,
    offsetPx: -100,
  });

  if (error) return <div>Failed to load</div>;

  if (!data)
    return (
      <div className='w-screen h-screen flex justify-center items-center bg-red-50'>
        <div className='animate-ping w-24 h-24 bg-primary rounded-full'></div>
      </div>
    );

  return (
    <Layout
      navbarProps={{
        ...{
          logo: {
            src: '/logo.png',
            alt: 'Logo Desa Bukian',
          },
          menu: [
            {
              name: 'Tentang',
              link: '#tentang',
            },
            {
              name: 'Letak',
              link: '#letak',
            },
            {
              name: 'Potensi',
              link: '#potensi',
            },
          ],
          activeSection: activeSection,
        },
      }}
      className={lora.className}>
      <section className='pb-8'>
        <ImageCarousel
          {...data}
          settings={{
            autoplay: true,
            autoplaySpeed: 5000,
            dots: true,
            infinite: true,
          }}
        />
      </section>
      <section
        className='md:py-8 scroll-my-16 py-3 px-3 lg:px-0'
        id='tentang'
        ref={sectionRefs[0]}>
        <TentangDesa />
      </section>
      <section
        className='md:py-8 scroll-my-16 py-3 px-3 lg:px-0'
        id='letak'
        ref={sectionRefs[1]}>
        <LetakDesa />
      </section>
      <section
        className='md:py-8 scroll-my-16 py-3 px-3 lg:px-0'
        id='potensi'
        ref={sectionRefs[2]}>
        <PotensiDesa />
      </section>
    </Layout>
  );
}
