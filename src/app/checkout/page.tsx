"use client";

import CreateAccount from "@/components/Checkout/CreateAccount";
import SetupProject from "@/components/Checkout/SetupProject";
import VerifyOrder from "@/components/Checkout/VerifyOrder";
import { useAppSelector } from "@/redux/store";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useMemo, useState } from "react";

const CheckoutPAge = ({ searchParams }: any) => {
  const [activeStep, setActiveStep] = useState(0);
  const [pricing, setPricing] = useState<string>();
  const { loggedIn } = useAppSelector((s) => s.auth);

  const steps = useMemo(() => {
    let p = [
      {
        label: "Verify Order",
        comp: (
          <VerifyOrder
            onPricingChange={setPricing}
            setStep={setActiveStep}
            plan_id={searchParams.id}
          />
        ),
      },
      {
        label: "Create Account",
        comp: <CreateAccount setStep={setActiveStep} />,
      },
      {
        label: "Setup Project",
        comp: (
          <SetupProject
            stripe_price_id={pricing}
            plan_id={searchParams.id}
            setStep={setActiveStep}
          />
        ),
      },
    ];

    if (loggedIn) p.splice(1, 1);
    return p;
  }, [searchParams, activeStep, loggedIn]);

  return (
    <>
      <section className="section" style={{ paddingTop: 30 }}>
        <Box className="section-inner">
          <Box className="flex-column">
            {activeStep < steps.length - 1 && (
              <>
                <Typography color="primary">
                  1 month money-back guarantee
                </Typography>
                <Typography align="center" variant="h4" mt={1} fontWeight={200}>
                  You are almost there!
                </Typography>
              </>
            )}
            <Box width={"100%"} maxWidth={1000} mt={6}>
              <Stepper activeStep={activeStep}>
                {steps.map((label, index) => {
                  return (
                    <Step key={label.label}>
                      <StepLabel
                        sx={{
                          "& .MuiStepLabel-label.Mui-active": {
                            color: "#fff",
                          },
                          "& .MuiStepLabel-label.Mui-completed": {
                            color: "var(--primary)",
                          },
                          "& .MuiStepLabel-label": {
                            color: "var(--grey)",
                          },
                        }}
                      >
                        {label.label}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <Box mt={5} width={"100%"}>
                {steps[activeStep].comp}
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </>
  );
};

export default CheckoutPAge;
