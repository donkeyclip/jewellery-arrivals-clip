import { CSSEffect } from "@donkeyclip/motorcortex";
export const height = (height,initialValue,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
          height,
      },
      initialValues:{
        height:initialValue
      }
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
