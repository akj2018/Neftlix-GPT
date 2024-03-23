import { useEffect } from "react";
import { useMemo } from "react";
import { useRef } from "react";
import { useState } from "react";

const GlowButton = ({ btnText, onClick }) => {
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [offsetHeight, setOffsetHeight] = useState(0);

  const [translateX, setTranslateX] = useState("-40%");
  const [translateY, setTranslateY] = useState("-30%");

  const buttonRef = useRef(null);

  // This function calculate button's position
  const getPosition = () => {
    if (buttonRef.current) {
      setOffsetWidth(buttonRef.current.offsetWidth);
      setOffsetHeight(buttonRef.current.offsetHeight);
    }
  };

  const onMove = (e) => {
    if (buttonRef.current) {
      const { pageX, pageY } = e;

      const rect = buttonRef.current.getBoundingClientRect();

      setTranslateX(
        `${pageX - rect.left - window.scrollX - offsetWidth / 2}px`
      );
      setTranslateY(
        `${pageY - rect.top - window.scrollY - offsetHeight / 2}px`
      );
    }
  };

  const styleValue = useMemo(
    () => ({
      transform: `translate(${translateX}, ${translateY})`,
    }),
    [translateX, translateY]
  );

  useEffect(() => {
    getPosition();
  }, []);

  return (
    <button
      className="font-semibold glow-button text-[0.6rem] h-fit px-3 py-[0.3rem]  md:max-lg:text-[0.7rem] md:max-lg:px-[1rem] md:max-lg:py-[0.5rem] lg:text-[0.9rem] lg:px-5 md:py-2"
      onClick={onClick}
      onPointerMove={onMove}
      ref={buttonRef}
    >
      {btnText}
      <div className="glow-button__glow">
        <div className="glow-button__glow-light" style={styleValue} />
      </div>

      <div className="glow-button__border">
        <div className="glow-button__border-light" style={styleValue} />
      </div>
    </button>
  );
};

export default GlowButton;
