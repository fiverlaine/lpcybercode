import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-none tracking-tight">
        <span className="hero-gradient">MÉTODO</span>
        <br />
        <span className="text-white">CYBERCODE</span>
      </h1>
      
      {/* Subtítulo elegante */}
      <div className="max-w-4xl mx-auto">
        <p className="text-2xl text-gray-300 font-light tracking-wide mb-6">
          Descubra como brasileiros estão sacando mais de{' '}
          <span className="hero-gradient font-semibold">R$1.000</span>{' '}
          com uma falha técnica ainda não corrigida
        </p>
        <p 
          className="text-gray-400 font-medium" 
          style={{ fontSize: '0.854rem', lineHeight: '0.945rem' }}
        >
          Esse conteúdo já foi censurado. A única forma de acessar é dentro do grupo VIP gratuito.
        </p>
      </div>
    </div>
  );
};

export default Hero;
