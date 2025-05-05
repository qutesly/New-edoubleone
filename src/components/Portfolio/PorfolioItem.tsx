import { Portfolio } from "@/types/data-types";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { FC } from "react";

interface Props extends Portfolio {}

const PortfolioItem: FC<Props> = ({
  description,
  id,
  image,
  name,
  status,
  tags,
  url,
}) => {
  return (
    <Box
      sx={{
        background: "var(--background)",
        borderRadius: 5,
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          height: {
            xs: 300,
            lg: 350,
          },

          widows: "100%",
          background: "#fff2",
        }}
      >
        {image && (
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
            alt=""
            src={image}
          />
        )}
      </Box>
      <Box
        sx={{
          padding: {
            xs: 2,
            md: 3,
          },
        }}
      >
        <Typography>{name}</Typography>
        <Typography variant="body2" fontWeight={500} color="primary">
          {tags}
        </Typography>
        <Typography variant="body2" className="text" mb={4}>
          {description}
        </Typography>
        <Button href={url} target="_blank" variant="contained">
          Tour This Site
        </Button>
      </Box>
    </Box>
  );
};
export default PortfolioItem;
