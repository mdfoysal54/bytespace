import React from "react";
import Link from "next/link";

interface LogoProps {
  dark?: boolean;
}

export function Logo({ dark = false }: LogoProps): React.JSX.Element {
  return (
    <Link
      href="/"
      className={`brand ${dark ? "brand-dark" : ""}`}
      aria-label="ByteSpace home"
    >
      <span className="brand-mark">
        <span />
        <span />
        <span />
      </span>
      <span>ByteSpace</span>
    </Link>
  );
}

export default Logo;