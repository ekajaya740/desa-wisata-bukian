export interface INavbar {
  logo: {
    src: string;
    alt: string;
  };
  menu: {
    name: string;
    link: string;
  }[];
  activeSection: number | undefined;
  className?: string;
}
