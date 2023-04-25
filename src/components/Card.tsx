import { useState } from "react";
import { CardData } from "../App";

import { IoMdArrowDropdown } from "react-icons/io";

type CardProps = {
  id: number;
};

const Card = ({ question, answer, id }: CardData & CardProps) => {
  const [isAnswerVisible, setIsAnswerVisible] = useState(id === 0);

  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
  };

  return (
    <>
      <div className="card-container">
        <div className="card-container__question-container">
          <IoMdArrowDropdown
            onClick={toggleAnswer}
            className={`arrow ${isAnswerVisible ? "active" : ""}`}
          />
          {question}
        </div>
        <p className={`answer ${isAnswerVisible ? "active" : ""}`}>{answer}</p>
      </div>
    </>
  );
};

export default Card;
