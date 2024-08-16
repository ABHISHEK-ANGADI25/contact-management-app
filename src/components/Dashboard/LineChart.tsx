import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Register components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define the structure of the API response
interface HistoricalData {
  cases: Record<string, number>;
  deaths: Record<string, number>;
  recovered: Record<string, number>;
}

// Fetch the historical data
const fetchHistoricalData = async (): Promise<HistoricalData> => {
  const response = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
  return response.data;
};

const LineChart: React.FC = () => {
  // Fetch data using React Query with proper typing
  const { data, isLoading, error } = useQuery<HistoricalData>({ queryKey: ['historicalData'], queryFn: fetchHistoricalData});

  // Handle loading and error states
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

  // Prepare data for the chart
  const chartData = {
    labels: data ? Object.keys(data.cases) : [],
    datasets: [
      {
        label: 'Cases',
        data: data ? Object.values(data.cases) : [],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
      {
        label: 'Deaths',
        data: data ? Object.values(data.deaths) : [],
        fill: false,
        borderColor: 'rgb(255, 99, 132)',
        tension: 0.1,
      },
      {
        label: 'Recovered',
        data: data ? Object.values(data.recovered) : [],
        fill: false,
        borderColor: 'rgb(54, 162, 235)',
        tension: 0.1,
      },
    ],
  };

  // Render the Line chart
  return <Line data={chartData} />;
};

export default LineChart; // exporting LineChart
