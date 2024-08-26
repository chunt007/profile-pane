// A card in my profile to show you a QRCode of my webid
//
import { html, TemplateResult } from "lit-html";
import { NamedNode } from 'rdflib'
import {
  fullWidth,
  heading,
  paddingSmall,
  textCenter,
  textLeft,
  textGray,
} from "./baseStyles";
import { ProfilePresentation } from "./presenter";
import { styleMap } from "lit-html/directives/style-map.js";
import { vCard } from "./vCard";



const styles = {
  image: styleMap(fullWidth()),
  intro: styleMap({ ...textGray(), ...textCenter() }),
  card: styleMap({}),
  info: styleMap({ ...paddingSmall(), ...textLeft() }),
};

export const QRCodeCard = (
  profileBasics: ProfilePresentation,
  subject: NamedNode
): TemplateResult => {
  const nameStyle = styleMap({
    ...heading(),
    // "text-decoration": "underline",
    color: profileBasics.highlightColor, // was "text-decoration-color"
  });
  const qrCodeCanvasStyle = 'width: 82.5%; margin:auto;'
  const profileHighlightColor  = profileBasics.highlightColor  || '#000000'
  const cornerSquareColor = profileBasics.cornerSquareColor || '#000000'
  const cornerDotColor = profileBasics.cornerDotColor || '#000000'
  const backgroundColor = profileBasics.backgroundColor || '#ffffff'

  

  
  // console.log(`@@ qrcodes colours highlightColor ${highlightColor}, backgroundColor ${backgroundColor}`)
   
  return html`
    <div style=${styles.info}>
      <h3 style=${nameStyle}>${profileBasics.name}</h3>
      <div class="QRCode" style="${qrCodeCanvasStyle}" data-value="${vCard}" backgroundColor="${backgroundColor}" highlightColor="${profileHighlightColor}" cornerSquareColor="${cornerSquareColor}" cornerDotColor="${cornerDotColor}""><div id="canvas"></div>
    </div>
  `;
};
