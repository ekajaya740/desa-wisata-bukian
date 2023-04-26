import { IImageCarousel } from '@/interfaces/image-carousel';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

const ImageCarousel = (props: IImageCarousel) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((current) =>
      current === props['carousel'].length - 1 ? 0 : current + 1
    );
  };
  const prev = () => {
    setCurrent((current) =>
      current === 0 ? props['carousel'].length - 1 : current - 1
    );
  };

  console.log(current);

  return (
    <>
      <div className='relative '>
        <div
          className={`carousel max-w-full h-[600px] -translate-x-[${
            current * 100
          }%]`}>
          {props['carousel'].map((item, index) => {
            return (
              <div
                id={`slide-${index}`}
                key={index}
                className={`carousel-item w-full `}>
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  className='w-full object-fill'
                  height={5000}
                  width={5000}
                />
              </div>
            );
          })}
        </div>
        <div className='absolute w-full top-1/2 transform px-10'>
          <div className='flex justify-between'>
            <a onClick={prev} href={`#slide-${current}`}>
              <FaChevronCircleLeft className='text-4xl text-secondary bg-base-100 rounded-full ' />
            </a>
            <a onClick={next} href={`#slide-${current}`}>
              <FaChevronCircleRight className='text-4xl text-secondary bg-base-100 rounded-full ' />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageCarousel;
