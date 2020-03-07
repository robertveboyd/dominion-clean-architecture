import React from "react";
import { Card } from "core";
import { actions, useTypedSelector } from "../redux";
import { useDispatch } from "react-redux";
import { useStyles } from "../styles";
import { withStyles, WithStyles } from "@material-ui/styles";

interface Props extends WithStyles<typeof useStyles> {}

const CardList: React.FC<Props> = ({ classes }) => {
  const cards = sanitizeCards(useTypedSelector(state => state.deck.cards));
  const isRandomizing = useTypedSelector(state => state.view.isRandomizing);
  const isFlip = useTypedSelector(state => state.view.isFlip);
  const dispatch = useDispatch();

  return (
    <div className={classes.CardList}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={classes.Scene}
          onClick={() => dispatch(actions.randomizeCard(index))}
          style={pointerEventsStyling(isRandomizing[index])}
        >
          <div
            className={`${classes.Card} ${
              isFlip[index] ? classes.Card__flipped : ""
            }`}
          >
            <div
              className={`${classes.Card__face} ${classes.Card__face__back}`}
            >
              {renderCardFaceBackImage({ classes })}
            </div>
            <div
              className={`${classes.Card__face} ${classes.Card__face__front}`}
            >
              {renderCardFaceFrontImage(card, { classes })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

CardList.defaultProps = {};

const sanitizeCards = (cards: Card[]): Card[] => {
  if (cards.length === 0) {
    return [...Array(10)].map(_ => ({
      name: "",
      expansion: "",
      cost: -1
    }));
  } else return cards;
};

const pointerEventsStyling = (randomizing: boolean) => {
  return {
    pointerEvents: randomizing ? "none" : "auto"
  } as React.CSSProperties;
};

const renderCardFaceBackImage = ({ classes }: Props) => {
  const src = "/assets/images/cards/Randomizer.jpg";
  const alt = "Card";
  return <img className={classes.Card__image} src={src} alt={alt} />;
};

const renderCardFaceFrontImage = (
  { name, expansion }: Card,
  { classes }: Props
) => {
  const src =
    name && expansion
      ? `/assets/images/cards/${expansion}/${name.replace(/ /g, "_")}.jpg`
      : "/assets/images/cards/Blank.jpg";
  const alt = name ? name : "Card";
  return <img className={classes.Card__image} src={src} alt={alt} />;
};

export default withStyles(useStyles)(CardList);
