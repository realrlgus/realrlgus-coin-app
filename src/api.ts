import { ICoinList } from "./interface";

export const getCoinList = () => {
  return fetch("https://api.upbit.com/v1/market/all")
    .then((res) => res.json())
    .then((coins: ICoinList[]) =>
      coins.filter((coin) => coin?.market.substring(0, 3) === "KRW")
    );
};
