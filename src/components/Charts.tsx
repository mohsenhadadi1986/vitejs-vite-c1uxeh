import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

interface ChartData {
  labels: string[];
  datasets: {
    data: number[];
    backgroundColor: string[];
    borderColor: string[];
    borderWidth: number;
  }[];
}

interface ChartsProps {
  pieData: ChartData;
  barData: ChartData;
}

const Charts: React.FC<ChartsProps> = ({ pieData, barData }) => {
  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Bar Chart',
      },
    },
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
        <div style={{ width: '40%' }}>
          <h2>Pie Chart</h2>
          <Pie data={pieData} />
        </div>
        <div style={{ width: '40%' }}>
          <h2>Bar Chart</h2>
          <Bar options={barOptions} data={barData} />
        </div>
      </div>
    </div>
  );
};

export default Charts;