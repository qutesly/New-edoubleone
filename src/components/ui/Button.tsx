import { Button as MUIButton, CircularProgress } from "@mui/material";
import { FC } from "react";

// Extracting MUI Button props
type MUIButtonProps = React.ComponentProps<typeof MUIButton>;

interface Props extends MUIButtonProps {
  loading?: boolean;
}

const Button: FC<Props> = ({
  loading = false,
  disabled,
  children,
  variant = "contained",
  sx,
  ...muiProps
}) => {
  return (
    <MUIButton
      {...muiProps} // Spreading other MUI Button props
      variant={variant}
      disabled={disabled || loading}
      size="large"
      sx={{
        py: 1.5,
        px: 4,
        borderRadius: 4,
        ...sx,
      }}
    >
      {loading ? (
        <CircularProgress size={24} sx={{ color: "#fff" }} />
      ) : (
        children
      )}
    </MUIButton>
  );
};

export default Button;
