
import React from 'react';

interface CurlyArrowProps {
  direction?: 'right' | 'left';
}

const CurlyArrow = ({ direction = 'right' }: CurlyArrowProps) => {
  return (
    <div className="hidden md:flex items-center justify-center w-full h-20">
      <svg 
        width="120" 
        height="60" 
        viewBox="0 0 120 60" 
        className={`text-primary/60 ${direction === 'left' ? 'transform rotate-180' : ''}`}
      >
        <path
          d="M0,30 Q30,30 40,15 T80,15 Q100,15 110,30 T120,30"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M110,20 L120,30 L110,40"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default CurlyArrow;
