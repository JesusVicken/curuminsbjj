import React from "react";
import {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Award,
  Shield,
  Heart,
  Users,
  Check,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Star,
  BookOpen,
  User,
  Briefcase,
} from "lucide-react";

export const Icons = {
  Menu,
  X,
  ChevronDown,
  ChevronUp,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Clock,
  Award,
  Shield,
  Heart,
  Users,
  Check,
  ArrowRight,
  Instagram,
  Facebook,
  Youtube,
  Star,
  BookOpen,
  User,
  Briefcase,
  // Custom SVG Belt Icon (BJJ Theme)
  Belt: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      {...props}
    >
      <rect x="2" y="9" width="20" height="6" rx="1" fill="currentColor" opacity="0.2" />
      <line x1="2" y1="9" x2="22" y2="9" />
      <line x1="2" y1="15" x2="22" y2="15" />
      <rect x="14" y="9" width="4" height="6" fill="currentColor" />
    </svg>
  ),
  // Custom SVG Kimono Icon
  Kimono: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={props.className}
      {...props}
    >
      <path d="M4 3h16l2 8h-4v10H6V11H2z" />
      <path d="M12 3v8" />
      <path d="M8 8l4 3 4-3" />
      <path d="M6 16h12" />
    </svg>
  ),
};
export type IconType = keyof typeof Icons;
