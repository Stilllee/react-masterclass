import { useQuery } from "react-query";
import styled from "styled-components";
import { fetchCoinToday } from "../api";

const Container = styled.div`
  padding: 20px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const List = styled.div`
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

interface PriceProps {
  coinId: string;
}

interface ITodayPrice {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<ITodayPrice[]>(["today", coinId], () =>
    fetchCoinToday(coinId)
  );

  const todayObjData = data ? data[0] : undefined;

  return (
    <div>
      {isLoading ? (
        "Loading price..."
      ) : (
        <>
          <Container>
            <List>
              <span>open</span>
              <span>${todayObjData?.open.toFixed(2)}</span>
            </List>
            <List>
              <span>current</span>
              <span>${todayObjData?.close.toFixed(2)}</span>
            </List>
            <List>
              <span>low</span>
              <span>${todayObjData?.low.toFixed(2)}</span>
            </List>
            <List>
              <span>high</span>
              <span>${todayObjData?.high.toFixed(2)}</span>
            </List>
          </Container>
        </>
      )}
    </div>
  );
}

export default Price;
