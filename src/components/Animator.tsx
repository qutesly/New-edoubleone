import { Fade, Grow, Zoom, Slide, easing } from "@mui/material";
import React, { CSSProperties, FC, ReactNode, useRef, useState } from "react";

interface Props {
  children: any;
  timeout?: number;
  direction?: "right" | "left" | "up" | "down";
  variant?: "fade" | "grow" | "slide" | "zoom";
  delay?: number;
  style?: CSSProperties;
}

const Animator: FC<Props> = ({
  children,
  timeout = 1000,
  direction = "right",
  variant = "fade",
  style,
  delay,
}) => {
  const ref = useRef<Element>();
  const [inn, setIn] = useState(false);
  React.useEffect(() => {
    if (ref.current) {
      checkScrolled();
      window.addEventListener("scroll", checkScrolled);
    } else window.removeEventListener("scroll", checkScrolled);
    return () => window.removeEventListener("scroll", checkScrolled);
  }, [ref]);
  const props = {
    in: inn,
    style,
    timeout: {
      enter: timeout,
      exit: 1000,
    },
    // easing: "cubic-bezier(0, 2, .1, 1)",
    ref,
    children,
  };
  const checkScrolled = () => {
    const top = ref.current?.getBoundingClientRect().top || 0;
    const bottom = ref.current?.getBoundingClientRect().bottom || 0;
    if (top > 0 && top < window.innerHeight) {
      setTimeout(() => {
        setIn(true);
      }, delay || 0);
    }
    //  else if (top > window.innerHeight) setIn(false);
    // if (bottom < 0) setIn(false);
  };
  const types = {
    fade: <Fade {...props} />,
    zoom: <Zoom {...props} />,
    grow: <Grow {...props} />,
    slide: <Slide direction={direction} {...props} />,
  };
  return types[variant];
};

export default Animator;
