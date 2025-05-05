import AccountLayout from "@/components/Layouts/AccountLayout";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Admin | Summit Alliance Group",
  openGraph: {
    type: "website",
    title: "Admin | Summit Alliance Group",
  },
};

const Layout = ({ children }: { children: ReactNode }) => {
  return <AccountLayout>{children}</AccountLayout>;
};

export default Layout;
