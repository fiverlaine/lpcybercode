import React from 'react';
import { useVagasCountdown } from '../hooks/useVagasCountdown';

const VagasBadge: React.FC = () => {
  const { vagas, color } = useVagasCountdown(37);

  return (
    <div className="flex justify-center mb-12">
      <div className="inline-flex items-center px-6 py-3 bg-red-900/20 border border-red-500/30 text-red-400 text-sm font-medium rounded-full backdrop-blur-sm">
        <div className="w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></div>
        Restam apenas{' '}
        <span 
          className="font-bold mx-1 vagas-count" 
          style={{ color }}
        >
          {vagas}
        </span>{' '}
        vagas
      </div>
    </div>
  );
};

export default VagasBadge;
