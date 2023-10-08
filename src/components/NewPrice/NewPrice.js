import classes from "./NewPrice.module.css";

const NewPricing = () => {
  const NewPrice = [
    {
      type: "Pay Installment",
      prevAmount: "₦1,200,000 ($1000)",
      newAmount: "₦1,050,000 ",
      spanNewAmount: "($1005)",
      discount: ["16.67%"],
      method: ["₦210,000 ($210) Initial payment"],
      span: ["₦210,000 ($210) Initial payment"],
      benefits: [
        "Pay N840,000 ($840) remaining at a flexible pace of N140,000 ($140) per month for 6 months. ",
        "1:1 mentorship with experts",
        "Job opportunities",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
        "Free wi-fi",
      ],
      pay: "",
      small: "",
    },
    {
      type: "Pay at Once",
      prevAmount: "₦1,200,000 ($1200)",
      newAmount: "₦1,000,000 ",
      spanNewAmount: "($1000)",

      discount: ["16.67%"],
      recommend: "Highly Recommended",

      benefits: [
        "No legal fees",
        "8 months of immersive training",
        "4 months internship",
        "1:1 mentorship with experts",
        "Job opportunities",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
        "Free wi-fi",
      ],
      pay: "Pay N100,000",
      small: "/ month",
    },
    {
      type: "Learn Now pay later",
      prevAmount: "₦1,000,000 ($1000)",
      newAmount: "₦1,200,000 ",
      spanNewAmount: "($1200)",

      discount: ["16.67%"],

      benefits: [
        "8 months of immersive training",
        "4 months internship",
        "1:1 mentorship with experts",
        "Job opportunities",
        "Placement support services li Fe CV review, soft skills training, salary negotiation sessions etc.",
        "Free wi-fi",
      ],
      pay: "Pay N100,000",
      small: "/ month",
    },
  ];

  const virtualData = [
    {
      type: "Pay at Once",
      prevAmount: "₦180,000 ($180)",
      newAmount: "₦120,000 ($120)",
      discount: ["16.67%"],
      recommend: "Highly Recommended",

      benefits: [
        "No legal fees",
        "8 months of immersive training",
        "4 months internship",
        "1:1 mentorship with experts",
        "Job opportunities",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
        "Free wi-fi",
      ],

      pay: "Pay N100,000",
      small: "/ month",
    },
    {
      type: "Pay Installment",
      prevAmount: "₦185,000 ($185)",
      newAmount: "₦125,000 ($125)",
      discount: ["16.67%"],
      method: ["₦72,000 ($72) Initial payment"],
      benefits: [
        "Pay N53,000 ($53) remaining at a flexible pace of N26,500 ($26.5) per month for 2 months.",
        "1:1 mentorship with experts",
        "Job opportunities",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
        "Free wi-fi",
      ],
      pay: "",
      small: "",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.card}>
        {NewPrice.map((item, index) => (
          <div className={classes.main} key={index}>
            <h5>{item.type}</h5>
            <div className={classes.priceTag}>
              <h3>
                {item.newAmount} <span>{item.spanNewAmount}</span>
              </h3>
              <p>{item.prevAmount}</p>
              <h6>{item.discount}</h6>
            </div>
            <div className={classes.benefits}>
              <ul>
                <span>
                  <li>{item.span}</li>
                </span>

                {item.benefits.map((benefit, id) => (
                  <li key={id}>{benefit}</li>
                ))}
              </ul>

              <div>
                <div className={classes.recommend}>{item.recommend}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewPricing;


