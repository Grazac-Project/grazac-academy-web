import classes from "./pricing.module.css";
import Install from "../../images/newsletter/install.svg"
import Instant from "../../images/newsletter/instant.svg"

const Pricing = ({
  type,
  image,
  prevAmount,
  newAmount,
  discount,
  method,
  bold,
  benefits,
  small,
  pay,
}) => {
  return (
    <div className={classes.main}>
      <h5><img src={image} alt="icon" />{type}</h5>
      <div className={classes.priceTag}>
        <p>{prevAmount}</p>
        <h3>{newAmount}</h3>
        <div className={classes.discount}>
          {discount.map((count, i) => (
            <span key={i}>{count}</span>
          ))}
        </div>
        <ul>
          {method.map((mth, i) => (
            <li key={i}>{mth}</li>
          ))}
        </ul>
      </div>
      <div className={classes.benefits}>
        <p>Other benefits</p>
        <ul>
          {benefits.map((benefit, i) => (
            <li key={i}>{benefit}</li>
          ))}
        </ul>
      </div>
      <p className={`${classes.pay} ${bold && classes.bold}`}>
        {pay}
        <small>{small}</small>
      </p>
    </div>
  );
};

export default Pricing;

export const priceData = [
  {
    type: "Instant payment",
    image: Instant,
    prevAmount: "N1,000,000",
    newAmount: "N500,000",
    discount: ["50% discount"],
    method: ["No legal fee", "Pay once & focus on learning"],
    benefits: [
      "3 months internship",
      "1:1 mentorship with experts",
      "Job opportunities",
      "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
      "Free wi-fi",
    ],
    pay: "",
    small: "",
  },
  {
    type: "Install payment",
    image: Install,
    prevAmount: "N1,000,000",
    newAmount: "N550,000",
    discount: ["50% discount", "+5% interest"],
    method: [
      "Initial payment of N250,000",
      "Non-refundable legal fee",
      "Pay at a flexible pace of 3 months",
      "10% interest",
    ],
    benefits: [
      "3 months internship",
      "1:1 mentorship with experts",
      "Job opportunities",
      "Placement support services like CV review, soft skills training, salary negotiation sessions etc.",
      "Free wi-fi",
    ],
    pay: "Pay N100,000",
    small: "/ month",
  },
];

export const discountData = [];
