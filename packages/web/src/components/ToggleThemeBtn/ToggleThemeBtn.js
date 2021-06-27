import React from "react";
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

  return (
    <ToggleBtnWrap onClick={() => dispatch(changeTheme(toggle))}>
      {theme === DARK ? (
        <ToggleBtn src={LightThemeIcon} alt="light-theme" />
      ) : (
        <ToggleBtn src={DarkThemeIcon} alt="dark-theme" />
      )}
    </ToggleBtnWrap>
  );
};

export default ToggleThemeBtn;
