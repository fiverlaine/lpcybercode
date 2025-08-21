import React, { useEffect } from 'react';

const VideoPlayer: React.FC = () => {
  useEffect(() => {
    // Garantir que os scripts do Wistia estejam carregados
    const script1 = document.createElement('script');
    script1.src = 'https://fast.wistia.com/player.js';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://fast.wistia.com/embed/p5bwo4rqe9.js';
    script2.async = true;
    script2.type = 'module';
    document.head.appendChild(script2);

    return () => {
      // Cleanup se necessário
      script1.remove();
      script2.remove();
    };
  }, []);

  return (
    <section className="media mb-8" aria-label="Vídeo demonstrativo do método">
      <div className="wistia-player-container">
        <wistia-player media-id="p5bwo4rqe9"></wistia-player>
      </div>
    </section>
  );
};

export default VideoPlayer;
