import { useParams } from "react-router-dom";

interface ChartProps {
  coinId: string;
}

function Chart({ coinId }: ChartProps) {
  const params = useParams();
  console.log(params);

  return <h1>Chart</h1>;
}

export default Chart;
