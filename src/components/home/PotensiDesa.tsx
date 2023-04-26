import useSWR from 'swr';
import ImageCarousel from '../ImageCarousel';
import { fetcher } from '@/helper/fetcher';
import { IImageCarousel } from '@/interfaces/image-carousel';

const PotensiDesa = () => {
  const { data, error } = useSWR<IImageCarousel>(
    '/api/home/potensi-carousel',
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <div className='container space-y-2 mx-auto'>
      <h1 className='text-3xl font-bold'>Potensi Desa Bukian</h1>
      <ImageCarousel {...data} />
      <div className='space-y-1 text-md text-justify'>
        <p>
          Desa Bukian dengan luas wilayah 637,15 hektar memiliki sumber daya
          alam yang dapat dikembangkan sebagai potensi desa wisata. Secara
          geografis Desa Bukian terletak didesa yang berada dalam kawasan
          Ekowisata Desa Taro dan Desa Kerta, dekat pula dengan Desa Ubud dan
          Tegalalang yang sudah lebih dulu menjadi destinasi wisata.
        </p>
      </div>
    </div>
  );
};

export default PotensiDesa;
