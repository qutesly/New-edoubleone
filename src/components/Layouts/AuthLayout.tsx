import { Box, GlobalStyles, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { FC, ReactNode } from "react";

const styles = (
  <GlobalStyles
    styles={{
      "html ,body": {
        background: "#fff",
        color: "#000",
      },
      ".auth-container": {
        minHeight: "100vh",
        padding: 20,
        background: "center / cover url(/images/auth_bg.png)",
        "& .logo": {
          display: "block",
          objectFit: "contain",
          marginTop: 10,
          marginBottom: "15vh",
          height: 30,
        },
        "& .auth-con": {
          width: "100%",
          margin: "auto",
          maxWidth: 500,
        },
      },
    }}
  />
);

interface Props {
  children: ReactNode;
}
const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Box className="auth-container">
      <Box className="section-inner">
        <Link href="/">
          <Image
            className="logo"
            src={require("../../../public/images/logo_dark.png")}
            alt=""
          />
        </Link>
      </Box>
      {styles}
      <Box className="auth-con">{children}</Box>
    </Box>
  );
};
export default AuthLayout;
