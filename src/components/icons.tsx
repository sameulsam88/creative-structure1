type IconProps = { className?: string };

function S({
  className,
  children,
  fill = false,
}: {
  className?: string;
  children: React.ReactNode;
  fill?: boolean;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"}
      stroke={fill ? "none" : "currentColor"}
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const IconArrow = (p: IconProps) => (
  <S {...p}>
    <path d="M5 12h14" />
    <path d="M13 6l6 6-6 6" />
  </S>
);
export const IconArrowUp = (p: IconProps) => (
  <S {...p}>
    <path d="M12 19V5" />
    <path d="M6 11l6-6 6 6" />
  </S>
);
export const IconPhone = (p: IconProps) => (
  <S {...p}>
    <path d="M6.6 10.8a13 13 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11 11 0 0 0 3.5.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.3a1 1 0 0 1 1 1 11 11 0 0 0 .57 3.5 1 1 0 0 1-.25 1z" />
  </S>
);
export const IconMail = (p: IconProps) => (
  <S {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M3 7l9 6 9-6" />
  </S>
);
export const IconPin = (p: IconProps) => (
  <S {...p}>
    <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11z" />
    <circle cx="12" cy="10" r="2.5" />
  </S>
);
export const IconClock = (p: IconProps) => (
  <S {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </S>
);
export const IconMenu = (p: IconProps) => (
  <S {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </S>
);
export const IconClose = (p: IconProps) => (
  <S {...p}>
    <path d="M6 6l12 12" />
    <path d="M18 6L6 18" />
  </S>
);
export const IconCheck = (p: IconProps) => (
  <S {...p}>
    <path d="M5 12l4 4 10-11" />
  </S>
);
export const IconShield = (p: IconProps) => (
  <S {...p}>
    <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    <path d="M9 12l2 2 4-4" />
  </S>
);
export const StarSolid = (p: IconProps) => (
  <S {...p} fill>
    <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77 5.82 21l1.18-6.88-5-4.87 7.1-1.01z" />
  </S>
);
export const IconQuote = (p: IconProps) => (
  <S {...p} fill>
    <path d="M7 7h4v4c0 3-1.5 5-4 6v-2c1.2-.6 2-1.5 2-3H7zM14 7h4v4c0 3-1.5 5-4 6v-2c1.2-.6 2-1.5 2-3h-2z" />
  </S>
);

/* Service icons */
export const IconHome = (p: IconProps) => (
  <S {...p}>
    <path d="M3 11l9-7 9 7" />
    <path d="M5 10v10h14V10" />
    <path d="M10 20v-6h4v6" />
  </S>
);
export const IconBuilding = (p: IconProps) => (
  <S {...p}>
    <rect x="4" y="3" width="16" height="18" rx="1" />
    <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    <path d="M10 21v-3h4v3" />
  </S>
);
export const IconReno = (p: IconProps) => (
  <S {...p}>
    <path d="M14.5 3.5l6 6-2.5 2.5-6-6z" />
    <path d="M12 8L4 16v4h4l8-8" />
  </S>
);
export const IconFrame = (p: IconProps) => (
  <S {...p}>
    <path d="M4 20L4 4L20 20Z" />
    <path d="M4 9h3M4 14h3M9 20v-3M14 20v-3" />
  </S>
);
export const IconDrywall = (p: IconProps) => (
  <S {...p}>
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="M9 5v14M15 5v14" />
    <path d="M3 12h6M15 12h6M9 9h6M9 15h6" />
  </S>
);
export const IconFloor = (p: IconProps) => (
  <S {...p}>
    <rect x="3" y="4" width="18" height="16" rx="1" />
    <path d="M3 9h18M3 14h18" />
    <path d="M9 4v5M15 9v5M8 14v6M14 14v6" />
  </S>
);
export const IconPaint = (p: IconProps) => (
  <S {...p}>
    <rect x="3" y="3" width="13" height="6" rx="1" />
    <path d="M16 6h3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H10v3" />
    <rect x="8" y="15" width="4" height="6" rx="1" />
  </S>
);
export const IconConcrete = (p: IconProps) => (
  <S {...p}>
    <rect x="3" y="6" width="18" height="12" rx="1" />
    <path d="M3 12h18" />
    <path d="M9 6v6M15 6v6M6 12v6M12 12v6M18 12v6" />
  </S>
);
export const IconWindow = (p: IconProps) => (
  <S {...p}>
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M12 4v16M4 12h16" />
    <path d="M3 20h18" />
  </S>
);
export const IconImprove = (p: IconProps) => (
  <S {...p}>
    <path d="M12 3l1.8 4.7L18.5 9 14 11l-2 5-2-5-4.5-1.3L10.2 7.7z" />
    <path d="M18 14l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8z" />
  </S>
);
export const IconRepair = (p: IconProps) => (
  <S {...p}>
    <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.5-.7-.7-2.5z" />
  </S>
);
export const IconManage = (p: IconProps) => (
  <S {...p}>
    <rect x="5" y="4" width="14" height="17" rx="2" />
    <path d="M9 4a3 3 0 0 1 6 0" />
    <path d="M8 10h8M8 14h8M8 18h5" />
  </S>
);
export const IconInterior = (p: IconProps) => (
  <S {...p}>
    <path d="M4 11V9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
    <path d="M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2" />
    <path d="M5 16v3M19 16v3M8 11V9M16 11V9" />
  </S>
);
export const IconExterior = (p: IconProps) => (
  <S {...p}>
    <path d="M4 11l8-6 8 6" />
    <path d="M6 10v10h12V10" />
    <path d="M10 20v-5h4v5" />
    <path d="M15 5V3" />
  </S>
);

export const serviceIconMap: Record<string, (p: IconProps) => React.ReactElement> = {
  home: IconHome,
  building: IconBuilding,
  reno: IconReno,
  frame: IconFrame,
  drywall: IconDrywall,
  floor: IconFloor,
  paint: IconPaint,
  concrete: IconConcrete,
  window: IconWindow,
  improve: IconImprove,
  repair: IconRepair,
  manage: IconManage,
  interior: IconInterior,
  exterior: IconExterior,
};
