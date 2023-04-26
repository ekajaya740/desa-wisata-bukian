import { memo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { ILayout } from '@/interfaces/layout';
import classnames from 'classnames';

const Layout = (props: ILayout) => {
  return (
    <>
      <header className='sticky top-0 z-50'>
        <Navbar {...props.navbarProps} className={props.className} />
      </header>
      <div className={classnames(props.className)}>{props.children}</div>
      <Footer className={props.className} />
    </>
  );
};

export default memo(Layout);
