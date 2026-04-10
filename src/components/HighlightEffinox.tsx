import React from 'react';

interface HighlightEffinoxProps {
  text: string;
  className?: string;
}

const HighlightEffinox: React.FC<HighlightEffinoxProps> = ({ text, className = "" }) => {
  const parts = text.split(/(EFFINOX)/g);
  
  return (
    <>
      {parts.map((part, index) => 
        part === 'EFFINOX' ? (
          <span key={index} className={`text-red-600 font-bold ${className}`}>
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        )
      )}
    </>
  );
};

export default HighlightEffinox;
