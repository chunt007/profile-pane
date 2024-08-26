import { DataBrowserContext } from "pane-registry";
import { NamedNode, LiveStore } from "rdflib";
import { render } from "lit-html";
import { ProfileView } from "./ProfileView";
import { icons, ns } from "solid-ui";
import QRCodeStyling, { gradientTypes } from "qr-code-styling";

async function loadExtendedProfile(store: LiveStore, subject: NamedNode) {
  const otherProfiles = store.each(
    subject,
    ns.rdfs("seeAlso"),
    null,
    subject.doc()
  ) as Array<NamedNode>;
  if (otherProfiles.length > 0) {
    await store.fetcher.load(otherProfiles);
  }
}

const Pane = {
  global: false,
  icon: icons.iconBase + "noun_15059.svg",
  name: "profile",
  label: function (
    subject: NamedNode,
    context: DataBrowserContext
  ): string | null {
    const t = context.session.store.findTypeURIs(subject);
    if (
      t[ns.vcard("Individual").uri] ||
      t[ns.foaf("Person").uri] ||
      t[ns.schema("Person").uri]
    ) {
      return "Profile";
    }
    return null;
  },
  render: (subject: NamedNode, context: DataBrowserContext): HTMLElement => {
    const target = context.dom.createElement("div");
    const store = context.session.store;

    loadExtendedProfile(store, subject).then(async () => {
      render(await ProfileView(subject, context), target)
/*  Not currently used as personTR does itself
      const fillIns =  Array.from(target.getElementsByClassName('fillInLater'))
      for (const ele of fillIns) {
        const href = ele.getAttribute('href')
        store.fetcher.load(href).then(()=> { // async
          const label = utils.label(store.sym(href))
          ele.children[1].textContent =  label // Relabel
          console.log('   ele.children[0]',   ele.children[1])
          console.log(` Relabelled  ${href} to "${label}"`)
        })
      }
      */
      const QRCodeEles = Array.from(target.getElementsByClassName('QRCode')) // was context.dom
      if (!QRCodeEles.length) return console.error("QRCode Ele missing")
      for (const QRCodeElement of QRCodeEles as HTMLElement[]) {
        const value = QRCodeElement.getAttribute('data-value')
        
       
        if (!value) return console.error("QRCode data-value missing")
        
        const highlightColor = QRCodeElement.getAttribute('highlightColor') || '#000000'
        const backgroundColor = QRCodeElement.getAttribute('backgroundColor') || '#ffffff'
        const cornerSquareColor = QRCodeElement.getAttribute('cornerSquareColor') || '#000000'
        const cornerDotColor = QRCodeElement.getAttribute('cornerDotColor') || '#000000'
       
        // console.log(`@@ qrcodes2 colours highlightColor ${highlightColor}, backgroundColor ${backgroundColor}`)

        const qrCode = new QRCodeStyling({

          width: 300,
          height: 300,
          type: "svg",
          data: value, 
          qrOptions: {
            typeNumber: 0,
            mode:"Byte",
            errorCorrectionLevel:"Q"},
            image: "https://raw.githubusercontent.com/solid/community-server/main/templates/images/solid.svg", // needing upload image for .ttl
            dotsOptions: {
            color: highlightColor,
            type: "classy-rounded", 
            
            //gradient: {type:'linear', rotation: 25, colorStops:[{ offset: 0, color: "blue"}] }
          },
          backgroundOptions: {
            color: backgroundColor,
            //gradient: {type:'linear', rotation: 1, colorStops:[{ offset: 0, color: "white"}] }
          },
          cornersSquareOptions: {
            color: cornerSquareColor,
            type: "extra-rounded",
            //gradient: {type:'linear', rotation: 25, colorStops:[{ offset: 0, color: "blue"}] }
          },
          cornersDotOptions: {
            color: cornerDotColor,
            type: "square"
         
          },

      

      });

      
      
      qrCode.append(document.getElementById("canvas")!);
      qrCode.download({ name: "qr", extension: "svg" });
      }
    })

    return target;
  },
};
export default Pane;
