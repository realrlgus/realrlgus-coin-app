import styled from "styled-components";
import { ICoinParams } from "../interface";
import { addComma } from "../util";

const CoinCointainer = styled.div``;

const CoinHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
`;

const CoinLogo = styled.img``;

const CoinName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${(props) => props.theme.text};
`;

const CoinInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  justify-items: center;
`;

const CoinExchange = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background-color: ${(props) => props.theme.item};
  border: 2px solid ${(props) => props.theme.itemBorder};
  padding: 20px;
  border-radius: 30px;
  box-shadow: 2px 2px 2px 2px ${(props) => props.theme.itemShadow};
`;

const ExchangeHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ExchangeLogo = styled.img`
  width: 64px;
  height: 64px;
`;

const ExchangeNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ExchangeName = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.itemText};
`;

const ExchangeSubText = styled.div`
  font-size: 1.1rem;
  color: ${(props) => props.theme.itemText};
`;

const ExchangeSection = styled.div`
  border-top: 1px solid ${(props) => props.theme.itemBorder};
  padding-top: 20px;
`;

const ExchangeItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ExchangeItemTitle = styled.div`
  font-size: 1.2rem;
  color: ${(props) => props.theme.itemText};
`;

const ExchangeItemValue = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.itemValue};
`;

export const Coin = ({ coinData, coin, koreanName }: ICoinParams) => (
  <CoinCointainer>
    <CoinHeader>
      <CoinLogo src={`https://static.upbit.com/logos/${coin}.png`} />
      <CoinName>{koreanName}</CoinName>
    </CoinHeader>
    <CoinInfo>
      {coinData?.map((coin) => (
        <CoinExchange key={coin.market}>
          <ExchangeHeader>
            <ExchangeLogo
              src={require(`/src/assets/logo/${coin.market}.png`)}
            />
            <ExchangeNameWrapper>
              <ExchangeName>{coin.market}</ExchangeName>
              <ExchangeSubText>?????? ??????</ExchangeSubText>
            </ExchangeNameWrapper>
          </ExchangeHeader>
          <ExchangeSection>
            <ExchangeItem>
              <ExchangeItemTitle>?????????</ExchangeItemTitle>
              <ExchangeItemValue>
                {addComma(coin.currentPrice)}???
              </ExchangeItemValue>
            </ExchangeItem>
          </ExchangeSection>
          <ExchangeSection>
            <ExchangeItem>
              <ExchangeItemTitle>?????? ?????? ??????</ExchangeItemTitle>
              <ExchangeItemValue>{coin.changeRate}%</ExchangeItemValue>
            </ExchangeItem>
          </ExchangeSection>
          <ExchangeSection>
            <ExchangeItem>
              <ExchangeItemTitle>?????? ?????????</ExchangeItemTitle>
              <ExchangeItemValue>
                {addComma(coin.highPrice)}???
              </ExchangeItemValue>
            </ExchangeItem>
          </ExchangeSection>
          <ExchangeSection>
            <ExchangeItem>
              <ExchangeItemTitle>?????? ?????????</ExchangeItemTitle>
              <ExchangeItemValue>{addComma(coin.lowPrice)}???</ExchangeItemValue>
            </ExchangeItem>
          </ExchangeSection>
        </CoinExchange>
      ))}
    </CoinInfo>
  </CoinCointainer>
);
