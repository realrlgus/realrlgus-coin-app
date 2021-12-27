import { ICoinInfo, ICoinList } from "./interface";
import axios from "axios";
import { addComma } from "./util";

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

  const data = [];

  if (upbitData) {
    data.push({
      market: "Upbit",
      currentPrice: trade_price,
      highPrice: high_price,
      lowPrice: low_price,
      changeRate: change_rate * 100,
    });
  }
  if (bithumbData) {
    data.push({
      market: "Bithumb",
      currentPrice: closing_price,
      highPrice: max_price,
      lowPrice: min_price,
      changeRate: fluctate_rate_24H,
    });
  }
  if (prevClosePrice) {
    data.push({
      market: "Binance",
      currentPrice: prevClosePrice,
      highPrice: highPrice,
      lowPrice: lowPrice,
      changeRate: priceChangePercent,
    });
  }

  return data;
};

export const getCoinCandle = async (coin: string) => {
  const upbit = await axios.get(
    `https://api.upbit.com/v1/candles/minutes/5?market=KRW-${coin}&count=500`
  );

  const {
    data: { data: bithumb },
  }: { data: { data: [] } } = await axios.get(
    `https://api.bithumb.com/public/candlestick/${coin}_KRW/5m`
  );

  const binance = await axios.get(
    `https://api.binance.com/api/v3/klines?symbol=${coin}USDT&interval=5m&limit=500`
  );

  return bithumb;
};
