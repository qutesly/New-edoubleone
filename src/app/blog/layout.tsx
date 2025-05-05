import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Us - E-Doubleone INC",
  openGraph: {
    title: "About Us- E-Doubleone INC",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
