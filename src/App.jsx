import LotteryGame from "./LotteryGame";
import BasicLottery from "./BasicLottery";
import "./App.css";
import Lottery from "./Lottery";
import { sum } from "./helper";

function App() {
  let winCondition = (ticket) => {
    return sum(ticket) === 15;
  };
  return (
    <>
      <Lottery n={4} winCondition={winCondition} />
      {/* <BasicLottery></BasicLottery> */}
      {/* <LotteryGame></LotteryGame> */}
    </>
  );
}

export default App;
