export interface BrandType {
  brandName: string;
  brandLogo: string;
}

const brands: Record<string, BrandType> = {
  github: {
    brandName: "Github",
    brandLogo: "/images/brands/github.png",
  },
  mercury: {
    brandName: "Mercury",
    brandLogo: "/images/brands/mercury.png",
  },
  oracle: {
    brandName: "Oracle",
    brandLogo: "/images/brands/oracle.png",
  },
  huggingFace: {
    brandName: "HuggingFace",
    brandLogo: "/images/brands/hugging.png",
  },
  plaid: {
    brandName: "Plaid",
    brandLogo: "/images/brands/plaid.png",
  },
  "ibm-cloud": {
    brandName: "IBM Cloud",
    brandLogo: "/images/brands/ibm-cloud.png",
  },
  slack: {
    brandName: "Slack",
    brandLogo: "/images/brands/slack.png",
  },
  magicExecutiveAssistants: {
    brandName: "Magic Executive Assistants",
    brandLogo: "/images/brands/mea.png",
  },
  quickbooks: {
    brandName: "Qucikbooks",
    brandLogo: "/images/brands/quickbooks.png",
  },
  aws: {
    brandName: "AWS",
    brandLogo: "/images/brands/aws.png",
  },
  googleCloud: {
    brandName: "Google Cloud",
    brandLogo: "/images/brands/google-cloud.png",
  },
  salesForce: {
    brandName: "Salesforce",
    brandLogo: "/images/brands/salesforce.png",
  },
};

export default brands;
