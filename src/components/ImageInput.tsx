import { FilePickerResult } from "@/types";
import { errorMessage, filePicker, showMessage } from "@/utils/utility";
import { Add } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { FC, useState } from "react";

interface Props {
  helperText?: string;
  value?: string;
  error?: string;
  onChange: (file: FilePickerResult | null) => void;
  type: "image" | "video";
  label?: string;
}

const ImageInput: FC<Props> = ({
  helperText,
  value,
  label,
  type,
  error,
  onChange,
}) => {
  const [pickerValue, setPickerValue] = useState<string | null>(null);

  const imageHandler = async () => {
    try {
      const res = await filePicker({
        fileType: type,
      });
      onChange(res);
      setPickerValue(res.uri);
    } catch (error) {
      showMessage({
        variant: "error",
        message: errorMessage(error),
      });
    }
  };

  const val = pickerValue || value;

  return (
    <div>
      <div className="container">
        {val ? (
          <Box>
            <Typography gutterBottom variant="body2" color="textSecondary">
              {label}
            </Typography>
            {type === "image" ? (
              <img
                src={val}
                style={{
                  display: "block",
                  margin: "20px 0",
                  height: 200,
                  width: "90%",
                  objectFit: "contain",
                }}
              />
            ) : (
              <video
                src={val}
                controls
                style={{
                  display: "block",
                  margin: "20px 0",
                  background: "#222",
                  height: 200,
                  width: "90%",
                  objectFit: "contain",
                }}
              />
            )}

            <Button
              color="primary"
              startIcon={<Add />}
              onClick={imageHandler}
              style={{ textTransform: "capitalize" }}
            >
              Change {type}
            </Button>
          </Box>
        ) : (
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            padding="40px 0"
          >
            <Typography>{label}</Typography>

            <Button
              color="primary"
              onClick={imageHandler}
              startIcon={<Add />}
              style={{ textTransform: "capitalize" }}
            >
              Add {type}
            </Button>
          </Box>
        )}
      </div>

      <Typography
        style={{ paddingLeft: 10 }}
        color="textSecondary"
        variant="body2"
      >
        {helperText}
      </Typography>

      <style jsx>{`
        .container {
          border-radius: 10px;
          margin-bottom: 5px;
          padding: 15px;
          border: 1px solid #ddd;
        }
      `}</style>
    </div>
  );
};

export default ImageInput;
