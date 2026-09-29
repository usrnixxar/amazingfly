import React from 'react';

interface LogoProps {
  className?: string;
  iconOnly?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  iconOnly = false,
  size = 'md',
}) => {
  const iconSizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const textSizes = {
    sm: 'text-base tracking-[0.16em]',
    md: 'text-xl tracking-[0.18em]',
    lg: 'text-2xl tracking-[0.2em]',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none group cursor-pointer ${className}`}>
      {/* Aerodynamic Dual-Wing Futuristic Symbol */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-105`}>
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Primary Outer Aerodynamic Wing Vector */}
          <path
            d="M6 31L20 8L34 31L20 23.5L6 31Z"
            fill="#B7FF45"
            className="transition-colors duration-300 group-hover:fill-[#CEFF70]"
          />
          {/* Secondary Nested Inner Supersonic Wing Vector */}
          <path
            d="M13 28L20 16L27 28L20 23.5L13 28Z"
            fill="#FFFFFF"
            fillOpacity="0.95"
          />
          {/* Central Precision Navigation Core */}
          <circle cx="20" cy="23.5" r="2.2" fill="#0B0D0E" />
          <circle cx="20" cy="23.5" r="1" fill="#B7FF45" />
        </svg>
      </div>

      {!iconOnly && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className={`font-semibold font-sans text-white uppercase ${textSizes[size]}`}>
              AMAZING<span className="text-[#B7FF45] font-light">FLY</span>
            </span>
          </div>
          <span className="font-mono-tech text-[9px] uppercase tracking-[0.25em] text-[#A6AAA9] -mt-1 hidden sm:block">
            AUTONOMOUS AIR SYSTEMS
          </span>
        </div>
      )}
    </div>
  );
};
