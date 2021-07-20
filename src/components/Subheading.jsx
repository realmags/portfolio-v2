import React from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

// components
import { SectionTitle, TitleText } from "../styles/sectionStyles";
import { Shadow } from "../styles/headlineStyles";
import Rule from "../components/Rule";

// todo: make font bigger in mobile
function Subheading(props) {
  const [titleRef, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-100px",
  });
  const animation = useAnimation();
  let titleProps = {};

  if ("alignRight" in props) titleProps = { alignRight: true };
  else if ("alignLeft" in props) titleProps = { alignLeft: true };

  const setProps = (isLong = true) => {
    if (isLong) return { long: true, inView: inView };
    return { short: true, inView: inView };
  };

  return (
    <SectionTitle ref={titleRef}>
      <span className="l-container l-left">
        <Shadow shadowSize="10%" left />
        <Rule {...setProps("alignRight" in props)} />
      </span>
      <TitleText {...titleProps}>{props.children}</TitleText>
      <span className="l-container l-right">
        <Shadow shadowSize="10%" right />
        <Rule {...setProps("alignLeft" in props)} />
      </span>
    </SectionTitle>
  );
}

export default Subheading;
