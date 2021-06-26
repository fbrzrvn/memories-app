import { useEffect, useState } from "react";

const useTheme = () => {
  const currentTheme = () => {
    const localTheme = localStorage.getItem("THEME");
    return localTheme || "dark"; // set default theme to dark
  };

  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    localStorage.setItem("THEME", theme);
  }, [theme]);

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };
  return [theme, toggleTheme];
};

export default useTheme;
