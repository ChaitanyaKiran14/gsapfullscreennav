import React from 'react';

interface NavigationProps {
  onToggle: () => void;
  menuOpenRef: React.RefObject<HTMLParagraphElement | null>;
  menuCloseRef: React.RefObject<HTMLParagraphElement | null>;
}


export const Navigation: React.FC<NavigationProps> = ({ onToggle, menuOpenRef, menuCloseRef,}) => {
  return (
    <nav className="fixed w-full px-10 py-10 flex justify-between items-center z-20">
      <div className="logo">
        <a href="#" className="text-white text-base font-semibold no-underline select-none"> Void Construct </a>
      </div>
      <div className="relative w-12 h-6 cursor-pointer" onClick={onToggle} >
        <p ref={menuOpenRef} className="absolute text-white text-base font-light select-none origin-top-left"> Menu</p>
        <p ref={menuCloseRef}  className="absolute text-white text-base font-light select-none origin-top-left" > Close  </p>
      </div>
    </nav>
  );
};