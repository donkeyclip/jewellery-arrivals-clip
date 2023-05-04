import { CSSEffect } from "@donkeyclip/motorcortex";
export const opacity = (opacity,initialValue,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
          opacity,
      },
      initialValues:{
        opacity:initialValue
      }
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
