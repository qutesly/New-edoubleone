import { Box, GlobalStyles } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const styles = (
  <GlobalStyles
    styles={{
      "body,html": {
        background: "var(--secondary)",
      },
      ".logo": {
        display: "block",
        objectFit: "contain",
        height: 30,
      },
    }}
  />
);

const CheckoutLayout: FC<Props> = ({ children }) => {
  return (
    <>
      {styles}
      <Box className="section-inner" py={3}>
        <Link href="/">
          <Image
            className="logo"
            src={require("../../../public/images/logo.png")}
            alt=""
          />
        </Link>
      </Box>
      {children}
    </>
  );
};
export default CheckoutLayout;
