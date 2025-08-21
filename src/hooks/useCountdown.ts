import { useState, useEffect, useRef } from 'react';

interface UseCountdownOptions {
  duration: number;
  onComplete?: () => void;
  autoRestart?: boolean;
  restartDelay?: number;
}

export const useCountdown = ({ 
  duration, 
  onComplete, 
  autoRestart = false, 
  restartDelay = 2000 
}: UseCountdownOptions) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const start = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(intervalRef.current!);
          
          if (onComplete) {
            onComplete();
          }

          if (autoRestart) {
            setTimeout(() => {
              setTimeLeft(duration);
              start();
            }, restartDelay);
          }

          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
  };

  const reset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setTimeLeft(duration);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    start();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [duration]);

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    start,
    reset,
    stop,
    isFinished: timeLeft === 0
  };
};
