"use client";

import { logout } from "@/redux/actions/auth";
import { toggleDrawer } from "@/redux/slices/authSlices";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import {
  CreditCard,
  HistoryOutlined,
  Language,
  Logout,
  Menu,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  GlobalStyles,
  Hidden,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export const drawerWidth = 260;

const styles = (
  <GlobalStyles
    styles={{
      "html ,body": {
        background: "#fff",
        color: "#000",
      },
      ".wrapper": {
        display: "flex",
      },
      ".drawer": {
        ["@media (min-width : 900px)"]: {
          width: drawerWidth,
          background: "#fff",
        },
      },
      ".drawerPaper": {
        width: drawerWidth,
        padding: "30px 0 10vh 20px",
      },
      ".item": {
        borderRadius: "20px 0 0 20px !important",
        color: "#777  !important",
        transition: "0.3s",
        "&:hover": {
          background: "#eee !important",
        },
        "&.Mui-selected": {
          background: "var(--primary) !important",
          color: "#fff !important",
          "&:hover": {
            background: "#fffa !important",
          },
        },
      },
      ".main": {
        flexGrow: 1,
        background: "#f5f7f7",
        minHeight: "100vh",
        maxWidth: "100%",
        ["@media (min-width : 1200px)"]: {
          width: `calc(100% - ${drawerWidth}px)`,
        },
      },
      ".header": {
        display: "flex",
        padding: "20px 5vw",
        alignItems: "center",
        background: "#fff",
        borderBottom: "1px solid #eee",
      },

      ".content": {
        padding: "5vh 5vw",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      },
    }}
  />
);

function AccountLayout({ children }: any) {
  const route = usePathname();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { loggedIn } = useAppSelector((s) => s.auth);
  const { openDrawer } = useAppSelector((s) => s.auth);

  useEffect(() => {
    if (!loggedIn) {
      router.replace("/login");
    }
  }, [loggedIn]);

  const routes = [
    // {
    //   icon: <Dashboard color="inherit" />,
    //   label: "Home",
    //   active: route === "/account",
    //   href: "/account",
    // },
    {
      icon: <Language color="inherit" />,
      label: "Projects",
      active: route === "/account/projects",
      href: "/account/projects",
    },

    {
      icon: <CreditCard color="inherit" />,
      label: "Payment Methods",
      active: route === "/account/billing",
      href: "/account/billing",
    },
    {
      icon: <HistoryOutlined color="inherit" />,
      label: "Billing History",
      active: route === "/account/history",
      href: "/account/history",
    },
  ];

  const signoutHandler = async () => {
    dispatch(logout());
    router.push("/login");
  };

  const drawer = (
    <Box flex={1} flexDirection={"column"} display={"flex"}>
      <Image
        style={{
          height: 25,
          width: 180,
          objectFit: "contain",
          display: "block",
          marginBottom: 80,
        }}
        src={require("../../../public/images/logo_dark.png")}
        alt=""
      />
      <List style={{ paddingRight: 10 }}>
        {routes.map((cur) => (
          <Link href={cur.href} key={cur.href}>
            <ListItemButton selected={cur.active} className={"item"}>
              <ListItemIcon style={{ color: "inherit" }}>
                {cur.icon}
              </ListItemIcon>
              <ListItemText primary={cur.label} />
            </ListItemButton>
          </Link>
        ))}
      </List>

      <Box mt="auto">
        <ListItemButton className={"item"} onClick={signoutHandler}>
          <ListItemIcon style={{ color: "inherit" }}>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </Box>
    </Box>
  );

  return (
    <div className="wrapper">
      {styles}
      <nav className="drawer">
        <Hidden mdUp>
          <Drawer
            variant="temporary"
            open={openDrawer}
            classes={{
              paper: "drawerPaper",
            }}
            onClose={() => dispatch(toggleDrawer())}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden mdDown>
          <Drawer
            classes={{
              paper: "drawerPaper",
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className="main">
        <div className="header">
          <Hidden mdUp implementation="css">
            <IconButton onClick={() => dispatch(toggleDrawer())}>
              <Menu />
            </IconButton>
          </Hidden>

          <Avatar sx={{ ml: "auto" }} />
        </div>
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
export default AccountLayout;
