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

export interface ICoinChartParams extends IParams {
  chartData: [string, number, number, number, number][];
  chartUpbitData: IUpbitCandle[];
  chartBinanceData: [
    number,
    string,
    string,
    string,
    number,
    string,
    number,
    string,
    number,
    string,
    string,
    string
  ][];
  USDT: number;
}

export interface IUpbitCandle {
  market: string;
  candle_date_time_utc: string;
  candle_date_time_kst: string;
  opening_price: number;
  high_price: number;
  low_price: number;
  trade_price: number;
  timestamp: number;
  candle_acc_trade_price: number;
  candle_acc_trade_volume: number;
  unit: number;
}
