import { createContext, useContext, useState, ReactNode } from 'react';

// Define the interface for the context
interface CountContextProps {
  increment: () => void;
  decrement: () => void;
  count: number;
}

// Create the context with an initial value of undefined
export const CountContext = createContext<CountContextProps | undefined>(undefined);

// Create the provider component
export const CountProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prevCount) => prevCount + 1);
  const decrement = () => setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <CountContext.Provider value={{ count, increment, decrement }}>
      {children}
    </CountContext.Provider>
  );
};

// Custom hook to use the CountContext
export const useCount = () => {
  const context = useContext(CountContext);

  if (!context) {
    throw new Error('useCount must be used within a CountProvider');
  }

  return context;
};