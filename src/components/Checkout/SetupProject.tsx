import { createProject } from "@/redux/actions/plan";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { darkTheme } from "@/theme";
import { CreateProjectForm } from "@/types";
import { ThemeProvider } from "@emotion/react";
import { Box, Checkbox, TextField, Typography } from "@mui/material";
import Link from "next/link";
import { FC, useState } from "react";
import Button from "../ui/Button";
import PaymentMethodInput from "./PaymentMethodInput";
import { useRouter } from "next/navigation";
import { showMessage } from "@/utils/utility";

interface Props {
  setStep: (v: number) => void;
  plan_id: number;
  stripe_price_id?: string;
}

const defaultForm = {
  description: "",
  name: "",
};

const SetupProject: FC<Props> = ({ plan_id, setStep, stripe_price_id }) => {
  const [formData, setFormData] = useState(defaultForm);
  const [method, setMethod] = useState("new");
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const { loading } = useAppSelector((s) => s.plan);
  const auth = useAppSelector((s) => s.auth);
  const dispatch = useAppDispatch();

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const d: CreateProjectForm = {
      ...formData,
      plan_id,
      stripe_price_id: stripe_price_id!,
    };
    if (method !== "new") d.payment_method = method;

    const res = await dispatch(createProject(d));
    if (res.success) {
      if (method === "new") window.location.assign(res.data.url);
      else {
        showMessage({
          message: "Your project has been created successfully",
          variant: "success",
        });
        router.push("/account/projects");
      }
    }
  };
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <form
          style={{ width: "100%", maxWidth: 600, margin: "0 auto" }}
          className="flex-column"
          onSubmit={submitHandler}
        >
          <Box mb={6} className="flex-cilumn" width={"100%"}>
            <Typography variant="h5" fontWeight={700} align="center" mb={1}>
              Project Setup
            </Typography>
            <Typography align="center" className="text">
              Tell us a little about the project you like to build. Our team
              will contact you for further discussions
            </Typography>
          </Box>
          <Typography fontWeight={600} mb={1} mr="auto">
            Project Title
          </Typography>
          <TextField
            sx={{ mb: 3 }}
            placeholder="John Doe"
            fullWidth
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Typography fontWeight={600} mb={1} mr="auto">
            Description
          </Typography>
          <TextField
            sx={{ mb: 4 }}
            multiline
            minRows={6}
            placeholder="Type here...."
            fullWidth
            required
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />

          <PaymentMethodInput value={method} onChange={setMethod} />

          <Box className="flex" width={"100%"} mb={6} mt={4}>
            <Checkbox
              color="primary"
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
            />
            <Typography className="text">
              I agree to the <Link href="/">terms of our contact</Link> that
              binds this project
            </Typography>
          </Box>
          <Button type="submit" fullWidth disabled={!checked} loading={loading}>
            Pay and Create Project
          </Button>
        </form>
      </ThemeProvider>
    </>
  );
};
export default SetupProject;
