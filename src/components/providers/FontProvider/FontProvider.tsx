import { Alegreya_Sans } from 'next/font/google';
import { PropsWithChildren } from 'react';

const alegreyaSans = Alegreya_Sans({
  weight: ['300', '400', '500', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--alegreya-sans',
  subsets: ['latin'],
});

const FontProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      <style jsx global>{`
        html,
        body,
        #__next {
          --alegreya-sans: ${alegreyaSans.style.fontFamily};
        }
      `}</style>
      {children}
    </>
  );
};

export default FontProvider;
