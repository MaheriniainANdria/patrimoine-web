import React, { useState } from 'react';
import InputSection from './components/InputSection';
import FluxImpossibles from './components/FluxImpossibles';
import FluxJournaliers from './components/FluxJournaliers';
import Graphique from './components/Graphique';

function App() {
  const [dates, setDates] = useState({ startDate: '', endDate: '' });

  const handleDateChange = (startDate, endDate) => {
    setDates({ startDate, endDate });
    
  };

  
  const fluxJournaliersData = [
    { date: '2023-01-01', value: 100 },
    { date: '2023-01-02', value: 200 },
 
  ];

  const categoriesData = [
    { name: 'Revenus', key: 'value', color: 'rgba(75,192,192,1)' },

  ];

  return (
    <div className="App">
      <h1>Bienvenue à Patrimoine Web Interface</h1>
      <InputSection onDateChange={handleDateChange} />
      <FluxImpossibles />
      <FluxJournaliers />
      <Graphique fluxJournaliers={fluxJournaliersData} categories={categoriesData} />
    </div>
  );
}

export default App;
