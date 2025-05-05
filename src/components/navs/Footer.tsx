import { variables } from "@/utils/constants";
import {
  Call,
  Instagram,
  LinkedIn,
  LocationCity,
  Mail,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { Box, GlobalStyles, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const styles = (
  <GlobalStyles
    styles={{
      ".footer": {
        background:
          "left / contain linear-gradient(#17223edd , #17223edd),  url(/images/footer.png) ",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left bottom",
        padding: "200px 15px 0",

        ".footLink": {
          display: "block",
          fontWeight: 200,
          marginBottom: 20,
        },

        "a:hover": {
          color: "var(--primary)",
        },
      },
    }}
  />
);

function Footer() {
  return (
    <>
      {styles}
      <footer className="footer">
        <div className="section-inner">
          <Grid
            container
            justifyContent={"space-between"}
            spacing={{
              lg: 10,
              xs: 5,
            }}
          >
            <Grid item xs={12} md={3} display={"flex"}>
              <Box mx="auto">
                <Image
                  height={40}
                  src={require("../../../public/images/logo.png")}
                  alt=""
                />
                <Typography mt={2} lineHeight={2}>
                  Edoublone - the leading digital agency based in the Us,
                  working with top-tier clients, from start-ups to enterprises.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={4} display="flex">
              <Box mx="auto" mt={2}>
                <Box display={"flex"} mb={3}>
                  <Mail />
                  <Typography fontWeight={200} ml={2}>
                    {variables.email}
                  </Typography>
                </Box>
                <Box display={"flex"} mb={3}>
                  <Call />
                  <Typography fontWeight={200} ml={2}>
                    {variables.phone}
                  </Typography>
                </Box>
                <Box display={"flex"} mb={3}>
                  <WhatsApp />
                  <Typography fontWeight={200} ml={2}>
                    {variables.whatsapp}
                  </Typography>
                </Box>
                <Box display={"flex"}>
                  <LocationCity />
                  <Typography fontWeight={200} ml={2}>
                    {variables.address}
                  </Typography>
                </Box>
                <Box mt={4}>
                  <LinkedIn />
                  <Twitter sx={{ mx: 4 }} />
                  <Instagram />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box
            className="flex"
            flexWrap={"wrap"}
            borderTop={"1px solid #fff3"}
            mt={6}
            pt={4}
            pb={12}
          >
            <Box mr="auto" py={2}>
              <Link style={{ color: "#fff", marginRight: 30 }} href={"#"}>
                Process
              </Link>
              <Link style={{ color: "#fff", marginRight: 30 }} href={"#"}>
                Services
              </Link>
              <Link style={{ color: "#fff", marginRight: 30 }} href={"#"}>
                Portfolio
              </Link>
              <Link style={{ color: "#fff", marginRight: 30 }} href={"#"}>
                FAQ
              </Link>
            </Box>
            <Typography>© 2023 Edoubleone - All Right Reserved</Typography>
          </Box>
        </div>
      </footer>
    </>
  );
}
export default Footer;
