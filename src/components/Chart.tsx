import React from "react";
import ApexChart from "react-apexcharts";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getBithumbCoinCandle } from "../api";
import { ICoinChartParams, IParams } from "../interface";
import { Loader } from "./Loader";

export const Chart = ({
  chartData,
  chartUpbitData,
  chartBinanceData,
  coin,
  USDT,
}: ICoinChartParams) => {
  return (
    <ApexChart
      type="line"
      series={[
        {
          name: "Upbit",
          data: chartUpbitData?.map((item) => item["trade_price"]),
        },
        { name: "Bithumb", data: chartData?.map((item) => item[1]) },

        {
          name: "Binance",
          data: chartBinanceData?.map((item) => item[4] * USDT),
        },
      ]}
      options={{
        chart: {
          height: 250,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: "datetime",
          categories: chartData?.map((item) => item[0]),
        },
        stroke: {
          curve: "straight",
        },
        title: {
          text: "가격 비교 차트",
          align: "left",
          style: {
            fontSize: "24px",
            fontWeight: "bold",
          },
        },
      }}
    />
  );
};
