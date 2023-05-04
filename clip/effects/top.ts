import { CSSEffect } from "@donkeyclip/motorcortex";
export const top = (top,initialValue,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
          top,
      },
      initialValues:{
        top:initialValue
      }
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
