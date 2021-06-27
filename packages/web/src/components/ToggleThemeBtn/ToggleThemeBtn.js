import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LightThemeIcon from "../../assets/wi-day-sunny.svg";
import DarkThemeIcon from "../../assets/wi-night-clear.svg";
import { changeTheme } from "../../redux/theme/themeActions";
import { themeSelector } from "../../redux/theme/themeSelector";
import { DARK, LIGHT } from "../../redux/theme/themeTypes";
import { ToggleBtn, ToggleBtnWrap } from "./styles";

const ToggleThemeBtn = () => {
  const dispatch = useDispatch();
  const { theme } = useSelector(themeSelector);
  const toggle = theme === DARK ? LIGHT : DARK;
  const [isAnimate, setIsAnimate] = useState(false);

  const handleClick = () => {
    dispatch(changeTheme(toggle));
    setIsAnimate(true);
    setTimeout(() => setIsAnimate(false), 1000);
  };

  return (
    <ToggleBtnWrap onClick={handleClick}>
      <ToggleBtn
        src={theme === DARK ? LightThemeIcon : DarkThemeIcon}
        alt={theme === DARK ? "light-theme" : "dark-theme"}
        isAnimate={isAnimate}
      />
    </ToggleBtnWrap>
  );
};

export default ToggleThemeBtn;
