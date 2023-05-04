import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const itemsImageCombo = (selector) =>
  new Combo(
    {
      incidents: [
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  top:"14.35%"
              },
              initialValues: {
                  top:"-100%"
              },
            },
            props: {
              duration: 500,
              easing:"easeOutCirc"
            },
            position: 0,
          },
          // remove 
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  top:"100%"
              },
              initialValues: {
                  top:"14.35%"
              },
            },
            props: {
              duration: 500,
            },
            position: 3000,
          },
      ],
    },
    {
      selector,
      delay: "@expression(index *4000)",
    }
  );