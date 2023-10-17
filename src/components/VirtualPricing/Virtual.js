import classes from "./virtual.module.css";

const VirtualPricing = () => {
  const virtualData = [
    {
      id: 1,
      type: "Pay at Once",
      prevAmount: "₦180,000 ($180)",
      newAmount: "₦120,000 ($120)",
      discount: ["33.32%"],
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
      prevAmount: "₦185,000 ($185)",
      newAmount: "₦125,000 ($125)",
      discount: ["33.32%"],
      method: ["₦72,000 ($72) Initial payment"],
      span: ["Initial payment of 70% of the tuition fee ($84) at enrollment"],

      benefits: [
        "Spread the remaining $36 over 3 months.",
        "1:1 mentorship with experts",
        "Learning from the comfort of your space",
        "Access to free webinars for your career growth and positioning",
        "Certification",
      ],
      
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
