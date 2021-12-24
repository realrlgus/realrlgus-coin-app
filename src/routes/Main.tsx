import styled from "styled-components";
import { useQuery } from "react-query";
import { getCoinList } from "../api";
import { ICoinList } from "../interface";
import { Loader } from "../components/Loader";

const MainContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  min-height: 100vh;
`;

const ItemContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 25px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 25px;
  justify-content: space-around;
`;

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 10px;
`;

const ItemImage = styled.img`
  width: 32px;
  height: 32px;
`;

const ItemTitle = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.text};
  margin: auto 0;
`;

const Main = () => {
  const { isLoading, data } = useQuery<ICoinList[]>("getCoinList", getCoinList);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <MainContainer>
      <ItemContainer>
        {data?.map((coin) => (
          <ItemWrapper>
            <ItemImage
              src={`https://static.upbit.com/logos/${
                coin.market.split("-")[1]
              }.png `}
            />
            <ItemTitle>{coin.korean_name}</ItemTitle>
          </ItemWrapper>
        ))}
      </ItemContainer>
    </MainContainer>
  );
};

export default Main;
