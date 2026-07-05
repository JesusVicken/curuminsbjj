import React from "react";
import Link from "next/link";

interface NavbarLinkProps {
  href: string;
  label: string;
  onClick?: () => void;
}

export const NavbarLink: React.FC<NavbarLinkProps> = ({ href, label, onClick }) => {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="relative text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors hover:text-gold-accent py-2 cursor-pointer group"
    >
      {label}
      <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
};
export default NavbarLink;
