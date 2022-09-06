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
  size,
}) {
  return (
    <div
      className={
        size === "long"
          ? "challlenge-card__container long"
          : "challlenge-card__container short"
      }
      // className={"challlenge-card__container"}
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div
        className={
          size === "long"
            ? "challlenge-card__container-top__long"
            : "challlenge-card__container-top__short"
        }
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
      </div>
      <div className="challenge-card__submit">
        <div className="challenge-card__submit-text">
          {submitDate ? <span>Submitted On</span> : <span>Due Date</span>}
          <TextComponent color={textColor}>
            {submitDate ? <p>{submitDate}</p> : <p>{dueDate}</p>}
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
