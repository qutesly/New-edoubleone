import AuthLayout from "@/components/Layouts/AuthLayout";
import CheckoutLayout from "@/components/Layouts/CheckoutLayout";
import { Metadata } from "next";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Checkout - E-Doubleone INC",
  openGraph: {
    type: "website",
    title: "Checkout - E-Doubleone INC",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <CheckoutLayout>{children}</CheckoutLayout>;
};

export default Layout;
