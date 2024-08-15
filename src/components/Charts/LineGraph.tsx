import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import axios from 'axios';

const LineGraph = () => {
  const { data } = useQuery('casesData', async () => {
    const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    return response.data;
  });

  const chartData = {
    labels: data ? Object.keys(data.cases) : [],
    datasets: [
      {
        label: 'Cases',
        data: data ? Object.values(data.cases) : [],
        borderColor: 'rgba(75, 192, 192, 1)',
        fill: false,
      },
    ],
  };

  return <Line data={chartData} />;
};
export default LineGraph;
