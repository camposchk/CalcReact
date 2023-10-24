import React, { createContext, useState, useContext } from 'react';

const HistoryContext = createContext();

export const useHistory = () => {
  return useContext(HistoryContext);
};

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addEntry = (entry) => {
    setHistory(prevHistory => [...prevHistory, entry]);
  };

  return (
    <HistoryContext.Provider value={{ history, addEntry }}>
      {children}
    </HistoryContext.Provider>
  );
};