"use client";

import Animator from "@/components/Animator";
import ContactForm from "@/components/Home/ContactForm";
import ValueIcon from "@/components/icons/value.svg";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import { team, values } from "@/utils/constants";
import {
  Avatar,
  Box,
  Button,
  GlobalStyles,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const styles = (
  <GlobalStyles
    styles={{
      ".header": {
        display: "flex",
        padding: 20,
        paddingTop: 200,
        alignItems: "center",
        background: "left / cover url(/images/services1.png)",
        backgroundAttachment: "fixed",
        ["@media (min-width : 1200px)"]: {
          paddingTop: 250,
        },
      },
    }}
  />
);

const AboutPage = () => {
  return (
    <>
      {styles}
      <Header watchScroll />
      <header className="header pulsate-bg">
        <Box className="section-inner">
          <Box className="flex-column">
            <Animator>
              <Typography
                color="#fff"
                variant="h1"
                className="section-header-text"
                align="center"
                maxWidth={650}
                mb={4}
              >
                Step-by-Step Guide to Choosing Great font Pairs
              </Typography>
            </Animator>
            <Animator delay={500}>
              <Typography className="text" maxWidth={650} align="center" mb={8}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                dapibus, diam in gravida tristique, ante nibh euis
              </Typography>
            </Animator>
          </Box>

          <Animator delay={1000}>
            <Box className="flex" mb={4} maxWidth={300} mx="auto">
              <Link href="/pricing" style={{ width: "100%" }}>
                <Button
                  fullWidth
                  variant="contained"
                  sx={{
                    backgroundColor: "#fff",
                    color: "#000",
                    py: 2.5,
                    mr: 1,
                  }}
                >
                  Subscribe
                </Button>
              </Link>

              <Link href="/portfolio" style={{ width: "100%" }}>
                <Button
                  variant="outlined"
                  fullWidth
                  sx={{ ml: 1, py: 2.5, color: "#fff", borderColor: "#fff" }}
                >
                  View Portfolio
                </Button>
              </Link>
            </Box>
          </Animator>

          <Image
            alt=""
            style={{ width: "100%", display: "block" }}
            src={require("../../../public/images/blog1.png")}
          />
        </Box>
      </header>

      <section className="section">
        <Box className="section-inner">
          <Box pb={4} borderBottom="1px solid #fff5" mb={12}>
            <Typography className="section-header-text">All Posts</Typography>
          </Box>
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/blog2.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
            <Grid item xs={12} md={6}>
              <Animator timeout={1500}>
                <Box>
                  <Typography textTransform={"uppercase"} mb={2} variant="h6">
                    startup
                  </Typography>
                  <Typography className="section-header-text text" mb={2}>
                    Design tips for designers that cover everything you need
                  </Typography>
                  <Typography className="text" mb={6}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce dapibus, diam in gravida tristique, ante nibh euismod
                    turpis, a vestibulum quam sem vitae magna. Integer felis
                    tellus, molestie eget vestibulum non, dictum in massa.
                    Nullam pellentesque interdum arcu, vitae euismod urna
                    pulvinar finibus. Donec rhoncus tincidunt magna et
                    vulputate. In malesuada dui mollis sollicitudin vulputate.
                    Donec eu risus quis justo varius facilisis. Class aptent
                    taciti sociosqu ad litora torquent per conubia nostra, per
                    inceptos himenaeos.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>READ MORE</Button>
                </Box>
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>

      <ContactForm />
      <Footer />
    </>
  );
};

export default AboutPage;
