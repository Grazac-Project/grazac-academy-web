import React from "react";
import Button from "../../../shared/button/Button";
import TextComponent from "../../../shared/textcomponent/TextComponent";
function ChallengeCard({
  title,
  topBand,
  lowerBand,
  submitDate,
  dueDate,
  bgColor,
  buttonText,
  buttonTextColor,
  disabled,
  buttonBgColor,
  textColor,
}) {
  return (
    <div
      className="challlenge-card__container"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <TextComponent color={textColor}>
        <h4>{title}</h4>
      </TextComponent>
      <div className="challlenge-card__scores">
        <TextComponent color={textColor}>
          <h3>
            {topBand}/{" "}
            <span className="challlenge-card__scores-span">{lowerBand}</span>
          </h3>
        </TextComponent>
        <span>scored</span>
      </div>

      <div className="challenge-card__submit">
        <div className="challenge-card__submit-text">
          <span>Submitted On</span>
          <TextComponent color={textColor}>
            <p>{submitDate}</p>
          </TextComponent>
        </div>
        <div classname="challenge-card__submit-button">
          <Button
            text={buttonText}
            bgColor={buttonBgColor}
            textColor={buttonTextColor}
            disabled={disabled}
          />
        </div>
      </div>
    </div>
  );
}

export default ChallengeCard;
