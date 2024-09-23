import React, { useState } from 'react';

const InputSection = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleDateChange = () => {
    onDateChange(startDate, endDate);
  };

  return (
    <div className="input-section">
      <label>De:</label>
      <input 
        type="date" 
        value={startDate} 
        onChange={(e) => {
          setStartDate(e.target.value);
          handleDateChange();
        }} 
      />
      <label>À:</label>
      <input 
        type="date" 
        value={endDate} 
        onChange={(e) => {
          setEndDate(e.target.value);
          handleDateChange();
        }} 
      />
      <input type="checkbox" id="agregat" name="agregat" />
      <label htmlFor="agregat">Agrégat</label>
    </div>
  );
};

export default InputSection;
