import React from 'react';

const WhatsAppIcon = ({ size = 18, className = '' }) => {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/WhatsApp_icon.png/640px-WhatsApp_icon.png"
      alt="WhatsApp Icon"
      style={{ width: size, height: size }}
      className={className}
    />
  );
};

export default WhatsAppIcon;
