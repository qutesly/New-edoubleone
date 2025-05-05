"use client";

import Animator from "@/components/Animator";
import ContactForm from "@/components/Home/ContactForm";
import Footer from "@/components/navs/Footer";
import Header from "@/components/navs/Header";
import { services, solutions, stats } from "@/utils/constants";
import Typewriter from "typewriter-effect";
import { FormatQuote } from "@mui/icons-material";
import { Box, Button, GlobalStyles, Grid, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import PricingSection from "@/components/Home/PricingSection";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { getPortfolio } from "@/redux/actions/portfolio";

const styles = (
  <GlobalStyles
    styles={{
      ".header": {
        height: "700px",
        display: "flex",
        padding: 20,
        alignItems: "center",
        background: "left / cover url(/images/home1.png)",
        backgroundAttachment: "fixed",
        ["@media (min-width : 1200px)"]: {
          minHeight: "100vh",
        },
      },
      "#process": {
        background: "var(--secondary)",
      },
      "#works": {
        background: "var(--secondary)",
      },
    }}
  />
);

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const { data } = useAppSelector((s) => s.portfolio);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPortfolio());
    setIsClient(true);
  }, []);
  const handleRedirect = () => {
    window.open("https://edoubleone.com/", "_blank");
  };

  if (!isClient) return null;

  return (
    <>
      {styles}
      <Header />
      <header className="header pulsate-bg">
        <Box className="section-inner">
          <Animator variant="grow" timeout={1000}>
            <Typography
              color="#fff"
              variant="h1"
              className="header-text"
              align="center"
              maxWidth={700}
              sx={{
                "& .Typewriter": {
                  display: "inline",
                },
              }}
              mb={4}
            >
              Build, Test and Deploy with{" "}
              <span style={{ color: "var(--primary)" }}>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Quality")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Value")
                      .pauseFor(2000)
                      .deleteAll()
                      .typeString("Excellence")
                      .pauseFor(2000)
                      .deleteAll()
                      .start();
                  }}
                  options={{
                    loop: true,
                  }}
                />
              </span>
            </Typography>
          </Animator>
          <Animator delay={500}>
            <Typography className="text" maxWidth={700} align="center" mb={8}>
              We are committed towards offering optimal customer satisfaction
              while delivering the best end to end tech solutions.
            </Typography>
          </Animator>
          <Animator delay={1000}>
            <Box className="flex" maxWidth={500} mx="auto">
              <Link href="/pricing" style={{ width: "100%" }}>
                <Button variant="contained" fullWidth sx={{ py: 1.5, mr: 1 }}>
                  Subscribe
                </Button>
              </Link>
              {/* <Link href="/portfolio" style={{ width: "100%" }}> */}
              {/* <a href=""> */}
              <Button
                onClick={handleRedirect}
                variant="outlined"
                style={{ width: "100%" }}
                fullWidth
                sx={{ ml: 1, py: 1.5, color: "#fff" }}
              >
                View Portfolio
              </Button>
              {/* </a> */}

              {/* </Link> */}
            </Box>
          </Animator>
        </Box>
      </header>

      <section className="section" id="services">
        <Box className="section-inner">
          <Box className="flex-column">
            <Typography mb={1} className="text-primary">
              Our Premium Services
            </Typography>
            <Typography variant="h4" className="section-header-text" mb={12}>
              Here’s Our Services
            </Typography>
          </Box>

          <Grid
            container
            spacing={{
              xs: 6,
              lg: 12,
            }}
          >
            {services.map((cur, i) => (
              <Grid item xs={12} md={4} key={cur.title}>
                <Animator delay={200 * i} variant="grow">
                  <Box className="flex-column" textAlign={"center"}>
                    {cur.icon}
                    <Typography mt={3} mb={2} variant="h6">
                      {cur.title}
                    </Typography>
                    <Typography variant="body2" className="text">
                      {cur.description}
                    </Typography>
                  </Box>
                </Animator>
              </Grid>
            ))}
          </Grid>
        </Box>
      </section>

      <PricingSection />

      <section className="section" id="subscription">
        <Box className="section-inner">
          <Grid container spacing={{ xs: 4, lg: 36 }}>
            <Grid item xs={12} lg={6}>
              <Typography variant="h4" className="section-header-text">
                The Solution to All Your Business Challenges.
              </Typography>
            </Grid>
            <Grid item xs={12} lg={6}>
              <Typography className="text" mb={6}>
                A business owner has only one head but has to wear different
                hats, but what if you could get professional help managing
                different aspects of your business? Our subscription covers
                everything you need to get started and get ahead as a small
                business, so you can focus on what is really important.
              </Typography>
              <Link href={"/pricing"}>
                <Button variant="contained" size="large">
                  See Prices
                </Button>
              </Link>
            </Grid>
          </Grid>

          <Box
            mt={16}
            mb={{ xs: 12, md: 18 }}
            maxWidth={1200}
            overflow={"hidden"}
          >
            <Box margin={-1}>
              <Grid container>
                {solutions.map(({ Icon, description, title }, i) => (
                  <Grid key={title} xs={6} md={4}>
                    <Animator delay={i * 200}>
                      <Box
                        py={6}
                        px={{
                          xs: 1,
                          md: 4,
                        }}
                        border="1px solid #fff1"
                        height={"100%"}
                      >
                        <Image
                          alt=""
                          src={Icon}
                          style={{
                            height: 36,
                            width: 36,
                            objectFit: "contain",
                          }}
                        />
                        <Typography mb={1} mt={2}>
                          {i + 1}. {title}
                        </Typography>
                        <Typography variant="body2" className="text">
                          {description}
                        </Typography>
                      </Box>
                    </Animator>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>

          <Grid
            container
            alignItems={"center"}
            spacing={{
              xs: 6,
              lg: 12,
            }}
          >
            <Grid item xs={12} md={6}>
              <Image
                alt=""
                style={{ width: "100%", height: "auto", display: "block" }}
                src={require("../../public/images/home5.png")}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography className="text" mb={1}>
                We love what our clients says about us
              </Typography>
              <Typography className="section-header-text" mb={8}>
                What Our Clients Say
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={3}>
                  <Image
                    alt=""
                    src={require("../../public/images/user.png")}
                    style={{ height: 120, width: 120 }}
                  />
                  <Typography variant="h6">Tomiwa Sosimi</Typography>
                  <Typography className="text">CEO of Agency</Typography>
                </Grid>
                <Grid item xs={12} md={8} lg={9}>
                  <Box className="flex">
                    <FormatQuote sx={{ fontSize: 48 }} />
                    <Typography>Great Work!</Typography>
                  </Box>
                  <Typography>
                    When we needed a website for Genzee Realty, Edoubleone
                    delivered exactly what we were looking for. They created a
                    sleek, professional platform that perfectly showcases our
                    multi-family investment opportunities and reflects our
                    brand’s values. The site is clean, easy to navigate, and
                    designed with investors in mind.Everything is intuitive and
                    user-friendly. Plus, it looks fantastic on both desktop and
                    mobile, which has made a huge difference in reaching our
                    audience. What impressed us most was their ability to truly
                    understand our business and translate that into a website
                    that works. Edoubleone didn’t just meet our expectations,
                    they exceeded them.
                  </Typography>
                </Grid>
              </Grid>

              <Button sx={{ color: "#fff", mt: 9 }}>VIEW ALL REVIEWS</Button>
            </Grid>
          </Grid>
        </Box>
      </section>
      <section className="section" id="process">
        <Box className="section-inner">
          <Typography mb={1} className="text">
            Our Process
          </Typography>
          <Typography variant="h4" className="section-header-text" mb={2}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Understand. ")

                  .pauseFor(500)
                  .typeString("Plan. ")
                  .pauseFor(500)
                  .typeString("Execute")
                  .pauseFor(2000)

                  .deleteAll()
                  .start();
              }}
              options={{
                loop: true,
              }}
            />
          </Typography>
          <Animator variant="grow" delay={500}>
            <Typography className="text">
              We put ourselves in your shoes, take out the time to listen and
              really understand your pain points, your needs and how we can help
              solve these. Then we strategize, taking into account everything
              we've understood before executing the best solution for your brand
              while incorporating feedback all through our process. The result
              is a solution that's truly built for you.
            </Typography>
          </Animator>
        </Box>
      </section>
      <Image
        alt=""
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "50vh",
          objectFit: "cover",
          display: "block",
        }}
        src={require("../../public/images/home2.png")}
      />
      <section className="section" id="works">
        <Box className="section-inner">
          <Box mb={20} mt={2} maxWidth={900} mx="auto">
            <Grid container spacing={6}>
              {stats.map((cur) => (
                <Grid key={cur.label} item xs={12} md={6} lg={3}>
                  <Box
                    mx="auto"
                    className="flex-column"
                    justifyContent={"center"}
                    height={180}
                    width={180}
                    borderRadius={"50%"}
                    border="1px solid #fff9"
                  >
                    <Typography variant="h5" fontSize={42}>
                      {cur.vale}
                    </Typography>
                    <Typography className="text" fontSize={12}>
                      {cur.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
          <Typography mb={1} className="text">
            We are pleased to present to you
          </Typography>
          <Box mb={4} className="flex" justifyContent={"space-between"}>
            <Typography variant="h4" className="section-header-text">
              Our Recent Projects
            </Typography>
            <Link href="/portfolio">
              <Button sx={{ color: "#fff" }}>VIEW ALL PROJECTS</Button>
            </Link>
          </Box>
          {data && (
            <Grid
              container
              spacing={{
                xs: 2,
                md: 4,
              }}
            >
              <Grid item xs={12} lg={6}>
                <img
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                  src={data[0]?.image!}
                />
              </Grid>
              <Grid item xs={12} lg={6}>
                <Box
                  mt={{
                    xs: 0,
                    lg: 20,
                  }}
                >
                  <img
                    alt=""
                    style={{ width: "100%", height: "auto" }}
                    src={data[2]?.image!}
                  />
                </Box>
              </Grid>
            </Grid>
          )}
        </Box>
      </section>
      {/*  */}
      <ContactForm />
      <Footer />
    </>
  );
}
