import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Portfolio - E-Doubleone INC",
  openGraph: {
    title: "Portfolio- E-Doubleone INC",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
