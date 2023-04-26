import ImageCarousel from '@/components/ImageCarousel';
import { IImageCarousel } from '@/interfaces/image-carousel';
import useSWR from 'swr';
import Layout from '@/components/Layout';
import TentangDesa from '@/components/home/TentangDesa';
import PotensiDesa from '@/components/home/PotensiDesa';
import { fetcher } from '@/helper/fetcher';

export default function Index() {
  const { data, error } = useSWR<IImageCarousel>(
    'api/home/main-carousel',
    fetcher
  );

  if (error) return <div>Failed to load</div>;

  if (!data) return <div>Loading...</div>;

  return (
    <Layout>
      <section className='pb-5 overflow-x-hidden'>
        <ImageCarousel {...data} />
      </section>
      <section className='py-5'>
        <TentangDesa />
      </section>
      <section className='py-5'>
        <PotensiDesa />
      </section>
    </Layout>
  );
}
