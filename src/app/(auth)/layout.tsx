import AuthLayout from "@/components/Layouts/AuthLayout";
import { Metadata } from "next";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <AuthLayout>{children}</AuthLayout>;
};

export default Layout;
