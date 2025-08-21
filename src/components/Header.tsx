import React from 'react';
import { useCountdown } from '../hooks/useCountdown';

const Header: React.FC = () => {
  const { formattedTime } = useCountdown({
    duration: 15 * 60, // 15 minutos
    autoRestart: true,
    restartDelay: 2000
  });

  return (
    <header className="fixed-header">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center">
          <div className="text-lg font-bold text-white">
            <span className="hero-gradient">CYBER</span>
            <span className="text-white">CODE</span>
          </div>
          <div className="countdown-fixed">
            <div className="text-xs mb-1">⏰ Expira em:</div>
            <div className="countdown-numbers-fixed">{formattedTime}</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
