import { useState } from "react";

export default function LotteryGame(){
let [ticketNum,setTicketNum] = useState("");
let [sum,setSum] = useState(0);
let genTicket = ()=>{
    let newTicket = Math.floor(Math.random()*899)+100;
    setTicketNum(newTicket);
    sumOfThreeDigits(newTicket);
}
let sumOfThreeDigits = (newTicket)=>{
    let total = 0;
    for(let i=0; i<3;i++){      
        let digit = newTicket % 10 ;
        total += digit;
        newTicket = Math.floor(newTicket/10);
    }
    setSum(total);
}
    return (<div>
        {sum === 15 ? <h2>Lottery - 'Congratulations, you Won!'</h2>  : <h2>Lottery</h2>}
        <h3>Lottery Ticket = {ticketNum}</h3>
        <button onClick={genTicket}>Get New Ticket</button>
    </div>);
}