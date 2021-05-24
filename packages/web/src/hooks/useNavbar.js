import { useEffect, useState } from "react";

const useNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    return () => {
      setIsOpen(!isOpen);
    };
  }, [isOpen]);

  return [isOpen, toggleNavbar];
};

export default useNavbar;
