import React from "react";
import { Link } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";

import styles from "./PremiumCtaButton.module.scss";

interface PremiumCtaButtonProps {
  children: React.ReactNode;
  to: string;
  className?: string;
  ariaLabel?: string;
}

export default function PremiumCtaButton({
  children,
  to,
  className,
  ariaLabel,
}: PremiumCtaButtonProps) {
  return (
    <Link
      className={[styles.ctaButton, className].filter(Boolean).join(" ")}
      to={to}
      aria-label={ariaLabel}
    >
      {children}
      <ArrowUpRight size={17} aria-hidden="true" />
    </Link>
  );
}
