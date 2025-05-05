"use client";

import CustomButton from "@/components/ui/Button";
import { login } from "@/redux/actions/auth";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { CheckBox } from "@mui/icons-material";
import { Box, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const defaultForm = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { loading, loggedIn } = useAppSelector((s) => s.auth);
  const [formData, setFormData] = useState(defaultForm);

  useEffect(() => {
    if (loggedIn) router.push("/account/projects");
  }, [loggedIn]);

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const res = await dispatch(login(formData));
    if (res.success) router.push("/account/projects");
  };

  return (
    <form
      style={{ width: "100%" }}
      className="flex-column"
      onSubmit={submitHandler}
    >
      <Typography variant="h4" fontWeight={700} mb={6}>
        {" "}
        Log In
      </Typography>
      <Typography fontWeight={600} mb={1} mr="auto">
        Email Address
      </Typography>
      <TextField
        sx={{ mb: 3 }}
        type="email"
        placeholder="Enter email address"
        value={formData.email}
        required
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        fullWidth
      />
      <Typography fontWeight={600} mb={1} mr="auto">
        Password
      </Typography>
      <TextField
        sx={{ mb: 3 }}
        type="password"
        required
        placeholder="Enter email address"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        fullWidth
      />
      <Box className="flex" mb={3} width={"100%"}>
        <Box className="flex" flex={1}>
          <CheckBox color="primary" />
          <Typography ml={1}>Remember Me</Typography>
        </Box>
        <Link href="/">Forgot Password</Link>
      </Box>
      <CustomButton loading={loading} fullWidth type="submit">
        Sign In
      </CustomButton>
      <Typography mt={3} mb={4}>
        Not a member yet? <Link href="pricing">Choose a plan and</Link> to get
        started now!
      </Typography>
    </form>
  );
};

export default LoginPage;
