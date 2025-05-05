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
      "#solution": {
        background: "#C4C4C426",
      },

      "#values": {
        background: "center / cover url(/images/about3.png)",
      },
      "#team": {
        background: "var(--secondary)",
      },
    }}
  />
);

const AboutPage = () => {
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
                maxWidth={600}
              >
                Who we are
              </Typography>
            </Animator>
          </Box>
          <Animator delay={500}>
            <Typography className="text" maxWidth={700} mb={8}>
              We are a software solution based in Maryland, USA with team
              members all over the world. Since 2015 we have helped over 500
              happy clients achieve their needs, approaching every project with
              special care.
            </Typography>
          </Animator>
          <Animator delay={1000}>
            <Box className="flex" maxWidth={300}>
              <Link href={"/pricing"} style={{ width: "100%" }}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ background: "#fff", color: "#000", py: 1.5, mr: 1 }}
                >
                  Subscribe
                </Button>
              </Link>
              <Link href={"/contact"} style={{ width: "100%" }}>
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

      <section className="section" id="solution">
        <Box className="section-inner">
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Animator timeout={1500}>
                <Typography variant="h4" className="section-header-text">
                  Software solutions <br />
                  built to scale
                </Typography>
              </Animator>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  overflow: "hidden",
                  py: 2,
                  borderLeft: "2px solid #fff",
                  pl: {
                    xs: 4,
                    md: 8,
                    lg: 12,
                  },
                }}
              >
                <Animator
                  variant="slide"
                  direction="right"
                  delay={500}
                  timeout={2000}
                >
                  <Typography className="text">
                    We specialize in building cost-effective software solutions
                    that are well-optimized and scalable. Digital products
                    needto be scaleable  to accommodate the growth of business.
                    Our approach makes it possible to start small with the
                    ability to quickly meet up with increase in demand.
                  </Typography>
                </Animator>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className="section" id="about">
        <Box className="section-inner">
          <Grid
            container
            // alignItems={"center"}
            spacing={{
              xs: 6,
              lg: 14,
            }}
          >
            <Grid item xs={12} md={6}>
              <Animator variant="zoom" delay={500}>
                <Image
                  style={{ width: "100%", height: "auto", objectFit: "cover" }}
                  src={require("../../../public/images/about2.png")}
                  alt=""
                />
              </Animator>
            </Grid>
            <Grid item xs={12} md={6}>
              <Animator>
                <Box>
                  <Box mb={2} className="flex">
                    <Box width={"25%"} mr={2} height={2} bgcolor={"#fffa"} />
                    <Typography color="primary">
                      About <span className="text">Edoubleone</span>
                    </Typography>
                  </Box>
                  <Typography className="section-header-text" mb={4}>
                    Introduction To Best <br />
                    <span style={{ color: "var(--primary)" }}>
                      Digital Agency
                    </span>{" "}
                  </Typography>

                  <Typography className="text" lineHeight={1.6} mb={8}>
                    We specialize in building cost-effective software solutions
                    that are well-optimized and scalable. Digital products need
                    to be scaleable to accommodate the growth of business. Our
                    approach makes it possible to start small with the ability
                    to quickly meet up with increase in demand.
                  </Typography>

                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      py: 2,
                      px: 4,
                      borderRadius: 2,
                    }}
                  >
                    Get in touch
                  </Button>
                </Box>
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>

      <section className="section" id="values">
        <Box className="section-inner">
          <Grid container spacing={4} alignItems={"center"}>
            <Grid item xs={12} md={6}>
              <Box className="flex" mt={-1} mb={3} ml={-2}>
                <ValueIcon height={70} width={70} />
                <Typography variant="h6" fontWeight={200} ml={2}>
                  Our Core Values
                </Typography>
              </Box>
              <Animator delay={500} timeout={1500}>
                <Typography
                  mb={3}
                  textTransform={"capitalize"}
                  variant="h4"
                  className="section-header-text"
                >
                  The things that
                  <br />
                  differentiates us from others
                </Typography>
              </Animator>
              <Link href="/contact">
                <Button
                  variant="outlined"
                  sx={{ py: 2, px: 4, color: "#fff", borderColor: "#fff" }}
                >
                  Contact Us
                </Button>
              </Link>
            </Grid>
            <Grid item xs={12} md={6} container spacing={3}>
              {values.map((cur, i) => (
                <Grid item xs={4} key={cur.label}>
                  <Animator direction="left" variant="slide" delay={i * 200}>
                    <Box
                      height={250}
                      className="flex-column"
                      justifyContent={"center"}
                      border="1px solid #fff9"
                      borderRadius={4}
                    >
                      <Image
                        alt=""
                        style={{ width: 70, height: 70, objectFit: "contain" }}
                        src={cur.image}
                      />
                      <Typography variant="h6" mt={2}>
                        {cur.label}
                      </Typography>
                    </Box>
                  </Animator>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Box>
      </section>
      {/* 
      <section className="section" id="team">
        <Box className="section-inner">
          <Box className="flex-column">
            <Typography mb={1} className="text-primary">
              Meet Our Team
            </Typography>
            <Typography variant="h4" className="section-header-text" mb={2}>
              Our Leadership Team
            </Typography>
            <Typography mb={12} className="text">
              We are an efficient team of logical thinking, creative minds with
              a focus on doing effective work using our problem-solving skills.
            </Typography>
          </Box>

          <Grid
            container
            spacing={{
              xs: 6,
              md: 12,
            }}
          >
            {team.map((cur, i) => (
              <Grid key={i} xs={6} md={4} lg={3} item>
                <Box className="flex-column">
                  <Avatar style={{ height: 180, width: 180 }} />
                  <Typography mt={2} variant="h6">
                    {cur.name}
                  </Typography>
                  <Typography className="text">{cur.role}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section> */}

      <ContactForm />
      <Footer />
    </>
  );
};

export default AboutPage;
