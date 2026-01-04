import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

import type { UseMenuAnimationReturn } from '@/types/menu.types';

const defaultImg = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=1000&fit=crop';

export const useMenuAnimation = (): UseMenuAnimationReturn => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);  //belongs to hero component page
  
  const menuOpenRef = useRef<HTMLParagraphElement>(null); //belongs to Navbar comp menu button 
  const menuCloseRef = useRef<HTMLParagraphElement>(null);  //belongs to Navbar comp menu button

  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuContentRef = useRef<HTMLDivElement>(null);
  const menuPreviewImgRef = useRef<HTMLDivElement>(null);
  

  const cleanupPreviewImages = () => {
    if (!menuPreviewImgRef.current) return;
    const previewImages = menuPreviewImgRef.current.querySelectorAll('img');
    if (previewImages.length > 3) {
      for (let i = 0; i < previewImages.length - 3; i++) {
        menuPreviewImgRef.current.removeChild(previewImages[i]);
      }
    }
  };

  const resetPreviewImage = () => {
    if (!menuPreviewImgRef.current) return;
    menuPreviewImgRef.current.innerHTML = '';
    const defaultPreviewImg = document.createElement('img');
    defaultPreviewImg.src = defaultImg;
    defaultPreviewImg.className = 'absolute w-full h-full object-cover';
    menuPreviewImgRef.current.appendChild(defaultPreviewImg);
  };

  const animateMenuToggle = (isOpening: boolean) => {
    gsap.to(isOpening ? menuOpenRef.current : menuCloseRef.current, {
      x: -5,
      y: isOpening ? -10 : 10,
      rotation: isOpening ? -5 : 5,
      opacity: 0,
      delay: 0.25,
      duration: 0.5,
      ease: 'power2.out',
    });

    gsap.to(isOpening ? menuCloseRef.current : menuOpenRef.current, {
      x: 0,
      y: 0,
      rotation: 0,
      opacity: 1,
      delay: 0.5,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const openMenu = () => {
    if (isAnimating || isOpen) return;
    setIsAnimating(true);

    gsap.to(containerRef.current, {
      rotation: 10,
      x: 300,
      y: 450,
      scale: 1.5,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    animateMenuToggle(true);

    gsap.to(menuContentRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    gsap.to('.menu-link-item, .menu-social-item', {
      y: '0%',
      delay: 0.75,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)',
      duration: 1.25,
      ease: 'power4.inOut',
      onComplete: () => {
        setIsOpen(true);
        setIsAnimating(false);
      },
    });
  };

  const closeMenu = () => {
    if (isAnimating || !isOpen) return;
    setIsAnimating(true);

    gsap.to(containerRef.current, {
      rotation: 0,
      x: 0,
      y: 0,
      scale: 1,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    animateMenuToggle(false);

    gsap.to(menuContentRef.current, {
      rotation: -15,
      x: -100,
      y: -100,
      scale: 1.5,
      opacity: 0.25,
      duration: 1.25,
      ease: 'power4.inOut',
    });

    gsap.to(menuOverlayRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      duration: 1.25,
      ease: 'power4.inOut',
      onComplete: () => {
        setIsOpen(false);
        setIsAnimating(false);
        gsap.set('.menu-link-item, .menu-social-item', { y: '120%' });
        resetPreviewImage();
      },
    });
  };

  const handleMenuToggle = () => {
    if (!isOpen) openMenu();
    else closeMenu();
  };

  const handleLinkHover = (imgSrc: string) => {
    if (!isOpen || isAnimating || !menuPreviewImgRef.current) return;

    const previewImages = menuPreviewImgRef.current.querySelectorAll('img');
    if (previewImages.length > 0 && previewImages[previewImages.length - 1].src === imgSrc) return;

    const newPreviewImg = document.createElement('img');
    newPreviewImg.src = imgSrc;
    newPreviewImg.className = 'absolute w-full h-full object-cover';
    newPreviewImg.style.opacity = '0';
    newPreviewImg.style.transform = 'scale(1.25) rotate(10deg)';

    menuPreviewImgRef.current.appendChild(newPreviewImg);
    cleanupPreviewImages();

    gsap.to(newPreviewImg, {
      opacity: 1,
      scale: 1,
      rotation: 0,
      duration: 0.75,
      ease: 'power2.out',
    });
  };

  useGSAP(() => {
    gsap.set(menuCloseRef.current, {
      opacity: 0,
      x: -5,
      y: 10,
      rotation: 5,
    });

    gsap.set('.menu-link-item, .menu-social-item', {
      y: '120%',
      opacity: 0.25,
    });

    gsap.set(menuContentRef.current, {
      x: -100,
      y: -100,
      scale: 1.5,
      rotation: -15,
      opacity: 0.25,
    });

    gsap.set(menuOverlayRef.current, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    });
  });

  return {
    isOpen,
    isAnimating,
    handleMenuToggle,
    handleLinkHover,
    refs: {
      containerRef,
      menuOverlayRef,
      menuContentRef,
      menuPreviewImgRef,
      menuOpenRef,
      menuCloseRef,
    },
  };
};

