import { FilePresentOutlined } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";

interface Props {
  label: string;
  url: string;
}

const FilePreview: FC<Props> = ({ label, url }) => {
  return (
    <Box className="flex-column" bgcolor={"#fff"} p={2} borderRadius={4}>
      <FilePresentOutlined
        sx={{ mt: 4 }}
        style={{ fontSize: 36 }}
        color="primary"
      />
      <Typography color="primary" variant="h6" mb={4}>
        {label}
      </Typography>
      <Button
        fullWidth
        size="large"
        href={url}
        target="_blank"
        variant="contained"
      >
        View File
      </Button>
    </Box>
  );
};

export default FilePreview;
