import { ICoinList } from "./interface";
import axios from "axios";

export const getCoinList = () => {
  return fetch("https://api.upbit.com/v1/market/all")
    .then((res) => res.json())
    .then((coins: ICoinList[]) =>
      coins.filter((coin) => coin?.market.substring(0, 3) === "KRW")
    );
};

export const getCoinInfo = async (coin: string) => {
  const { data: upbitData } = await axios.get(
    `https://api.upbit.com/v1/ticker?markets=KRW-${coin}`
  );

  const { trade_price, high_price, low_price, change_rate } = upbitData[0];

  const { data: bithumbData } = await axios.get(
    `https://api.bithumb.com/public/ticker/${coin}_KRW`
  );

  const {
    data: { closing_price, max_price, min_price, fluctate_rate_24H },
  } = bithumbData;

  const {
    data: { prevClosePrice, highPrice, lowPrice, priceChangePercent },
  } = await axios.get(
    `https://api.binance.com/api/v3/ticker/24hr?symbol=${coin}USDT`
  );

  return [
    {
      market: "Upbit",
      currentPrice: trade_price,
      highPrice: high_price,
      lowPrice: low_price,
      changeRate: change_rate,
    },
    {
      market: "Bithumb",
      currentPrice: closing_price,
      highPrice: max_price,
      lowPrice: min_price,
      changeRate: fluctate_rate_24H,
    },
    {
      market: "Binance",
      currentPrice: prevClosePrice,
      highPrice: highPrice,
      lowPrice: lowPrice,
      changeRate: priceChangePercent,
    },
  ];
};
