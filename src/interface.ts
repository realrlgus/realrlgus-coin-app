export interface IHeader {
  toggleTheme: () => void;
  theme: boolean;
}

export interface ICoinList {
  market: string;
  korean_name: string;
  english_name: string;
  key: string;
}

export interface ICoinInfo {
  market: string;
  currentPrice: number;
  highPrice: number;
  lowPrice: number;
  changeRate: number;
}

export interface IParams {
  coin: string;
}

export interface ILocation {
  state: {
    koreanName: string;
  };
}

export interface ICoinParams extends IParams {
  koreanName: string;
  coinData: ICoinInfo[];
}
