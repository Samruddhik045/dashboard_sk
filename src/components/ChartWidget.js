import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Pie, Bar, Line, Doughnut } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartWidget = ({ widget }) => {
  const getChartData = () => {
    switch(widget.type) {
      case 'pie':
      case 'doughnut':
        return {
          labels: widget.data.labels,
          datasets: [{
            data: widget.data.values,
            backgroundColor: widget.data.backgroundColor,
            borderWidth: 1
          }]
        };
      case 'bar':
        return {
          labels: widget.data.labels,
          datasets: [{
            label: widget.name,
            data: widget.data.values,
            backgroundColor: widget.data.backgroundColor || '#2196F3',
            borderWidth: 1
          }]
        };
      case 'line':
        return {
          labels: widget.data.labels,
          datasets: [{
            label: widget.name,
            data: widget.data.values,
            borderColor: widget.data.borderColor || '#9C27B0',
            backgroundColor: 'rgba(0, 0, 0, 0)',
            borderWidth: 2,
            tension: 0.1
          }]
        };
      default:
        return {};
    }
  };

  const renderChart = () => {
    const data = getChartData();
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: widget.name,
        },
      },
    };

    switch(widget.type) {
      case 'pie':
        return <Pie data={data} options={options} />;
      case 'bar':
        return <Bar data={data} options={options} />;
      case 'line':
        return <Line data={data} options={options} />;
      case 'doughnut':
        return <Doughnut data={data} options={options} />;
      default:
        return <p>Unsupported chart type</p>;
    }
  };

  return (
    <div className="chart-widget">
      {renderChart()}
    </div>
  );
};

export default ChartWidget;