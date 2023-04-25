import CardList from "./components/CardList";
import { data } from "./mocks/data";

import "./App.css";

export type CardData = {
  question: string;
  answer: string;
  isOpen?: boolean;
};

const App = () => {
  return (
    <>
      <CardList cardData={data} />
    </>
  );
};

export default App;
