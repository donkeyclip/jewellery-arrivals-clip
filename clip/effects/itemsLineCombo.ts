import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const itemsLineCombo = (selector) =>
  new Combo(
    {
      incidents: [
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"926px"
              },
              initialValues: {
                  left:"1920px"
              },
            },
            props: {
              duration: 1000,
              selector:".h-line",
              easing:"easeOutCirc"
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  top:"100px"
              },
              initialValues: {
                  top:"1080px"
              },
            },
            props: {
              duration: 1000,
              selector:".v-line",
              easing:"easeOutCirc"
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"155px"
              },
              initialValues: {
                  left:"-500px"
              },
            },
            props: {
              duration: 500,
              selector:"svg",
              easing:"easeOutCirc"
            },
            position: 0,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                 transform:{
                  rotate:"120deg"
                 }
              },
              initialValues: {
                transform:{
                  rotate:"0deg"
                 }
              },
            },
            props: {
              duration: 2800,
              selector:"svg",
            },
            position: 300,
          },
          
          // remove 
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"1920px"
              },
              initialValues: {
                  left:"926px"
              },
            },
            props: {
              duration: 700,
              selector:".h-line"
            },
            position: 2900,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  top:"1080px"
              },
              initialValues: {
                  top:"100px"
              },
            },
            props: {
              duration: 700,
              selector:".v-line"
            },
            position: 2900,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  top:"-500px"
              },
              initialValues: {
                  top:"155px"
              },
            },
            props: {
              duration: 700,
              selector:"svg"
            },
            position: 2900,
          },
      ],
    },
    {
      selector,
      delay: "@expression(index *4000)",
    }
  );