import { useAppDispatch } from "@/redux/store";
import UtilityServices from "@/services/UtilityServices";
import { showMessage } from "@/utils/utility";
import { Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { Box, GlobalStyles, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import Button from "../ui/Button";
import { variables } from "@/utils/constants";

const styles = (
  <GlobalStyles
    styles={{
      "#contact": {
        background: "left / cover url(/images/contact_bg.png)",
      },
      "#cta": {},
    }}
  />
);

const defaultFault = {
  name: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const [form, setForm] = useState(defaultFault);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e: any) => {
    setLoading(true);
    e.preventDefault();
    const res = await UtilityServices.sendContactMessage(form);
    if (res.success) {
      showMessage({
        message: "Thank you for contacting us. We will get back to you soon.",
        variant: "success",
      });
      setForm(defaultFault);
    }
    setLoading(false);
  };

  return (
    <>
      {styles}
      <section className="section" id="contact">
        <Box className="flex-column">
          <Typography variant="h4" className="section-header-text" mb={2}>
            Let’s Work Together
          </Typography>
          <Typography mb={3} maxWidth={700} align="center">
            Have an idea you want to bring to life or a brand you want to
            elevate? Reach out to us today, and let's get started!
          </Typography>
          <Box mb={8}>
            <a href={variables.twitter} target="_blank">
              <Twitter sx={{ fontSize: 48, color: "#fff" }} />
            </a>
            <a href={variables.instagram} target="_blank">
              <Instagram sx={{ mx: 2, fontSize: 48, color: "#fff" }} />
            </a>
            <a href={variables.linkedIn} target="_blank">
              <LinkedIn sx={{ fontSize: 48, color: "#fff" }} />
            </a>
          </Box>

          <form
            className="flex-column"
            onSubmit={submitHandler}
            style={{ maxWidth: 700, width: "100%" }}
          >
            <TextField
              label="Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              fullWidth
              color="info"
              sx={{
                mb: 3,
                background: "#222327",
                ".MuiInputBase-input": {
                  color: "#fff",
                },
                ".MuiInputLabel-root": {
                  color: "#fff9",
                },
              }}
            />
            <TextField
              label="Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              fullWidth
              color="info"
              sx={{
                mb: 3,
                background: "#222327",
                ".MuiInputBase-input": {
                  color: "#fff",
                },
                ".MuiInputLabel-root": {
                  color: "#fff9",
                },
              }}
            />
            <TextField
              label="Type your message here"
              fullWidth
              color="info"
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              minRows={6}
              multiline
              sx={{
                mb: 6,
                background: "#222327",
                ".MuiInputBase-input": {
                  color: "#fff",
                },
                ".MuiInputLabel-root": {
                  color: "#fff9",
                },
              }}
            />

            <Button
              variant="contained"
              loading={loading}
              sx={{ py: 2, px: 6, mb: 20 }}
              type="submit"
            >
              LET'S CONNECT
            </Button>
          </form>
        </Box>
      </section>

      <Box
        className="section-inner "
        position={"relative"}
        zIndex={100}
        px={2}
        mt={"-8%"}
      >
        <Box
          className=" flex-column "
          bgcolor={"var(--secondary)"}
          py={10}
          borderRadius={5}
          px={2}
        >
          <Typography
            className="section-header-text"
            maxWidth={700}
            mb={2}
            align="center"
          >
            Become part of the design revolution
          </Typography>
          <Typography align="center" mb={4} fontWeight={200}>
            Jump on a membership and start requesting designs right away!
          </Typography>

          <Link href={"/pricing"}>
            <Button
              variant="contained"
              size="large"
              sx={{ py: 2, px: 8, borderRadius: 5 }}
            >
              See Prices
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
