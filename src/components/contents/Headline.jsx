import React from "react";
import { motion } from "framer-motion";

// components
import { Container, Tab, Highlight } from "../../styles/globalStyles";
import {
  BannerContainer,
  BannerTitle,
  BannerTitleAnim,
  BannerSubtitle,
  Shadow,
} from "../../styles/headlineStyles";

function Headline() {
  const animate = {
    x: ["-100%", "0%"],
  };
  const transitionConfig = {
    repeat: Infinity,
    ease: "linear",
  };

  return (
    <Container data-scroll-section id="#main">
      <BannerContainer>
        <BannerTitle>
          <span className="b-title">
            K<em>e</em>nt
            <Shadow left shadowSize="15%" />
            <Shadow right shadowSize="30%" />
          </span>
          <span className="b-title">
            Bry
            <em>a</em>n C.
            <Shadow left />
            <Shadow right shadowSize="15%" />
          </span>
          <span className="b-title">
            Magli
            <em>n</em>ao
            <Shadow left shadowSize="20%" />
            <Shadow right />
          </span>
        </BannerTitle>
        <BannerTitle as="div" sendBackward>
          <BannerTitleAnim>
            <motion.span
              className="b-line"
              animate={animate}
              transition={{ ...transitionConfig, duration: 20 }}
            >
              <span className="b-title__inner">
                K<em>e</em>nt{" "}
              </span>
              <span className="b-title__inner">
                K<em>e</em>nt{" "}
              </span>
            </motion.span>
            <motion.span
              className="b-line"
              animate={animate}
              transition={{ ...transitionConfig, duration: 20 }}
            >
              <span className="b-title__inner">
                K<em>e</em>nt{" "}
              </span>
              <span className="b-title__inner">
                K<em>e</em>nt{" "}
              </span>
            </motion.span>
          </BannerTitleAnim>
          <BannerTitleAnim>
            <motion.span
              className="b-line"
              animate={animate}
              transition={{ ...transitionConfig, duration: 25 }}
            >
              <span className="b-title__inner">
                Bry
                <em>a</em>n C.{" "}
              </span>
              <span className="b-title__inner">
                Bry
                <em>a</em>n C.{" "}
              </span>
            </motion.span>
            <motion.span
              className="b-line"
              animate={animate}
              transition={{ ...transitionConfig, duration: 25 }}
            >
              <span className="b-title__inner">
                Bry
                <em>a</em>n C.{" "}
              </span>
              <span className="b-title__inner">
                Bry
                <em>a</em>n C.{" "}
              </span>
            </motion.span>
          </BannerTitleAnim>
          <BannerTitleAnim>
            <motion.span
              className="b-line"
              animate={animate}
              transition={{ ...transitionConfig, duration: 30 }}
            >
              <span className="b-title__inner">
                Magli
                <em>n</em>ao{" "}
              </span>
              <span className="b-title__inner">
                Magli
                <em>n</em>ao{" "}
              </span>
            </motion.span>
            <motion.span
              className="b-line"
              animate={animate}
              transition={{ ...transitionConfig, duration: 30 }}
            >
              <span className="b-title__inner">
                Magli
                <em>n</em>ao{" "}
              </span>
              <span className="b-title__inner">
                Magli
                <em>n</em>ao{" "}
              </span>
            </motion.span>
          </BannerTitleAnim>
        </BannerTitle>
        <BannerSubtitle data-scroll data-scroll-speed="-2">
          <Tab />A <Highlight>front-end</Highlight> developer and computer
          engineering student
        </BannerSubtitle>
      </BannerContainer>
    </Container>
  );
}

export default Headline;
