/** Main navigation — order here is the order shown in the header and footer. */
import { tx, type LText } from "@/lib/i18n";

export type NavItem = {
  title: LText;
  /** Optional shorter label used in the header nav to keep one line. */
  short?: LText;
  href: string;
};

export const mainNav: NavItem[] = [
  { title: tx("Home", "হোম"), href: "/" },
  { title: tx("About Us", "আমাদের সম্পর্কে"), short: tx("About", "সম্পর্কে"), href: "/about" },
  { title: tx("Our Programs", "আমাদের প্রোগ্রাম"), short: tx("Programs", "প্রোগ্রাম"), href: "/programs" },
  { title: tx("Activities & Events", "কার্যক্রম ও ইভেন্ট"), short: tx("Activities", "কার্যক্রম"), href: "/activities" },
  { title: tx("Impact & Reports", "প্রভাব ও প্রতিবেদন"), short: tx("Impact", "প্রভাব"), href: "/impact" },
  { title: tx("Get Involved", "যুক্ত হোন"), href: "/get-involved" },
  { title: tx("Donate", "অনুদান দিন"), href: "/donate" },
  { title: tx("Contact", "যোগাযোগ"), href: "/contact" },
];

export const footerNav: { heading: LText; items: NavItem[] }[] = [
  {
    heading: tx("Explore", "ঘুরে দেখুন"),
    items: [
      { title: tx("About Us", "আমাদের সম্পর্কে"), href: "/about" },
      { title: tx("Activities & Events", "কার্যক্রম ও ইভেন্ট"), href: "/activities" },
      { title: tx("Impact & Reports", "প্রভাব ও প্রতিবেদন"), href: "/impact" },
      { title: tx("Contact", "যোগাযোগ"), href: "/contact" },
    ],
  },
  {
    heading: tx("Take Part", "অংশ নিন"),
    items: [
      { title: tx("Our Programs", "আমাদের প্রোগ্রাম"), href: "/programs" },
      { title: tx("Get Involved", "যুক্ত হোন"), href: "/get-involved" },
      { title: tx("Donate", "অনুদান দিন"), href: "/donate" },
      { title: tx("Privacy Policy", "গোপনীয়তা নীতি"), href: "/privacy" },
    ],
  },
];
