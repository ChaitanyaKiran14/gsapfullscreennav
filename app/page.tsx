'use client';

import React from 'react';
import { Navigation } from '@/components/Navigation';
import { MenuOverlay } from '@/components/MenuOverlay';
import { HeroSection } from '@/components/HeroSection';
import { useMenuAnimation } from '@/hooks/useMenuAnimation';
import type { MenuLink } from '@/types/menu.types';

const menuLinks: MenuLink[] = [
  { 
    text: 'Visions', 
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop',
    href: '#'
  },
  { 
    text: 'Core', 
    img: 'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&h=1000&fit=crop',
    href: '#'
  },
  { 
    text: 'Signals', 
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=1000&fit=crop',
    href: '#'
  },
  { 
    text: 'Connect', 
    img: 'https://images.unsplash.com/photo-1618172193622-ae2d025f4032?w=800&h=1000&fit=crop',
    href: '#'
  }
];

const defaultImg = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop';

export default function Home() {
  const { handleMenuToggle, handleLinkHover, refs } = useMenuAnimation();

  return (
    <div className="relative w-full h-screen overflow-x-hidden bg-black font-sans">
      <Navigation onToggle={handleMenuToggle} menuOpenRef={refs.menuOpenRef} menuCloseRef={refs.menuCloseRef} />
      <MenuOverlay onLinkHover={handleLinkHover} menuLinks={menuLinks}  defaultImg={defaultImg} menuOverlayRef={refs.menuOverlayRef}  menuContentRef={refs.menuContentRef}  menuPreviewImgRef={refs.menuPreviewImgRef}  />
      <HeroSection containerRef={refs.containerRef} />
    </div>
  );
}