import { Link } from "react-router-dom";
import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 460px;
  width: 100%;
  padding: 32px;
  margin: 24px auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 480px) {
    box-shadow: none;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  height: 100%;
  margin: 24px auto;
  border-radius: 10px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 24px 0;
  }
`;

export const CardTitle = styled.h1`
  color: ${COLOR.deepPurple500};
  font-size: 32px;
  text-align: center;
  margin-bottom: 16px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const CardBody = styled.p`
  font-size: 16px;
  margin-bottom: 24px;
`;

export const LinkWrap = styled.div`
  text-align: right;
  margin-top: 16px;
  & * {
    text-decoration: none;
    font-size: 14px;
    color: ${COLOR.textSecondary};
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const NavbarLink = styled(Link)`
  margin-right: 16px;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLOR.deepPurple500};
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${COLOR.deepPurple400};
    transition: all 300ms ease-in-out;
  }
  &.active {
    border-bottom: 3px solid ${COLOR.deepPurple400};
  }
`;
