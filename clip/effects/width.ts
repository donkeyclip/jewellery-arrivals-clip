import { CSSEffect } from "@donkeyclip/motorcortex";
export const width = (width,initialValue,selector, duration, delay=0,easing = "linear") =>
  new CSSEffect(
    {
      animatedAttrs: {
          width,
      },
      initialValues:{
        width:initialValue
      }
    },
    {
      selector,
      duration,
      delay,
      easing,
    }
  );
