import styled from "styled-components";
import { IHeader } from "../interface";

const HeaderContainer = styled.div`
  padding: 25px 0px;

  background-color: ${(props) => props.theme.background};
`;

const HeaderWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const HeaderThemeToggle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderThemeToggleLabel = styled.label`
  display: flex;
  width: 60px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.text};
  border-radius: 30px;
  position: relative;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out,
    color 0.3s ease-in-out;
  transform-origin: 50% 50%;
  cursor: pointer;

  &:before {
    transition: transform 0.3s ease;
    content: "";
    display: block;
    position: absolute;
    width: 17px;
    height: 17px;
    background-color: ${(props) => props.theme.text};
    border-radius: 50%;
    top: 5px;
    left: 5px;
  }
`;

const HeaderThemeToggleButton = styled.input`
  visibility: hidden;
  &:checked + ${HeaderThemeToggleLabel} {
    background-color: ${(props) => props.theme.background};
    &::before {
      transform: translateX(30px);
      background-color: ${(props) => props.theme.text};
    }
  }
`;

export const Header = ({ toggleTheme, theme }: IHeader) => {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderTitle>기거스 코인마켓</HeaderTitle>
        <HeaderThemeToggle>
          <HeaderThemeToggleButton
            type="checkbox"
            onChange={toggleTheme}
            id="toggle"
            checked={theme}
          />
          <HeaderThemeToggleLabel htmlFor="toggle"></HeaderThemeToggleLabel>
        </HeaderThemeToggle>
      </HeaderWrapper>
    </HeaderContainer>
  );
};
