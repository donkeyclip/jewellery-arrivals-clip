import { CSSEffect } from "@donkeyclip/motorcortex";
export const left = (left, initialValue,selector, duration, delay = 0, easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
        left,
      },
      initialValues:{
        left:initialValue
      }
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
