import { PropsWithChildren } from 'react';
import { ToastContainer } from 'react-toastify';

const ToastProvider = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ToastContainer position="bottom-right" limit={5} />
    </>
  );
};

export default ToastProvider;
