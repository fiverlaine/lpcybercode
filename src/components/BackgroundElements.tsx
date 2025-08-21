import React from 'react';

const BackgroundElements: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradientes sutis */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/5 via-transparent to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-purple-900/5 via-transparent to-transparent"></div>
      
      {/* Elementos flutuantes otimizados */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500/3 rounded-full blur-3xl floating-element"></div>
      <div 
        className="absolute top-40 right-20 w-32 h-32 bg-purple-500/3 rounded-full blur-3xl floating-element" 
        style={{ animationDelay: '-2s' }}
      ></div>
      <div 
        className="absolute bottom-40 left-1/4 w-48 h-48 bg-cyan-500/3 rounded-full blur-3xl floating-element" 
        style={{ animationDelay: '-4s' }}
      ></div>
      
      {/* Linhas de grade sutis */}
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"></div>
      <div className="absolute bottom-1/3 right-0 w-full h-px bg-gradient-to-l from-transparent via-purple-500/10 to-transparent"></div>
    </div>
  );
};

export default BackgroundElements;
