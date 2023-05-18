import { useRef } from 'react';

const useFocus = () => {
  const ref = useRef(null);
  const setFocus = () => {
    return ref.current && ref.current.focus();
  };

  return { ref, setFocus };
};

export default useFocus;
