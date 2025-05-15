import React, { createContext, useContext, useState, useEffect } from 'react';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

type AppContextType = {
  timeRemaining: TimeRemaining;
  examDate: Date;
  progress: number;
  updateProgress: (value: number) => void;
  studyGoal: number;
  updateStudyGoal: (value: number) => void;
}

const defaultContext: AppContextType = {
  timeRemaining: { days: 0, hours: 0, minutes: 0, seconds: 0 },
  examDate: new Date(2025, 8, 28), // September 28, 2025
  progress: 0,
  updateProgress: () => {},
  studyGoal: 100,
  updateStudyGoal: () => {}
};

const AppContext = createContext<AppContextType>(defaultContext);

export const useAppContext = () => useContext(AppContext);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [examDate] = useState<Date>(new Date(2025, 8, 28)); // September 28, 2025
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [progress, setProgress] = useState<number>(0);
  const [studyGoal, setStudyGoal] = useState<number>(100);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      
      if (now >= examDate) {
        setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      
      const days = differenceInDays(examDate, now);
      const hours = differenceInHours(examDate, now) % 24;
      const minutes = differenceInMinutes(examDate, now) % 60;
      const seconds = differenceInSeconds(examDate, now) % 60;
      
      setTimeRemaining({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(interval);
  }, [examDate]);

  const updateProgress = (value: number) => {
    setProgress(value);
  };

  const updateStudyGoal = (value: number) => {
    setStudyGoal(value);
  };

  return (
    <AppContext.Provider value={{ 
      timeRemaining, 
      examDate, 
      progress, 
      updateProgress,
      studyGoal,
      updateStudyGoal
    }}>
      {children}
    </AppContext.Provider>
  );
};