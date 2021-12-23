import styled from "styled-components";
import { useQuery } from "react-query";
import { getCoinList } from "../api";
import { ICoinList } from "../interface";

const Main = () => {
  const { isLoading, data } = useQuery<ICoinList[]>("getCoinList", getCoinList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {data?.map((coin) => (
        <h1>{coin.korean_name}</h1>
      ))}
    </div>
  );
};

export default Main;
