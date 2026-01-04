export interface MenuLink {
  text: string;
  img: string;
  href: string;
}

export interface MenuAnimationRefs {
  containerRef: React.RefObject<HTMLDivElement | null>;
  menuOverlayRef: React.RefObject<HTMLDivElement | null>;
  menuContentRef: React.RefObject<HTMLDivElement | null>;
  menuPreviewImgRef: React.RefObject<HTMLDivElement | null>;
  menuOpenRef: React.RefObject<HTMLParagraphElement | null>;
  menuCloseRef: React.RefObject<HTMLParagraphElement | null>;
}

export interface UseMenuAnimationReturn {
  isOpen: boolean;
  isAnimating: boolean;
  handleMenuToggle: () => void;
  handleLinkHover: (imgSrc: string) => void;
  refs: MenuAnimationRefs;
}

