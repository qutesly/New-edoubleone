import { Project } from "@/types/data-types";
import { Language } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

interface Props extends Project {}

const ProjectItem: FC<Props> = ({ description, domain, id, name }) => {
  return (
    <Box
      className="flex"
      bgcolor={"#fff"}
      p={{ xs: 2, md: 3 }}
      borderRadius={3}
      mb={2}
    >
      <Box
        className="flex"
        bgcolor={"#ddd"}
        justifyContent={"center"}
        height={50}
        width={50}
        borderRadius={2}
        mr={2}
      >
        <Language color="primary" />
      </Box>

      <Box flex={1}>
        <Typography mb={0.5}>{name}</Typography>
        <Typography variant="body2" color="#05a">
          Currently running
        </Typography>
      </Box>
      <Button
        sx={{
          borderRadius: 4,
        }}
        variant="outlined"
      >
        View Details
      </Button>
    </Box>
  );
};
export default ProjectItem;
