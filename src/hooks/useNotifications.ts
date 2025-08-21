import { useState, useEffect, useRef } from 'react';

const notifications = [
  "Ana entrou no grupo VIP!",
  "Bruno entrou no grupo VIP!",
  "Carla entrou no grupo VIP!",
  "Diego entrou no grupo VIP!",
  "Eliana entrou no grupo VIP!",
  "Felipe entrou no grupo VIP!",
  "Gabriela entrou no grupo VIP!",
  "Henrique entrou no grupo VIP!",
  "Isabela entrou no grupo VIP!",
  "João entrou no grupo VIP!",
  "Karina entrou no grupo VIP!",
  "Lucas entrou no grupo VIP!",
  "Maria entrou no grupo VIP!",
  "Nicolas entrou no grupo VIP!",
  "Olivia entrou no grupo VIP!",
  "Pero entrou no grupo VIP!",
  "Queila entrou no grupo VIP!",
  "Rafael entrou no grupo VIP!",
  "Sofia entrou no grupo VIP!",
  "Thiago entrou no grupo VIP!",
  "Ursula entrou no grupo VIP!",
  "Vitor entrou no grupo VIP!",
  "Wagner entrou no grupo VIP!",
  "Ximena entrou no grupo VIP!",
  "Yasmin entrou no grupo VIP!",
  "Zélia entrou no grupo VIP!",
  "Amanda entrou no grupo VIP!",
  "Bernardo entrou no grupo VIP!",
  "Camila entrou no grupo VIP!",
  "Daniel entrou no grupo VIP!",
  "Eduarda entrou no grupo VIP!",
  "Fabio entrou no grupo VIP!",
  "Giovana entrou no grupo VIP!",
  "Hugo entrou no grupo VIP!",
  "Ingrid entrou no grupo VIP!",
  "Julio entrou no grupo VIP!",
  "Kely entrou no grupo VIP!",
  "Leonardo entrou no grupo VIP!",
  "Mariana entrou no grupo VIP!",
  "Nathan entrou no grupo VIP!",
  "Otavio entrou no grupo VIP!",
  "Priscila entrou no grupo VIP!",
  "Raquel entrou no grupo VIP!",
  "Samuel entrou no grupo VIP!",
  "Tatiana entrou no grupo VIP!",
  "Ulisses entrou no grupo VIP!",
  "Vanessa entrou no grupo VIP!",
  "Wellington entrou no grupo VIP!",
  "Yara entrou no grupo VIP!",
  "Zeca entrou no grupo VIP!",
  "Adriana entrou no grupo VIP!",
  "Bruna entrou no grupo VIP!",
  "Cesar entrou no grupo VIP!",
  "Debora entrou no grupo VIP!",
  "Emerson entrou no grupo VIP!",
  "Fernanda entrou no grupo VIP!",
  "Gustavo entrou no grupo VIP!",
  "Helena entrou no grupo VIP!",
  "Igor entrou no grupo VIP!",
  "Juliana entrou no grupo VIP!",
  "Kleber entrou no grupo VIP!",
  "Larissa entrou no grupo VIP!",
  "Marcelo entrou no grupo VIP!",
  "Natalia entrou no grupo VIP!",
  "Orlando entrou no grupo VIP!",
  "Patricia entrou no grupo VIP!",
  "Roberto entrou no grupo VIP!",
  "Sabrina entrou no grupo VIP!",
  "Tiago entrou no grupo VIP!",
  "Viviane entrou no grupo VIP!",
  "William entrou no grupo VIP!",
  "Alexandre entrou no grupo VIP!",
  "Beatriz entrou no grupo VIP!",
  "Carlos entrou no grupo VIP!",
  "Denise entrou no grupo VIP!",
  "Valentina entrou no grupo VIP!"
];

export const useNotifications = () => {
  const [currentNotification, setCurrentNotification] = useState(0);
  const [showNotification, setShowNotification] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const displayNotification = () => {
    setShowNotification(true);
    
    // Esconder após 4 segundos
    timeoutRef.current = setTimeout(() => {
      setShowNotification(false);
    }, 2000);

    // Próxima notificação (randomizada para mais variedade)
    setCurrentNotification(() => Math.floor(Math.random() * notifications.length));
  };

  useEffect(() => {
    // Primeira notificação após 2 segundos
    const initialTimeout = setTimeout(() => {
      displayNotification();
      
      // Configurar intervalo para próximas notificações
      intervalRef.current = setInterval(displayNotification, 4000);
    }, 2000);

    return () => {
      clearTimeout(initialTimeout);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    currentMessage: notifications[currentNotification],
    showNotification
  };
};
