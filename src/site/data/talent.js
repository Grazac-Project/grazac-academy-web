// Companies where Grazac graduates work, shown in the scrolling logo rows on
// the home page. `logo` is a full wordmark; `icon` sits next to the name.
// Logo files live in src/site/img/logos.
import amazon from "../img/logos/amazon-wordmark.svg";
import capitalone from "../img/logos/capitalone-wordmark.svg";
import google from "../img/logos/google-wordmark.svg";
import paystack from "../img/logos/paystack-wordmark.svg";
import shopify from "../img/logos/shopify-wordmark.svg";
import slack from "../img/logos/slack-wordmark.svg";
import cowrywise from "../img/logos/cowrywise.png";
import credpal from "../img/logos/credpal.png";
import flutterwave from "../img/logos/flutterwave.png";
import mono from "../img/logos/mono.png";
import moove from "../img/logos/moove.png";
import opay from "../img/logos/opay.png";
import teamapt from "../img/logos/teamapt.png";

export const talentRows = [
  [
    { name: "Mono", icon: mono },
    { name: "TeamApt", icon: teamapt },
    { name: "OPay", icon: opay },
    { name: "Slack", logo: slack },
    { name: "Capital One", logo: capitalone },
    { name: "Bundle" },
    { name: "Flutterwave", icon: flutterwave },
  ],
  [
    { name: "Shopify", logo: shopify },
    { name: "Moove", icon: moove },
    { name: "Paystack", logo: paystack },
    { name: "Cowrywise", icon: cowrywise },
    { name: "CredPal", icon: credpal },
    { name: "Google", logo: google },
    { name: "Amazon", logo: amazon },
  ],
];
