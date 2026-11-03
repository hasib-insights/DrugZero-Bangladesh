/** Main navigation — order here is the order shown in the header and footer. */
export type NavItem = {
  title: string;
  /** Optional shorter label used in the header nav to keep one line. */
  short?: string;
  href: string;
};

export const mainNav: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "About Us", short: "About", href: "/about" },
  { title: "Our Programs", short: "Programs", href: "/programs" },
  { title: "Activities & Events", short: "Activities", href: "/activities" },
  { title: "Impact & Reports", short: "Impact", href: "/impact" },
  { title: "Get Involved", href: "/get-involved" },
  { title: "Donate", href: "/donate" },
  { title: "Contact", href: "/contact" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Explore",
    items: [
      { title: "About Us", href: "/about" },
      { title: "Activities & Events", href: "/activities" },
      { title: "Impact & Reports", href: "/impact" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Take Part",
    items: [
      { title: "Our Programs", href: "/programs" },
      { title: "Get Involved", href: "/get-involved" },
      { title: "Donate", href: "/donate" },
      { title: "Privacy Policy", href: "/privacy" },
    ],
  },
];
