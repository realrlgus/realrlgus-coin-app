import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { getCoinInfo } from "../api";
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
      </InfoWrapper>
    </InfoContainer>
  );
};
