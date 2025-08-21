import React from 'react';

const UrgencyMessages: React.FC = () => {
  return (
    <>
      <div className="urgency-text">
        ⚠️ As vagas estão diminuindo automaticamente a cada minuto...
      </div>
      <div className="urgency-text">
        🚨 Se você sair dessa página, pode não conseguir voltar
      </div>
      <div className="urgency-text">
        🔒 O grupo fecha ao atingir o limite de vagas
      </div>
    </>
  );
};

export default UrgencyMessages;
