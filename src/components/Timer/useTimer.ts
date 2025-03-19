import { useState, useEffect } from 'react';

const TIMER_STORAGE_KEY = 'userTimer';

export const useTimer = (initialTime: number) => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem(TIMER_STORAGE_KEY);
    if (savedTime) {
      const parsedTime = parseInt(savedTime, 10);
      return parsedTime > 0 ? parsedTime : initialTime;
    }
    return initialTime;
  });

  useEffect(() => {
    if (timeLeft <= 0) return;

    localStorage.setItem(TIMER_STORAGE_KEY, timeLeft.toString());
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime - 1;
        localStorage.setItem(TIMER_STORAGE_KEY, newTime.toString());
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const resetTimer = () => {
    setTimeLeft(initialTime);
    localStorage.setItem(TIMER_STORAGE_KEY, initialTime.toString());
  };

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  return {
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
    isExpired: timeLeft <= 0,
    resetTimer
  };
};
