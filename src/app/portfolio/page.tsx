"use client";

import Animator from "@/components/Animator";
import ContactForm from "@/components/Home/ContactForm";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import PortfolioItem from "@/components/Portfolio/PorfolioItem";
import { getPortfolio } from "@/redux/actions/portfolio";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Box, Button, GlobalStyles, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useEffect } from "react";

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
          minHeight: "850px",
        },
      },
      "#FAQ": {
        background: "var(--secondary)",
      },
    }}
  />
);

const AboutPage = () => {
  const { data } = useAppSelector((s) => s.portfolio);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPortfolio());
  }, []);

  return (
    <>
      {styles}
      <Header watchScroll />
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
                maxWidth={800}
              >
                Products speak louder than code. Discover some of our latest
                projects.
              </Typography>
            </Animator>
          </Box>
          <Animator delay={500}>
            <Typography className="text" maxWidth={700} mb={8}>
              Discover our collection of perfectly crafted custom software
              solutions built to solve a problem or meet a customers exact need.
              Every project here represents a fully satisfied and happy
              customer, and you could be the next.
            </Typography>
          </Animator>
          <Animator delay={1000}>
            <Box className="flex" maxWidth={300}>
              <Link href="/pricing" style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ background: "#fff", color: "#000", py: 1.5, mr: 1 }}
                >
                  Subscribe
                </Button>
              </Link>

              <Link href="/contact" style={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ ml: 1, py: 1.5, color: "#fff", borderColor: "#fff" }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Animator>
        </Box>
      </header>

      <section className="section" style={{ background: "var(--secondary)" }}>
        <Box className="section-inner">
          <Box className="flex" mb={4}>
            <Typography className="section-header-text">OUR WORK</Typography>
          </Box>

          <Grid container spacing={6}>
            {data?.map((cur) => (
              <Grid item xs={12} md={6} lg={4} key={cur.id}>
                <PortfolioItem {...cur} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>
      {/* <section className="section" id="FAQ">
        <Box className="section-inner">
          <Typography mb={1} className="text">
            FAQ’s
          </Typography>
          <Typography
            textTransform={"uppercase"}
            className="section-header-text "
          >
            Frequently Asked Questions
          </Typography>
        </Box>
      </section> */}

      <ContactForm />
      <Footer />
    </>
  );
};

export default AboutPage;
