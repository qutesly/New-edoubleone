"use client";
import Animator from "@/components/Animator";
import ContactForm from "@/components/Home/ContactForm";
import PricingSection from "@/components/Home/PricingSection";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import { Box, Button, GlobalStyles, Typography } from "@mui/material";
import Link from "next/link";

const styles = (
  <GlobalStyles
    styles={{
      ".header": {
        height: "700px",
        display: "flex",
        padding: 30,
        alignItems: "center",
        background: "center / cover url(/images/about1.jpg)",
        backgroundAttachment: "fixed",
        ["@media (min-width : 1200px)"]: {
          minHeight: "650px",
        },
      },
    }}
  />
);

const PricingPage = () => {
  return (
    <>
      {styles}
      <header className="header">
        <Box className="section-inner" width={"100%"}>
          <Box
            overflow={"hidden"}
            borderLeft={"4px solid var(--primary)"}
            pl={2}
            mb={4}
          >
            <Animator variant="slide" direction="right">
              <Typography
                color="#fff"
                variant="h1"
                className="section-header-text"
                textTransform={"uppercase"}
                maxWidth={800}
              >
                Get in Touch with US
              </Typography>
            </Animator>
          </Box>
          <Animator delay={500}>
            <Typography className="text" maxWidth={700} mb={8}>
              Got an idea you would like to bring to life but not sure where to
              start ? Reach out to us today and let's get started building the
              custom solution that will solve all your software needs.
            </Typography>
          </Animator>
        </Box>
      </header>
      <Header />
      <ContactForm />
      <Footer />
    </>
  );
};

export default PricingPage;
