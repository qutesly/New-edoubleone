import { Plan } from "@/types/data-types";
import { Box, Button, Divider, GlobalStyles, Typography } from "@mui/material";
import { FC } from "react";
import Star from "@/components/icons/star.svg";
import Link from "next/link";

interface Props extends Plan {}

const styles = (
  <GlobalStyles
    styles={{
      ".plan": {
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: 0,
          background: "#222",
          transition: "0.3s ease-out",
        },
        "&:hover::before": {
          height: "100%",
        },
      },
    }}
  />
);

const PricingComp: FC<Props> = ({
  description,
  features,
  id,
  is_active,
  name,
  price,
}) => {
  const color = [
    {
      bg: "var(--primary)",
      fg: "#fff",
    },
    {
      fg: "var(--primary)",
      bg: "#fff",
    },
    {
      fg: "var(--primary)",
      bg: "#fff",
    },

    {
      bg: "#fa0",
      fg: "#fff",
    },
  ];
  return (
    <Box
      border="1px solid #fff1"
      borderRadius={6}
      px={{ xs: 2, md: 4 }}
      height={"100%"}
      py={4}
      className="plan"
    >
      {styles}
      <Box
        flexDirection={"column"}
        display={"flex"}
        height={"100%"}
        zIndex={100}
        position={"relative"}
      >
        <Box mb={3} className="flex">
          <Typography variant="h5" fontWeight={700}>
            {name}
          </Typography>
          <Box
            ml={3}
            className="flex"
            bgcolor={color[id - 1].bg}
            px={2}
            py={1}
            borderRadius={2}
          >
            <Typography
              fontWeight={600}
              color={color[id - 1].fg}
              variant="body2"
            >
              Tier {id}
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
          {description}
        </Typography>

        <Typography variant="h3" color="primary" fontWeight={600}>
          ${price}/m
        </Typography>
        <Typography
          variant="body2"
          className="text"
          pb={3}
          mb={3}
          borderBottom="1px solid #fff4"
        >
          Paid per month
        </Typography>

        {features?.map((cur) => (
          <Box key={cur} className="flex" mb={2.5}>
            <Star />
            <Typography ml={2} variant="body2" fontWeight={200}>
              {cur}
            </Typography>
          </Box>
        ))}

        <Box mt="auto" pt={7}>
          <Link href={`/checkout?id=${id}`}>
            <Button fullWidth variant="contained" sx={{ py: 1.5, mb: 2 }}>
              Click To Purchase
            </Button>
          </Link>
          <Button fullWidth variant="outlined" sx={{ color: "#fff", py: 1.5 }}>
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export default PricingComp;
