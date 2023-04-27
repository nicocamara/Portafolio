import classNames from "classnames";
import { useState } from "react";
import { getAssetUrl } from "../../utils";
import "./style.scss";

type LogoProps = {
  path: string;
  alt: string;
  className?: string;
  link?: string;
};

const Logo = (props: LogoProps) => {
  const [isHovered, setHover] = useState(false);

  const onClickHandler = () => {
    if (props.link) {
      window.open(props.link);
    }
  };
  const mouseEnterHandler = () => {
    setHover(true);
  };
  const mouseLeaveHandler = () => {
    setHover(false);
  };

  const path = getAssetUrl(`${props.path + (isHovered ? "-hover" : "")}.svg`);
  const className = classNames(
    "img",
    { img__link: props.link },
    props.className
  );
  return (
    <img
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      src={path}
      alt={props.alt}
      className={className}
      onClick={onClickHandler}
    />
  );
};

export default Logo;
