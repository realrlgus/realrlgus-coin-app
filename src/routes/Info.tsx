import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import {
  getBinanceCoinCandle,
  getBithumbCoinCandle,
  getCoinInfo,
  getExchange,
  getUpbitCoinCandle,
} from "../api";
import { Chart } from "../components/Chart";
import { Coin } from "../components/Coin";
import { Loader } from "../components/Loader";
import { ICoinInfo, IParams, ILocation } from "../interface";

const InfoContainer = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.background};
`;

const InfoWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 25px;
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Info = () => {
  const { coin } = useParams() as unknown as IParams;
  const {
    state: { koreanName },
  } = useLocation() as unknown as ILocation;

  const { isLoading: isUpbitLoading, data: coinData } = useQuery<ICoinInfo[]>(
    [coin, "getCoinInfo"],
    () => getCoinInfo(coin)
  );

  const { data: chartData } = useQuery([coin, "getBithumbCoinCandle"], () =>
    getBithumbCoinCandle(coin)
  );

  const { data: chartUpbitData } = useQuery([coin, "getUpbitCoinCandle"], () =>
    getUpbitCoinCandle(coin)
  );

  const { isLoading: isBinanceChartLoading, data: chartBinanceData } = useQuery(
    [coin, "getBinanceCoinCandle"],
    () => getBinanceCoinCandle(coin)
  );

  const { data: USDT } = useQuery(["USDT", "getExchange"], getExchange);

  return (
    <InfoContainer>
      <InfoWrapper>
        {isUpbitLoading ? (
          <Loader />
        ) : (
          <Coin
            coinData={coinData ? coinData : []}
            coin={coin}
            koreanName={koreanName}
          />
        )}
        {isBinanceChartLoading ? (
          <Loader />
        ) : (
          <Chart
            chartData={chartData ? chartData : []}
            chartUpbitData={chartUpbitData ? chartUpbitData : []}
            chartBinanceData={chartBinanceData ? chartBinanceData : []}
            coin={coin}
            USDT={USDT}
          />
        )}
      </InfoWrapper>
    </InfoContainer>
  );
};
