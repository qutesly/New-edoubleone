import { HourglassEmptyOutlined } from "@mui/icons-material";
import { GlobalStyles, Typography } from "@mui/material";
import Image from "next/image";

const styles = (
  <GlobalStyles
    styles={{
      ".empty-wrapper": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "50vh",
        flexDirection: "column",
      },
    }}
  />
);

function EmptyComp() {
  return (
    <div className="empty-wrapper">
      {styles}
      <Image
        style={{ height: 180, width: 180 }}
        src={require("../../public/images/empty.png")}
        alt=""
      />
      <Typography mt={1} variant="h6" fontWeight={200} className="text">
        No data to show
      </Typography>
    </div>
  );
}
export default EmptyComp;
