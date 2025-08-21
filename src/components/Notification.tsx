import React from 'react';
import { useNotifications } from '../hooks/useNotifications';

const Notification: React.FC = () => {
  const { currentMessage, showNotification } = useNotifications();

  if (!showNotification) return null;

  return (
    <div className={`notification ${showNotification ? 'show' : ''}`}>
      <div className="notification-icon">⚡</div>
      <div>{currentMessage}</div>
    </div>
  );
};

export default Notification;
