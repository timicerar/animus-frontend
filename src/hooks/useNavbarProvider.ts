import { useContext } from 'react';
import { NavbarContext } from '@/components/providers/NavbarProvider/NavbarContext';

const useNavbarProvider = () => {
  return useContext(NavbarContext);
};

export default useNavbarProvider;
