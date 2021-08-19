import React from "react";

// styled components
import {
  BannerContainer,
  BannerTitle,
  BannerParagraph,
} from "../../styles/bannerStyles";
import { Container, Flex, Italic } from "../../styles/globalStyles";

function Banner() {
  return (
    <BannerContainer data-scroll-section>
      <div>
        <BannerTitle>
          <span className="banner-title" data-scroll>
            <span
              className="title-float"
              data-scroll
              data-scroll-speed={0.5}
              data-scroll-delay={0.05}
              data-scroll-position="top"
            >
              K
            </span>
            <Italic>e</Italic>nt
          </span>
          <span className="banner-title" data-scroll>
            <span
              className="title-float"
              data-scroll
              data-scroll-speed={0.5}
              data-scroll-delay={0.05}
              data-scroll-position="top"
            >
              B
            </span>
            ry
            <Italic>a</Italic>n{" "}
            <span
              className="title-float"
              data-scroll
              data-scroll-speed={0.5}
              data-scroll-delay={0.05}
              data-scroll-position="top"
            >
              C
            </span>
            .
          </span>
          <span className="banner-title" data-scroll>
            <span
              className="title-float"
              data-scroll
              data-scroll-speed={0.5}
              data-scroll-position="top"
              data-scroll-delay={0.05}
            >
              M
            </span>
            agli
            <Italic>n</Italic>ao
          </span>
        </BannerTitle>
        <BannerParagraph data-scroll data-scroll-speed="-3">
          <span className="tab"></span>A{" "}
          <span className="highlight">front-end</span> developer and computer
          engineering student
        </BannerParagraph>
      </div>
    </BannerContainer>
  );
}

export default Banner;
