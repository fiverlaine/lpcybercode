import { useState, useEffect, useRef } from 'react';

export const useVagasCountdown = (initialVagas: number = 37) => {
  const [vagas, setVagas] = useState(initialVagas);
  const [color, setColor] = useState('#fbbf24');
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCountdown = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    intervalRef.current = setInterval(() => {
      setVagas((prevVagas) => {
        const newVagas = prevVagas - 1;
        
        if (newVagas <= 0) {
          clearInterval(intervalRef.current!);
          setColor('#ef4444');
          
          // Reiniciar após 5 segundos
          setTimeout(() => {
            setVagas(initialVagas);
            setColor('#fbbf24');
            startCountdown();
          }, 5000);
          
          return 0;
        }
        
        // Atualizar cor baseada no número de vagas
        if (newVagas <= 5) {
          setColor('#dc2626');
        } else if (newVagas <= 15) {
          setColor('#ea580c');
        } else {
          setColor('#fbbf24');
        }
        
        return newVagas;
      });
    }, 8000);
  };

  useEffect(() => {
    startCountdown();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [initialVagas]);

  return { vagas, color };
};
