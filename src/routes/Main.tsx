import styled from "styled-components";
import { useQuery } from "react-query";
import { getCoinList } from "../api";
import { ICoinList } from "../interface";
import { Loader } from "../components/Loader";
import { Link } from "react-router-dom";

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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 25px;
  justify-content: space-around;
`;

const ItemLink = styled(Link)`
  width: 100%;
  display: flex;
  align-items: stretch;
  gap: 10px;
  background-color: ${(props) => props.theme.item};
  border: 2px solid ${(props) => props.theme.itemBorder};
  padding: 20px;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 2px ${(props) => props.theme.itemShadow};
`;

const ItemImage = styled.img`
  width: 32px;
  height: 32px;
`;

const ItemTitle = styled.span`
  font-size: 1.3rem;
  color: ${(props) => props.theme.itemText};
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
          <ItemLink
            to={`/${coin.market.split("-")[1]}`}
            state={{ koreanName: coin.korean_name }}
            key={coin.market}
          >
            <ItemImage
              src={`https://static.upbit.com/logos/${
                coin.market.split("-")[1]
              }.png `}
            />
            <ItemTitle>{coin.korean_name}</ItemTitle>
          </ItemLink>
        ))}
      </ItemContainer>
    </MainContainer>
  );
};

export default Main;
