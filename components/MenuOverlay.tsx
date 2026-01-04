import React from 'react';
import type { MenuLink } from '@/types/menu.types';


interface MenuOverlayProps {
  menuOverlayRef: React.RefObject<HTMLDivElement | null>;
  menuContentRef: React.RefObject<HTMLDivElement | null>;
  menuPreviewImgRef: React.RefObject<HTMLDivElement | null>;
  onLinkHover: (imgSrc: string) => void;
  menuLinks: MenuLink[];
  defaultImg: string;
}

export const MenuOverlay: React.FC<MenuOverlayProps> = ({
  menuOverlayRef,
  menuContentRef,
  menuPreviewImgRef,
  onLinkHover,
  menuLinks,
  defaultImg,
}) => {
  const socialLinks = ['Behance', 'Dribbble', 'LinkedIn', 'Instagram'];

  return (
    <div ref={menuOverlayRef} className="fixed w-full h-screen bg-[#0f0f0f] z-10" >
      <div ref={menuContentRef} className="relative w-full h-full flex justify-center items-center origin-left-bottom" >
        <div className="w-full px-10 py-10 flex gap-10">
          {/* Large Column - Image Preview */}
          <div className="flex-[3] hidden lg:flex justify-center items-center">
            <div ref={menuPreviewImgRef} className="relative w-[45%] h-full overflow-hidden" >
              <img  src={defaultImg}  alt="Preview"  className="absolute w-full h-full object-cover"/>
            </div>
          </div>

          {/* Small Column - Links */}
          <div className="flex-[2] py-10 flex flex-col gap-10">
            {/* Main Links */}
            <div className="flex flex-col gap-2">
              {menuLinks.map((link, idx) => (
                <div key={idx} className="pb-1.5 overflow-hidden">
                  <a
                    href={link.href}
                    className="menu-link-item inline-block text-white text-5xl lg:text-6xl font-light tracking-tight no-underline select-none relative group"
                    onMouseEnter={() => onLinkHover(link.img)}
                  >
                    {link.text}
                    <span className="absolute left-0 top-[102.5%] w-full h-0.5 bg-white scale-x-0 origin-right transition-transform duration-300 ease-[cubic-bezier(0.6,0,0.4,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
                  </a>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-2">
              {socialLinks.map((social, idx) => (
                <div key={idx} className="pb-1.5 overflow-hidden">
                  <a href="#"  className="menu-social-item inline-block text-[#8f8f8f] text-base font-light no-underline select-none transition-colors duration-500 hover:text-white relative group" >
                    {social}
                    <span className="absolute left-0 top-[102.5%] w-full h-0.5 bg-white scale-x-0 origin-right transition-transform duration-300 ease-[cubic-bezier(0.6,0,0.4,1)] group-hover:scale-x-100 group-hover:origin-left"></span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Menu Footer */}
        <div className="absolute bottom-0 w-full px-10 py-10 flex gap-10">
          <div className="flex-[3]">
            <a href="#" className="text-white text-base font-light no-underline select-none relative group">  Run Sequence  <span className="absolute left-0 top-[102.5%] w-full h-0.5 bg-white scale-x-0 origin-right transition-transform duration-300 ease-[cubic-bezier(0.6,0,0.4,1)] group-hover:scale-x-100 group-hover:origin-left"></span>  </a>
          </div>
          <div className="flex-[2] flex justify-between">
            <a href="#" className="text-white text-base font-light no-underline select-none relative group">  Origin  <span className="absolute left-0 top-[102.5%] w-full h-0.5 bg-white scale-x-0 origin-right transition-transform duration-300 ease-[cubic-bezier(0.6,0,0.4,1)] group-hover:scale-x-100 group-hover:origin-left"></span> </a>
            <a href="#" className="text-white text-base font-light no-underline select-none relative group"> Join Signal  <span className="absolute left-0 top-[102.5%] w-full h-0.5 bg-white scale-x-0 origin-right transition-transform duration-300 ease-[cubic-bezier(0.6,0,0.4,1)] group-hover:scale-x-100 group-hover:origin-left"></span>  </a>
          </div>
        </div>
      </div>
    </div>
  );
};
