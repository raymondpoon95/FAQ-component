import { CardData } from "../App";

import Card from "./Card";

type CardListProps = {
  cardData: CardData[];
};

const CardList = ({ cardData }: CardListProps) => {
  return (
    <div className="cardList-container">
      {cardData.map(({ question, answer }, index) => (
        <Card key={index} question={question} answer={answer} id={index} />
      ))}
    </div>
  );
};

export default CardList;
