"use client";

import Menu from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Slide,
  SwipeableDrawer,
  Toolbar,
  useScrollTrigger,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cloneElement, useState } from "react";
import styles from "./Heade.module.css";

function HideOnScroll(props: any) {
  const { children } = props;

  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

interface Props {
  watchScroll?: boolean;
}

function Header({ watchScroll }: Props) {
  const route = usePathname();

  const routes = [
    {
      href: "/",
      label: "Home",
      active: route === "/",
    },
    {
      href: "/about",
      label: "About",
      active: route.includes("about"),
    },
    {
      href: "/services",
      label: "Services",
      active: route === "/services",
    },
    {
      href: "/portfolio",
      label: "Portfolio",
      active: route === "/portfolio",
    },
    {
      href: "/contact",
      label: "Contact Us",
      active: route === "/contact",
    },
    // {
    //   href: "/blog",
    //   label: "Blog",
    //   active: route === "/blog",
    // },
  ];

  function ElevationScroll(props: any) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 100,
    });
    return cloneElement(
      children,

      watchScroll
        ? {
            className: [styles.toolbar, trigger ? styles.scrolled : ""].join(
              " "
            ),
          }
        : {
            className: [
              styles.toolbar,
              trigger ? styles.scrolled : "",
              styles.noScroll,
            ].join(" "),
          }
    );
  }

  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <Box className={styles.root}>
      <Hidden lgUp>
        <SwipeableDrawer
          anchor={"top"}
          open={showDrawer}
          onClose={() => setShowDrawer(false)}
          onOpen={() => setShowDrawer(true)}
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "var(--background)",
            },
          }}
        >
          <Box py={2} px={2}>
            <img className={styles.logo} alt="" src="/images/logo.png" />
          </Box>

          <List
            onClick={() => setShowDrawer(false)}
            onKeyDown={() => setShowDrawer(false)}
          >
            {routes.map((cur) => (
              <Link href={cur.href!} key={cur.label}>
                <ListItem
                  sx={{
                    background: cur.active ? "#fff1" : "transparent",
                    color: cur.active ? "#fff" : "#fff6",
                  }}
                >
                  <ListItemButton>
                    <span>{cur.label}</span>
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
          </List>
          <Box p={1}>
            <Link href="/login">
              <Button
                variant="contained"
                size="large"
                fullWidth
                color="primary"
                onClick={() => setShowDrawer(false)}
                sx={{ borderRadius: 3 }}
              >
                Login
              </Button>
            </Link>
          </Box>
        </SwipeableDrawer>
      </Hidden>

      <HideOnScroll>
        <AppBar
          position="relative"
          color="transparent"
          elevation={0}
          className={styles.appBar}
        >
          <ElevationScroll>
            <Toolbar>
              <Box
                display={"flex"}
                className="section-inner"
                flex={1}
                p={{ xs: 1, md: 2 }}
                alignItems={"center"}
              >
                <Link href="/" className={styles.logo}>
                  <img className={styles.logo} alt="" src="/images/logo.png" />
                </Link>

                <Hidden lgDown>
                  <nav className={styles.nav}>
                    {routes.map((cur) => (
                      <Link
                        key={cur.label}
                        href={cur.href!}
                        className={[
                          styles.item,
                          cur.active ? styles.active : "",
                        ].join(" ")}
                      >
                        {cur.label}
                      </Link>
                    ))}
                  </nav>
                </Hidden>
                <Hidden lgDown>
                  <Link href="/login">
                    <Button
                      size="large"
                      variant="contained"
                      color="primary"
                      sx={{ borderRadius: 2, px: 4, py: 1.5 }}
                    >
                      Login
                    </Button>
                  </Link>
                </Hidden>
                <Hidden lgUp>
                  <IconButton onClick={() => setShowDrawer(true)}>
                    <Menu style={{ color: "#fff" }} fontSize="large" />
                  </IconButton>
                </Hidden>
              </Box>
            </Toolbar>
          </ElevationScroll>
        </AppBar>
      </HideOnScroll>
    </Box>
  );
}

export default Header;
