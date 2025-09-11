import classes from "./virtual.module.css";

const VirtualPricing = () => {
  const virtualData = [
    {
      id: 1,
      type: "Pay at Once",
      newAmount: "₦120,000 ",
      prevAmount: "₦180,000",
      spanNewAmount: "($120)",
      spanOldAmount: "($180)",
      discount: ["16.67%% 0FF"],
      recommend: "Highly Recommended",

      benefits: [
        "Pay once and learn online at your own pace for 3 months",
        "3 months of exclusive learning online at your pace.",
        "1:1 mentorship with virtual experts",
        "Learning from the comfort of your space",
        "Access to free webinars for your career growth and positioning",
        "Certification",
      ],
    },
    {
      id: 2,
      type: "Pay Installment",
      newAmount: "₦125,000 ",
      prevAmount: "₦185,000",
      spanNewAmount: "($125)",
      spanOldAmount: "($185)",
      discount: ["16.67%% OFF"],
      // method: ["₦72,000 ($72) Initial payment"],
      span: ["₦72,000 ($72) Initial payment"],

      benefits: [
        "Pay N53,000 ($53) remaining at a flexible pace of N26,500 ($26.5) per month for 2 months. ",
        "1:1 mentorship with experts",
        "Placement support services like CV review, soft skills training, salary negotiation sessions etc. ",
        "Free wi-fi",
        // "Access to free webinars for your career growth and positioning",
        // "Certification",
      ],
      
    },
  ];

  return (
    <div className={classes.main}>
      {virtualData.map((item, index) => (
        <div
  className={`${classes.card} ${item.recommend ? classes.yellowBorder : ""}`}
  key={index}
>
          <h5>{item.type}</h5>
          <div className={classes.priceTag}>
            <h3>
              {item.newAmount} <span>{item.spanNewAmount}</span>
            </h3>
            <p>{item.prevAmount} <span>{item.spanOldAmount}</span></p>
            <h6>{item.discount}</h6>
          </div>
          <div className={classes.benefits}>
            <ul>
              {item.id=== 2 ?(

              <span>
                <li>{item.span}</li>
              </span>
              ) : null}

              {item.benefits.map((benefit, id) => (
                <li key={id}>{benefit}</li>
              ))}
            </ul>

            {item.id === 1 ? (
              <div className={classes.recommend}>{item.recommend}</div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default VirtualPricing;
