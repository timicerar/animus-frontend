import { PropsWithChildren, useEffect, useState } from 'react';
import { NavbarContext } from '@/components/providers/NavbarProvider/NavbarContext';
import useWindow from '@/hooks/useWindow';

type NavbarProviderProps = PropsWithChildren;

const NavbarProvider = ({ children }: NavbarProviderProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const window = useWindow();

  useEffect(() => {
    if (!window) return;

    const onScroll = () => {
      setVisible(window?.scrollY > 50);
    };

    onScroll();

    window?.addEventListener('scroll', onScroll, {
      passive: true,
      capture: true,
    });

    return () => {
      window?.removeEventListener('scroll', onScroll);
    };
  }, [window]);

  return (
    <NavbarContext.Provider value={{ visible, setVisible }}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
