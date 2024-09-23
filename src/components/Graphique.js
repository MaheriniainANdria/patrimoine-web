import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const Graphique = ({ fluxJournaliers, categories }) => {
  const data = {
    labels: fluxJournaliers.map(f => f.date),
    datasets: categories.map((category) => ({
      label: category.name,
      data: fluxJournaliers.map(f => f[category.key]),
      borderColor: category.color,
      borderWidth: 2,
      fill: false,
    })),
  };

  return <Line data={data} />;
};

export default Graphique;
