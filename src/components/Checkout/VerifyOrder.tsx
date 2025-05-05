import Star from "@/components/icons/star.svg";
import { useAppSelector } from "@/redux/store";
import { darkTheme } from "@/theme";
import { planColors } from "@/utils/constants";
import { currencyFormatter } from "@/utils/utility";
import {
  Box,
  Grid,
  MenuItem,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FC, useEffect, useState } from "react";
import Button from "../ui/Button";

interface Props {
  plan_id: number;
  onPricingChange: (v?: string) => void;
  setStep: (v: number) => void;
}

const VerifyOrder: FC<Props> = ({ plan_id, setStep, onPricingChange }) => {
  const { allPlans } = useAppSelector((s) => s.plan);
  const data = allPlans.find((cur) => cur.id === +plan_id);
  const [pricing, setPricing] = useState(data?.pricing[0].stripe_price_id);
  const { loggedIn } = useAppSelector((s) => s.auth);

  if (!data) return <>Loading..</>;

  useEffect(() => {
    onPricingChange(pricing);
  }, [pricing]);

  const onContinue = () => {
    setStep(1);
  };

  return (
    <>
      <Typography variant="h6" mb={6} align="center">
        Verify your order
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              background: "var(--background)",
              px: { xs: 2, md: 4 },
              py: 4,
              borderRadius: 6,
            }}
          >
            <Typography mb={2} className="text">
              Selected Plan
            </Typography>
            <Box mb={3} className="flex">
              <Typography variant="h5" fontWeight={700}>
                {data?.name}
              </Typography>
              <Box
                ml={3}
                className="flex"
                bgcolor={planColors[+plan_id - 1].bg}
                px={2}
                py={1}
                borderRadius={2}
              >
                <Typography
                  fontWeight={600}
                  color={planColors[+plan_id - 1].fg}
                  variant="body2"
                >
                  Tier {plan_id}
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="body2"
              className="text"
              pb={3}
              mb={3}
              borderBottom="1px solid #fff4"
            >
              {data.description}
            </Typography>

            {data.features.map((cur) => (
              <Box key={cur} className="flex" mb={2.5}>
                <Star />
                <Typography ml={2} variant="body2" fontWeight={200}>
                  {cur}
                </Typography>
              </Box>
            ))}

            <Link href="/pricing">
              <Button
                fullWidth
                variant="outlined"
                sx={{ color: "#fff", py: 1.5, mt: 4 }}
              >
                See Other Plans
              </Button>
            </Link>
          </Box>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography mb={2}>Billing Cycle</Typography>
          <ThemeProvider theme={darkTheme}>
            <TextField
              value={pricing}
              onChange={(e) => setPricing(e.target.value)}
              fullWidth
              select
              placeholder="Select Billing Cycle"
            >
              {data.pricing.map((cur) => (
                <MenuItem
                  className="flex"
                  value={cur.stripe_price_id}
                  key={cur.billing_period}
                >
                  <Typography textTransform={"uppercase"}>
                    {cur.billing_period.split("_").join(" ")}
                    <span className="text" style={{ marginLeft: 10 }}>
                      {currencyFormatter(cur.price, { symbol: "$" })}
                    </span>
                  </Typography>
                </MenuItem>
              ))}
            </TextField>
          </ThemeProvider>

          <Box mt={4} className="flex" mb={4}>
            <Typography className="text" flex={1}>
              Total
            </Typography>

            <Typography variant="h4" fontWeight={600}>
              {currencyFormatter(
                data.pricing.find((item) => item.stripe_price_id === pricing)
                  ?.price,
                { symbol: "$" }
              )}
            </Typography>
          </Box>

          <Button onClick={onContinue} fullWidth disabled>
            Continue
          </Button>
        </Grid>
      </Grid>
    </>
  );
};
export default VerifyOrder;
