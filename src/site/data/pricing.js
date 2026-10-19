// Tuition. `was` is the old price, shown struck through.

export const applicationFee = "₦10,000";

export const pricing = {
  onsite: {
    label: "Physical",
    duration: "6 months · Abeokuta campus",
    plans: [
      {
        name: "Pay in installments",
        price: "₦700,000",
        was: "₦1,200,000",
        note: "₦350,000 initial payment, then ₦175,000 in month one and month two.",
        features: [
          "4 months of immersive training",
          "2 months building a real project",
          "Free workspace access for 6 months",
          "1:1 mentorship with experts",
          "Job opportunities",
          "Placement support: CV review, soft skills, salary negotiation",
          "ACTD accredited certification",
        ],
      },
      {
        name: "Pay at once",
        price: "₦650,000",
        was: "₦1,200,000",
        featured: true,
        note: "One payment before classes begin. Our best value.",
        features: [
          "4 months of immersive training",
          "2 months building a real project",
          "Free workspace access for 6 months",
          "1:1 mentorship with experts",
          "Job opportunities",
          "Placement support: CV review, soft skills, salary negotiation",
          "ACTD accredited certification",
        ],
      },
      {
        name: "Cloud & Cybersecurity",
        price: "₦850,000",
        was: "₦1,500,000",
        note: "Installment payment option of ₦900,000.",
        features: [
          "4 months of immersive training",
          "2 months building a real project",
          "Free workspace access for 6 months",
          "1:1 mentorship with experts",
          "Job opportunities",
          "Placement support: CV review, soft skills, salary negotiation",
          "ACTD accredited certification",
        ],
      },
    ],
  },
  virtual: {
    label: "Virtual",
    duration: "3 months · live online classes",
    plans: [
      {
        name: "Pay in installments",
        price: "₦350,000",
        was: "₦400,000",
        note: "₦150,000 initial payment, then ₦100,000 in month one and month two.",
        features: [
          "3 months of immersive training",
          "1:1 mentorship with virtual experts",
          "Job opportunities",
          "Placement support: CV review, soft skills, salary negotiation",
          "ACTD accredited certification",
        ],
      },
      {
        name: "Pay at once",
        price: "₦300,000",
        was: "₦350,000",
        featured: true,
        note: "One payment before classes begin. Our best value.",
        features: [
          "3 months of immersive training",
          "1:1 mentorship with virtual experts",
          "Job opportunities",
          "Placement support: CV review, soft skills, salary negotiation",
          "ACTD accredited certification",
        ],
      },
    ],
  },
};

export const percentOff = (price, was) => {
  const n = (s) => Number(String(s).replace(/[^0-9]/g, ""));
  const p = n(price);
  const w = n(was);
  if (!p || !w || w <= p) return null;
  return Math.round(((w - p) / w) * 100);
};
