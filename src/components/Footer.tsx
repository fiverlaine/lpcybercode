import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-700/30 bg-black/20 backdrop-blur-xl relative z-10 mt-24">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center">
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
          </div>
          
          <div className="text-gray-500 text-sm font-light tracking-wide">
            <p>© 2024 MÉTODO BÔNUS TURBO. TODOS OS DIREITOS RESERVADOS.</p>
            <p className="mt-2">RESULTADOS PODEM VARIAR. ESTE MÉTODO É PARA FINS EDUCACIONAIS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
