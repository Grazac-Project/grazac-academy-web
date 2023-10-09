import classes from "./virtual.module.css";

const VirtualPricing = () => {
  

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
      span: ["Initial payment of 70% of the tuition fee ($84) at enrollment"],

      benefits: [
        
        "Spread the remaining $36 over 3 months.",
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
    
      <div className={classes.main}>
        {virtualData.map((item, index) => (
          <div className={classes.card} key={index}>
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
    
  );
};

export default VirtualPricing;


