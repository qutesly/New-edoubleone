import { getAllPlans } from "@/redux/actions/plan";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Box, GlobalStyles, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import PricingComp from "./PricingComp";

const styles = (
  <GlobalStyles
    styles={{
      "#pricing": {
        background: "var(--secondary)",
      },
    }}
  />
);

const PricingSection = () => {
  const { allPlans } = useAppSelector((s) => s.plan);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllPlans());
  }, []);

  return (
    <section className="section" id="pricing">
      {styles}
      <Box className="section-inner">
        <Box className="flex-column">
          <Typography mb={1} className="text-primary">
            CLEAR AND SIMPLE PRICING
          </Typography>
          <Typography
            variant="h4"
            className="section-header-text"
            mb={2}
            align="center"
          >
            Simple pricing to level up your brand.
          </Typography>
          <Typography mb={12} className="text" align="center">
            Choose the plan that best suits your needs:
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {allPlans.map((cur) => (
            <Grid key={cur.id} item xs={12} md={4} lg={3}>
              <PricingComp {...cur} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default PricingSection;
