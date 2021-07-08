import React from "react";

// styled components
import {
  BannerContainer,
  BannerTitle,
  BannerParagraph,
} from "../../styles/bannerStyles";
import { Container, Flex } from "../../styles/globalStyles";

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
            <em>e</em>nt
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
            <em>a</em>n{" "}
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
            <em>n</em>ao
          </span>
        </BannerTitle>
        <BannerParagraph data-scroll data-scroll-speed="-3">
          <span className="tab"></span>A{" "}
          <span className="highlight">front-end</span> developer and computer
          engineering student
        </BannerParagraph>
      </div>

      {/* <Flex direction="column-reverse" data-scroll-section> */}
      {/* <BannerTitle data-scroll>
        K<em>e</em>nt <br /> Bry<em>a</em>n C.
        <br /> Magli<em>n</em>ao
      </BannerTitle>
      <BannerParagraph data-scroll data-scroll-speed="-1">
        <span className="tab"></span>A{" "}
        <span className="highlight">front-end</span> developer and computer
        engineering student
      </BannerParagraph> */}
      {/* </Flex> */}
    </BannerContainer>
  );
}

export default Banner;
