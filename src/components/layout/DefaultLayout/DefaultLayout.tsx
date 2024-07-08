import classNames from 'classnames';
import { PropsWithChildren } from 'react';
import Footer from '@/components/compositions/Footer/Footer';
import Navbar from '@/components/compositions/Navbar/Navbar';
import usePageLocation from '@/hooks/usePageLocation';
import classes from './DefaultLayout.module.scss';

type DefaultLayoutProps = PropsWithChildren;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const { isHomePage } = usePageLocation();

  return (
    <div
      className={classNames(classes.container, { [classes.home]: isHomePage })}
    >
      <Navbar />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
