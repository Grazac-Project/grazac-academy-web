import React from "react";
import "./styles.css";
import ProgressBar from "@ramonak/react-progress-bar";

export const CustomProgressbar = ({
  displayLabel,
  height,
  bgColor,
  completed,
  maxCompleted,
}) => {
  return (
    <ProgressBar
      bgColor={bgColor}
      isLabelVisible={displayLabel}
      height={height}
      completed={completed}
      maxCompleted={maxCompleted}
    />
  );
};

const Progress = ({ title, price, current, maximum, bgColor }) => {
  const [colorState, setColorState] = React.useState(bgColor);
  const [showPay, setShowPay] = React.useState();
  return (
    <div
      style={{ background: `${colorState}` }}
      onMouseOver={() => setShowPay(true)}
      onMouseLeave={() => setShowPay(false)}
      className="mini-progress__card"
    >
      {showPay ? (
        <>
          <PayCard />
        </>
      ) : (
        <>
          <h2>{title} Progress</h2>

          <div className="mini-progress__card-information">
            <span className="sub-heading">
              <span class="values">
                {price && "$"}
                {current}
              </span>
              /{maximum}
            </span>
            <span class="caption">{title} Completed</span>
          </div>

          <div className="mini-progress__card-information">
            <span className="values sub-heading">
              {Math.floor((current / maximum) * 100)}
            </span>
            <span className="caption">%Completed</span>
          </div>

          <div>
            <CustomProgressbar
              completed={current}
              maxCompleted={maximum}
              bgColor={"#773DD3"}
              height={"5px"}
              displayLabel={false}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default Progress;

const PayCard = ({}) => {
  return (
    <div className="paycard__container">
      <button>Pay</button>
    </div>
  );
};
