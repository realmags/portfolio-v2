import React from "react";

// styled components
import { BannerTitle, BannerParagraph } from "../../styles/bannerStyles";
import { Container, Flex } from "../../styles/globalStyles";

function Banner() {
  return (
    <Container>
      <Flex direction="column-reverse" data-scroll-section>
        <BannerTitle data-scroll>
          K<em>e</em>nt <br /> Bry<em>a</em>n C.
          <br /> Magli<em>n</em>ao
          {/* <span data-scroll>
            <em className="name-initials" data-scroll>
              K
            </em>
            <em>e</em>
            nt
          </span>
          <span data-scroll>
            <em className="name-initials" data-scroll>
              B
            </em>
            ry<em>a</em>n{" "}
            <em className="name-initials" data-scroll>
              C
            </em>
            .
          </span>
          <span data-scroll>
            <em className="name-initials" data-scroll>
              M
            </em>
            agli<em>n</em>ao
          </span> */}
        </BannerTitle>
        <BannerParagraph data-scroll data-scroll-speed="-1">
          <span className="tab"></span>A{" "}
          <span className="highlight">front-end</span> developer and computer
          engineering student
        </BannerParagraph>
      </Flex>
    </Container>
  );
}

export default Banner;
