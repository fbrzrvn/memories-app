import styled from "styled-components";
import { COLOR } from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${({ theme }) => theme.background};
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const FormH1 = styled.h1`
  color: ${({ theme }) => `${theme.primary}`};
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin: 12px auto 24px;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const FormWrap = styled.form`
  display: grid;
  height: auto;
  width: 100%;
  margin: 24px auto;
  z-index: 1;
  @media screen and (max-width: 480px) {
    margin: 0;
  }
`;

export const FormLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.text};
`;

export const FormInput = styled.input`
  font-family: inherit;
  font-size: 16px;
  padding: 12px 16px;
  margin-bottom: 24px;
  border: none;
  border-radius: 10px;
  outline: ${({ error }) => error && `none`};
  border: ${({ error }) => error && `1px solid ${COLOR.danger700}`};
  &:active,
  &:focus {
    outline: ${({ error, theme }) => !error && `1px solid ${theme.primary}`};
  }
`;

export const FormTextarea = styled.textarea`
  font-family: inherit;
  font-size: 16px;
  padding: 12px 16px;
  margin-bottom: 24px;
  border: none;
  border-radius: 10px;
  outline: ${({ error }) => error && `none`};
  border: ${({ error }) => error && `1px solid ${COLOR.danger700}`};
  &:active,
  &:focus {
    outline: ${({ error, theme }) => !error && `1px solid ${theme.primary}`};
  }
`;

export const FileInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  & input {
    font-family: inherit;
    font-size: 16px;
  }
`;

export const LinkWrap = styled.div`
  text-align: right;
  margin-top: 16px;
  & * {
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.textSecondary};
  }
  @media screen and (max-width: 480px) {
    text-align: center;
  }
`;

export const ErrorMsg = styled.p`
  color: ${COLOR.danger900};
  background: ${COLOR.danger100};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  margin: -8px 0 24px;
  padding: 16px;
  &.last {
    margin-top: -24px;
    margin-bottom: 32px;
  }
`;
