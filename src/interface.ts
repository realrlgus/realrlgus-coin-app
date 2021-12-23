import React from "react";

export interface ICoinList {
  market: string;
  korean_name: string;
  english_name: string;
}

export interface IHeader {
  toggleTheme: React.Dispatch<React.SetStateAction<string>>;
}
