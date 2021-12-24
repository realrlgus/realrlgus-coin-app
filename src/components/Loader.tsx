import styled from "styled-components";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoaderText = styled.span`
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

export const Loader = () => (
  <LoaderContainer>
    <LoaderText>Loading...</LoaderText>
  </LoaderContainer>
);
