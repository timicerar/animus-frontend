import { PropsWithChildren, useEffect, useState } from 'react';
import { NavbarContext } from '@/components/providers/NavbarProvider/NavbarContext';

type NavbarProviderProps = PropsWithChildren;

const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window?.scrollY > 50);
    };

    window.addEventListener('scroll', onScroll, {
      passive: true,
      capture: true,
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <NavbarContext.Provider value={{ visible, setVisible }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
