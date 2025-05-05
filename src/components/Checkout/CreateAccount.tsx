import { signup } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { darkTheme } from "@/theme";
import { showMessage } from "@/utils/utility";
import { ThemeProvider } from "@emotion/react";
import { ArrowBack } from "@mui/icons-material";
import { Box, ButtonBase, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import Button from "../ui/Button";

interface Props {
  setStep: (v: number) => void;
}

const defaultForm = {
  email: "",
  password: "",
  name: "",
};

const CreateAccount: FC<Props> = ({ setStep }) => {
  const [formData, setFormData] = useState(defaultForm);
  const { loading } = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const res = await dispatch(signup(formData));
    if (res.success) {
      showMessage({
        message: "Account created successfully ",
        variant: "success",
      });
    }
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <form
          onSubmit={submitHandler}
          style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}
          className="flex-column"
        >
          <Box mb={6} className="flex" width={"100%"}>
            <ButtonBase onClick={() => setStep(0)}>
              <ArrowBack sx={{ color: "var(--grey)" }} />{" "}
              <Typography className="text" ml={2}>
                Go Back
              </Typography>
            </ButtonBase>
            <Typography variant="h5" fontWeight={700} mx="auto" pr={10}>
              Sign Up
            </Typography>
          </Box>
          <Typography fontWeight={600} mb={1} mr="auto">
            Full Name
          </Typography>
          <TextField
            sx={{ mb: 3 }}
            placeholder="John Doe"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            fullWidth
          />
          <Typography fontWeight={600} mb={1} mr="auto">
            Email Address
          </Typography>
          <TextField
            sx={{ mb: 3 }}
            type="email"
            placeholder="example@edoubleone.net"
            required
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            fullWidth
          />
          <Typography fontWeight={600} mb={1} mr="auto">
            Password
          </Typography>
          <TextField
            sx={{ mb: 4 }}
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
            placeholder="xxxxxx"
            fullWidth
          />

          <Typography className="text" mb={6}>
            By signing up, you agree to our <Link href="/">Terms of use</Link>{" "}
            and <Link href="/">Privacy Policy</Link>
          </Typography>

          <Button type="submit" fullWidth loading={loading}>
            Sign Up
          </Button>
          <Typography mt={3} mb={4} className="text">
            Already have an account ? <Link href="/login">Login</Link> to create
            a new project
          </Typography>
        </form>
      </ThemeProvider>
    </>
  );
};
export default CreateAccount;
