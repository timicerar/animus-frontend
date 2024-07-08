import { createContext, Dispatch, SetStateAction } from 'react';

type NavbarContextType = {
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

export const NavbarContext = createContext<NavbarContextType>({
  visible: false,
  setVisible: async () => {
    return;
  },
});
