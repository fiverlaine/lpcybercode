import React from 'react';
import Header from './components/Header';
import BackgroundElements from './components/BackgroundElements';
import VagasBadge from './components/VagasBadge';
import Hero from './components/Hero';
import VideoPlayer from './components/VideoPlayer';
import CTASection from './components/CTASection';
import UrgencyMessages from './components/UrgencyMessages';
import Footer from './components/Footer';
import Notification from './components/Notification';

function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-black min-h-screen font-body relative overflow-x-hidden">
      {/* Header fixo com contador */}
      <Header />

      {/* Notificações */}
      <Notification />

      {/* Espaçador para o header fixo */}
      <div className="header-spacer"></div>

      {/* Background Elements Modernos */}
      <BackgroundElements />

      {/* Hero Section */}
      <main className="relative z-10">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            
            {/* Badge de Urgência */}
            <VagasBadge />

            {/* Título Principal */}
            <Hero />

            {/* Vídeo do Comprovante */}
            <VideoPlayer />

            {/* CTA Principal - Com Sistema de Timer e Substituição */}
            <CTASection />

            {/* Textos de Pressão Psicológica */}
            <UrgencyMessages />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
