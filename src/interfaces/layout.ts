import { ReactNode } from 'react';
import { INavbar } from './navbar';

export interface ILayout {
  navbarProps: INavbar;
  children: ReactNode;
  className?: string;
}
