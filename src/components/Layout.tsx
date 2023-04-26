import { ReactNode, memo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export interface ILayout {
  children: ReactNode;
}

const Layout = (props: ILayout) => {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <Navbar />
      </header>
      {props.children}
      <Footer />
    </>
  );
};

export default memo(Layout);
