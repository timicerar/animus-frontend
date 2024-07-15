import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ToastContainer position="bottom-right" />
    </>
  );
};

export default ToastProvider;
