import classes from "./NewPrice.module.css";

const NewPricing = () => {
  const NewPrice = [
    {
      id: 1,
      type: "Pay Installment",
      newAmount: "₦700,000",
      prevAmount: "₦750,000",
      spanNewAmount: "($466)",
      spanOldAmount: "($499)",
      discount: ["16.67%"],
      // method: ["₦350,000 Initial payment"],
      // span: ["₦210,000 ($210) Initial payment"],
      benefits: [
        "6 months of immersive training",
        "Flexible payment plan. ",
        "1:1 mentorship with experts ",
        "Job opportunities ",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc. ",
        'Free wi-fi',
      ],
    },
    {
      id: 2,
      type: "Pay at Once",
      newAmount: "₦650,000",
      prevAmount: "₦700,000",
      spanNewAmount: "($433)",
      spanOldAmount: "($466)",
      discount: ["16.67%"],
      recommend: "Highly Recommended",
      benefits: [
        "No legal fees",
        "6 months of immersive training",
        // "4 months of internship",
        'Access to free workspace for 6 months',
        "1:1 mentorship with experts",
        "Job opportunities",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
        'Free wi-fi',
      ],
    },
    {
      id: 3,
      type: "Cloud and Cybersecurity Course",
      newAmount: "₦850,000",
      prevAmount: "₦1,000,000",
      spanNewAmount: "($565.98)",
      spanOldAmount: "($665.85)",
      discount: ["15%"],
      benefits: [
        " Installment payment of NGN 900,000.",
        "6 months of immersive training",
        // "4 months of internship",
        // 'Access to free workspace for 6 months',
        "1:1 mentorship with experts",
        "Job opportunities",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
        'Free wi-fi',
      ],
    },
    // {
    //   id: 3,
    //   type: "Learn Now pay later",
    //   newAmount: "₦1,200,000 ",
    //   prevAmount: "₦1,300,000 ",
    //   spanOldAmount: "($1000)",
    //   spanNewAmount: "($1200)",
    //   discount: ["7.69%"],
    //   benefits: [
    //     "₦50,000 legal fee",
    //     "4 months of immersive training",
    //     "2 months of building a real project",
    //     'Access to free workspace for 6 months',
    //     "1:1 mentorship with experts",
    //     "Job opportunities",
    //     "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
    //   ],
    // },
  ];

  return (
    <div className={classes.main}>
      {NewPrice.map((item, index) => (
        <div
  className={`${classes.card} ${item.recommend ? classes.yellowBorder : ""}`}
  key={index}
>
          <h5>{item.type}</h5>
          <div className={classes.priceTag}>
            <h3>
              {item.newAmount} {" "}
              <span>{item.spanNewAmount}</span>
            </h3>
            <p>{item.prevAmount}{" "} <span>{item.spanOldAmount}</span> </p>
            <h6>{item.discount}</h6>
          </div>
          <div className={classes.benefits}>
            <ul>
              {item.id === 1 ? (
                <span>
                  {/* <li>{item.span}</li> */}
                </span>
              ) : null}

              {item.benefits.map((benefit, id) => (
                <li key={id}>{benefit}</li>
              ))}
            </ul>

            {item.id === 2 ? (
              <div className={classes.recommend}>{item.recommend}</div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewPricing;
