import classes from "./virtual.module.css";

const VirtualPricing = () => {
  const virtualData = [
    {
      id: 2,
      type: "Pay Installment",
      newAmount: "₦300,000 ",
      prevAmount: "₦700,000",
      spanNewAmount: "($200)",
      spanOldAmount: "($466)",
      discount: ["57%"],
      // method: ["₦72,000 ($72) Initial payment"],
      span: ["Initial payment of 50% of the tuition fee at enrollment"],

      benefits: [
        "Spread the remaining payment over 2 months. ",
        // "3 months of exclusive learning online at your pace.",
        "1:1 mentorship with experts",
        "Learning from the comfort of your space",
        "Access to free webinars for your career growth and positioning",
        "Certification",
        // "Free wi-fi",
      ],
    },
    {
      id: 1,
      type: "Pay at Once",
      newAmount: "₦300,000 ",
      prevAmount: "₦700,000",
      spanNewAmount: "($200)",
      spanOldAmount: "($466)",
      discount: ["57%"],
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
      id: 3,
      type: "Cloud and Cybersecurity Course",
      newAmount: "₦450,000",
      prevAmount: "₦850,000",
      spanNewAmount: "($299.67)",
      spanOldAmount: "($565.98)",
      discount: ["50%"],
      span: ["Initial payment of 50% of the tuition fee at enrollment"],
      benefits: [
        "Spread the remaining payment over 2 months.",
        "3 months of exclusive learning online at your pace.",
        "1:1 mentorship with virtual experts",
        "Learning from the comfort of your space",
        "Access to free webinars for your career growth and positioning",
        "Certification",
      ],
    },
  ];

  return (
    <div className={classes.main}>
      {virtualData.map((item, index) => (
        <div
          className={`${classes.card} ${
            item.recommend ? classes.yellowBorder : ""
          }`}
          key={index}
        >
          <h5>{item.type}</h5>
          <div className={classes.priceTag}>
            <h3>
              {item.newAmount} <span>{item.spanNewAmount}</span>
            </h3>
            <p>
              {item.prevAmount} <span>{item.spanOldAmount}</span>
            </p>
            <h6>{item.discount}</h6>
          </div>
          <div className={classes.benefits}>
            <ul>
              {item.id === 2 ? (
                <span>
                  <li>{item.span}</li>
                </span>
              ) : null}
              {item.id === 3 ? (
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
