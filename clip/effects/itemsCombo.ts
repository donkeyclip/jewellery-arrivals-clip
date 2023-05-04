import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const itemsCombo = (selector) =>
  new Combo(
    {
      incidents: [
        {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  width:"186px"
              },
              initialValues: {
                  width:"0px"
              },
            },
            props: {
              duration: 400,
              selector:".sm-line"
            },
            position: 450,
           
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"0%"
              },
              initialValues: {
                  left:"-100%"
              },
            },
            props: {
              duration: 400,
              selector:".product-name"
            },
            position: 450,
          
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  left:"0%"
              },
              initialValues: {
                  left:"100%"
              },
            },
            props: {
              duration: 400,
              selector:".product-description"
            },
            position: 450,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  transform:{
                    scale:1
                  }
              },
              initialValues: {
                transform:{
                    scale:0
                  }
              },
            },
            props: {
              duration: 300,
              selector:".price"
            },
            position: 950,
          },
          {
            incidentClass: CSSEffect,
            attrs: {
              animatedAttrs: {
                  opacity:1
              },
              initialValues: {
                opacity:0
              },
            },
            props: {
              duration: 300,
              selector:".cta"
            },
            position: 950,
          },
          // remove 
          {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    width:"0px"
                },
                initialValues: {
                    width:"186px"
                },
              },
              props: {
                duration: 400,
                selector:".sm-line"
              },
              position: 3000,
             
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    left:"-100%"
                },
                initialValues: {
                    left:"0%"
                },
              },
              props: {
                duration: 400,
                selector:".product-name"
              },
              position: 3000,
            
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    left:"100%"
                },
                initialValues: {
                    left:"0%"
                },
              },
              props: {
                duration: 400,
                selector:".product-description"
              },
              position: 3000,
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    transform:{
                      scale:0
                    }
                },
                initialValues: {
                  transform:{
                      scale:1
                    }
                },
              },
              props: {
                duration: 300,
                selector:".price"
              },
              position: 3000,
            },
            {
              incidentClass: CSSEffect,
              attrs: {
                animatedAttrs: {
                    opacity:0
                },
                initialValues: {
                  opacity:1
                },
              },
              props: {
                duration: 300,
                selector:".cta"
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