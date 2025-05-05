import { showMessage } from "@/utils/utility";
import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  Grid,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
  action: () => Promise<void>;
}

const DeleteModal: FC<Props> = ({ onClose, action, open }) => {
  const [loading, setLoading] = useState(false);
  const actionHandler = async () => {
    setLoading(true);
    await action();
    onClose();

    setLoading(false);
  };
  return (
    <Dialog open={Boolean(open)} onClose={onClose}>
      <Box className="flex-column" py={2} px={4}>
        <Box className="icon-bg" height={90} width={90} mb={3} mt={2}>
          <DeleteOutline sx={{ fontSize: 48 }} color="primary" />
        </Box>
        <Typography variant="h5" fontWeight={600} mb={1}>
          Confirm Deletion
        </Typography>
        <Typography mb={6} className="text">
          Are you sure you want to delete this item?
        </Typography>
        <Grid spacing={2} container>
          <Grid item xs={6}>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              sx={{ py: 2 }}
              onClick={onClose}
            >
              Cancel
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              onClick={actionHandler}
              sx={{ mb: 2, py: 2 }}
            >
              {loading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Confirm"
              )}
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Dialog>
  );
};

export default DeleteModal;
