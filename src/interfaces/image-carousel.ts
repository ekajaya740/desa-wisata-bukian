export interface IImageCarousel {
  settings:
    | {
        autoplay: boolean | undefined;
        autoplaySpeed: number | undefined;
        dots: boolean | undefined;
        infinite: boolean | undefined;
      }
    | undefined;
  carousel: {
    image: {
      src: string;
      alt: string;
    };
  }[];
}
