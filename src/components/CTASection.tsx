import React, { useState, useEffect } from 'react';
import { useCountdown } from '../hooks/useCountdown';

const CTASection: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  const { formattedTime, isFinished } = useCountdown({
    duration: 5, // 5 segundos
    onComplete: () => {
      setTimeout(() => {
        setShowButton(true);
        
        // Mostrar notificação de sucesso
        const successNotification = document.createElement('div');
        successNotification.className = 'notification';
        successNotification.innerHTML = `
          <div class="notification-icon">🎉</div>
          <div>Botão desbloqueado! Entre agora no grupo VIP!</div>
        `;
        
        document.body.appendChild(successNotification);
        setTimeout(() => successNotification.classList.add('show'), 100);
        
        setTimeout(() => {
          successNotification.classList.remove('show');
          setTimeout(() => successNotification.remove(), 400);
        }, 5000);
      }, 600);
    }
  });

  return (
    <div className="cta-area">
      <div className="cta-timer-wrapper">
        <div className={`cta-timer-container ${isFinished ? 'hide' : ''}`}>
          <div className="timer-title">
            <span className="hero-gradient">O acesso será desbloqueado automaticamente em:</span>
          </div>
          <div className="countdown-display">{formattedTime}</div>
        </div>
        
        <div className={`cta-button-hidden ${showButton ? 'show' : ''}`}>
          <a 
            className="btn-primary" 
            href="https://t.me/seugrupo" 
            target="_blank" 
            rel="noopener"
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              aria-hidden="true"
            >
              <path 
                d="M9.04 15.27 8.9 19.1c.36 0 .52-.16.71-.36l1.71-1.65 3.55 2.6c.65.36 1.1.16 1.26-.6l2.29-10.76c.2-.95-.36-1.32-1-.1L6.6 13.1c-.94.37-.9.9-.16 1.14l3.6 1.03 8.38-5.3-9.38 5.3z" 
                fill="white"
              />
            </svg>
            Entrar no Grupo VIP Agora
          </a>
          <div className="btn-note">Ao clicar você será redirecionado para o Telegram</div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
