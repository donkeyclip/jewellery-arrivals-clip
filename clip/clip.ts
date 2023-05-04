import { HTMLClip, setCSSCore } from "@donkeyclip/motorcortex";
import css from "./clip.css";
import html from "./clip.html";
import { opacity } from "./effects/opacity";
import { top } from "./effects/top";
import { left } from "./effects/left";
import { height } from "./effects/height";
import initParams from "./initParams";
import initParamsValidationRules from "./initParamsValidationRules";

import AnimePluginDefinition from "@donkeyclip/motorcortex-anime";
import { itemsCombo } from "./effects/itemsCombo";
import { itemsLineCombo } from "./effects/itemsLineCombo";
import { itemsImageCombo } from "./effects/itemsImageCombo";
import { width } from "./effects/width";
setCSSCore(AnimePluginDefinition.CSSEffect);


const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParamsValidationRules,
  initParams: initParams[0].value,
  containerParams: {
    width: "1920px",
    height: "1080px",
  },
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&display=swap",
    },
  ],
});


clip.addIncident(left("33.2%","-100%",".horizontal-line",1200,0,"easeOutCirc"),0);
clip.addIncident(top("39%","-100%",".vertical-line",1000,0,"easeOutCirc"),200);
clip.addIncident(left("0%","-100%",".title",1000,0,"easeOutCirc"),400);
clip.addIncident(left("0%","100%",".subtitle",1000,0,"easeOutCirc"),400);
clip.addIncident(opacity(1,0,".image",500,"@stagger(0,400)"),800);


//pause for some seconds

clip.addIncident(left("-100%","33.2%",".horizontal-line",1000),3100);
clip.addIncident(top("-100%","39%",".vertical-line",1000),3300);
clip.addIncident(left("-100%","0%",".title",800),3450);
clip.addIncident(left("100%","0%",".subtitle",800),3450);
clip.addIncident(opacity(0,1,".image",500,"@stagger(0,400)"),3900);
//move images box to be ready for outro
clip.addIncident(left("540px","684px",".images-box",1,),4950);
clip.addIncident(top("230px","169px",".images-box",1,),4950);
clip.addIncident(top("900px","780px",".horizontal-line",1),4950);
clip.addIncident(width("1050px","992px",".horizontal-line",1),4950);
clip.addIncident(left("450px","580px",".vertical-line",1),4950);
clip.addIncident(height("800px","540px",".vertical-line",1),4950);

clip.addIncident(itemsCombo(".product-info-wrapper"),4950);
clip.addIncident(itemsLineCombo(".product-lines"),4950);
clip.addIncident(itemsImageCombo(".product-image"),4950);

clip.addIncident(opacity(1,0,".image",500,"@expression(initParams.products.length*4000+200+150*index)"),4930);
clip.addIncident(left("20%","-100%",".horizontal-line",1000,"@expression(initParams.products.length*4000)","easeOutCirc"),4930);
clip.addIncident(top("15%","-100%",".vertical-line",1000,"@expression(initParams.products.length*4000)","easeOutCirc"),4930);
clip.addIncident(opacity(0.8,0,".image .cta",200,"@expression(initParams.products.length*4000+200+150*index)"),4950)
export { clip };
