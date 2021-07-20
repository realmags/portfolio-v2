import React, { useEffect } from "react";
import { useAnimation } from "framer-motion";

import { Line } from "../styles/sectionStyles";

function Rule(props) {
  const animation = useAnimation();
  const { inView } = props;
  const [initial, visible] =
    "short" in props
      ? ["shortInitial", "shortVisible"]
      : ["longInitial", "longVisible"];

  const variants = {
    shortInitial: {
      width: "30%",
    },
    longInitial: {
      width: "100%",
    },
    shortVisible: {
      width: "15%",
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    longVisible: {
      width: "45%",
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
  };

  //   if ("short" in props) initial = "short";
  //   else initial = "long";

  useEffect(() => {
    if (inView) {
      console.log(initial, inView);
      animation.start(visible);
    } else {
      animation.start(initial);
    }
  }, [animation, inView]);

  return (
    <>
      <Line
        // ref={lineRef}
        animate={animation}
        initial={initial}
        variants={variants}
      />
    </>
  );
}

export default Rule;
