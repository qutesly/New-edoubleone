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
                Services Designed to Move Your Business Forward
              </Typography>
            </Animator>
            <Animator delay={500}>
              <Typography className="text" maxWidth={650} align="center" mb={8}>
                Here’s a look at the full range of services we offer—designed to
                help your business grow, adapt, and lead in today’s digital
                landscape. Whether you're just starting out or scaling up, we
                bring the tools, tech, and expertise to move you forward.
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
            src={require("../../../public/images/services2.png")}
          />
        </Box>
      </header>

      <section className="section">
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Animator timeout={1500}>
                <Box>
                  <Typography className="section-header-text text" mb={2}>
                    WEB DEVELOPMENT
                  </Typography>
                  <Typography className="text" mb={6}>
                    We create a pixel-perfect version of your website, ensuring
                    it meets all the requirements of a modern site. This
                    includes accessibility and adherence to current SEO
                    standards. We understand that every client has unique needs,
                    so we build with the best practices in mind.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid item xs={12} md={6}>
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services3.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section" style={{ background: "var(--secondary)" }}>
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 1,
                md: 2,
              }}
            >
              <Animator timeout={1500}>
                <Box>
                  <Typography className="section-header-text text" mb={2}>
                    UI/UX DESIGNS
                  </Typography>
                  <Typography className="text" mb={6}>
                    A well-designed Website/App is both functional and
                    beautifully designed. We understand this and make sure your
                    app and website are modern-looking, beautifully designed and
                    intuitive to use.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 2,
                md: 1,
              }}
            >
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services4.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section">
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Animator timeout={1500}>
                <Box>
                  <Typography className="section-header-text text" mb={2}>
                    SEO
                  </Typography>
                  <Typography className="text" mb={6}>
                    Driving the right kind of traffic to your website helps to
                    position your business/brand in the right space within your
                    industry. Our approach consists of following proven SEO best
                    practices for your website, from the beginning of
                    development to content choice, ensuring your website ranks
                    in the top spot on major search engines.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid item xs={12} md={6}>
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services5.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section" style={{ background: "var(--secondary)" }}>
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 1,
                md: 2,
              }}
            >
              <Animator timeout={1500}>
                <Box>
                  <Typography className="section-header-text text" mb={2}>
                    WEB HOSTING
                  </Typography>
                  <Typography className="text" mb={6}>
                    Getting the best third-party service to host your website is
                    often a hassle. We help you gauge your needs and budget and
                    select the best package for you. We secure top-level domains
                    keep it maintained to make sure your website never
                    experiences downtime.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 2,
                md: 1,
              }}
            >
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services6.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section">
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Animator timeout={1500}>
                <Box>
                  <Typography
                    textTransform={"uppercase"}
                    className="section-header-text text"
                    mb={2}
                  >
                    Social media management
                  </Typography>
                  <Typography className="text" mb={6}>
                    Social media has become one of the most effective tools for
                    marketing in recent times, with billions of people engaged
                    on different social media, you can reach your target
                    audience using this avenue. We understand the struggle of
                    mastering the use of social media as a business tool, and
                    we'll help you get started building the social media
                    presence for your brand.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid item xs={12} md={6}>
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services7.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section" style={{ background: "var(--secondary)" }}>
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 1,
                md: 2,
              }}
            >
              <Animator timeout={1500}>
                <Box>
                  <Typography className="section-header-text text" mb={2}>
                    AI REVOLUTION
                  </Typography>
                  <Typography className="text" mb={6}>
                    Partner with edoubleone and start implementing smart,
                    effective AI solutions tailored to your business—no tech
                    skills needed!
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 2,
                md: 1,
              }}
            >
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services6.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section">
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid item xs={12} md={6}>
              <Animator timeout={1500}>
                <Box>
                  <Typography
                    textTransform={"uppercase"}
                    className="section-header-text text"
                    mb={2}
                  >
                    AI Automation
                  </Typography>
                  <Typography className="text" mb={6}>
                    Streamline your operations with intelligent automation. We
                    design AI-driven workflows that eliminate repetitive tasks,
                    boost productivity, and enhance overall efficiency.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid item xs={12} md={6}>
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services7.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
              </Animator>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section" style={{ background: "var(--secondary)" }}>
        <Box className="section-inner">
          <Grid
            container
            spacing={{
              xs: 4,
              lg: 12,
            }}
            alignItems={"center"}
          >
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 1,
                md: 2,
              }}
            >
              <Animator timeout={1500}>
                <Box>
                  <Typography className="section-header-text text" mb={2}>
                    AI Agent
                  </Typography>
                  <Typography className="text" mb={6}>
                    Empower your business with smart AI agents that can handle
                    customer support, lead generation, scheduling, and
                    more—working 24/7 to enhance user experience and reduce
                    operational costs.
                  </Typography>

                  <Button sx={{ color: "#fff" }}>VIEW PROJECT</Button>
                </Box>
              </Animator>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              order={{
                xs: 2,
                md: 1,
              }}
            >
              <Animator variant="zoom" delay={500}>
                <Image
                  src={require("../../../public/images/services6.png")}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
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
