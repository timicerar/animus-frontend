const useWindow = (): (Window & typeof globalThis) | undefined => {
  return typeof window !== 'undefined' ? window : undefined;
};

export default useWindow;
