"use client";
import PricingSection from "@/components/Home/PricingSection";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import { Box, GlobalStyles } from "@mui/material";

const styles = (
  <GlobalStyles
    styles={{
      "body,html": {
        background: "var(--secondary)",
      },
    }}
  />
);

const PricingPage = () => {
  return (
    <>
      {styles}
      <Header />
      <Box height={100} />

      <PricingSection />
      <Footer />
    </>
  );
};

export default PricingPage;
