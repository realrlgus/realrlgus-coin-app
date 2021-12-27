import { ICoinInfo, ICoinList, IUpbitCandle } from "./interface";
import axios from "axios";
import { addComma } from "./util";

export const getExchange = async () => {
  const {
    data: { USDKRW },
  } = await axios.get(`https://exchange.jaeheon.kr:23490/query/USDKRW`);

  return USDKRW[0];
};

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
    data: { lastPrice, highPrice, lowPrice, priceChangePercent },
  } = await axios.get(
    `https://api.binance.com/api/v3/ticker/24hr?symbol=${coin}USDT`
  );

  const USDT = (await getExchange()) as unknown as number;

  const data = [];

  if (upbitData) {
    data.push({
      market: "Upbit",
      currentPrice: trade_price,
      highPrice: high_price,
      lowPrice: low_price,
      changeRate: change_rate.toFixed(3) * 100,
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
  if (lastPrice) {
    data.push({
      market: "Binance",
      currentPrice: Math.floor(lastPrice * USDT),
      highPrice: Math.floor(highPrice * USDT),
      lowPrice: Math.floor(lowPrice * USDT),
      changeRate: priceChangePercent,
    });
  }

  return data;
};

export const getBithumbCoinCandle = async (coin: string) => {
  const {
    data: { data: bithumb },
  }: { data: { data: [] } } = await axios.get(
    `https://api.bithumb.com/public/candlestick/${coin}_KRW/5m`
  );

  return bithumb.splice(-200);
};

export const getUpbitCoinCandle = async (coin: string) => {
  const { data: upbit } = await axios.get<IUpbitCandle[]>(
    `https://api.upbit.com/v1/candles/minutes/5?market=KRW-${coin}&count=200`
  );

  return upbit;
};

export const getBinanceCoinCandle = async (coin: string) => {
  const { data: binance } = await axios.get(
    `https://api.binance.com/api/v3/klines?symbol=${coin}USDT&interval=5m&limit=200`
  );

  return binance;
};
