import { useState } from "react"
import './BasicLottery.css'
import { genTicket, sum } from "./helper";

export default function BasicLottery(){
    let [ticket,setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === 15;
    let newTicket = ()=>{
        setTicket(genTicket(3));
    }
    return(
        <div>
            <h1>Lottery Game</h1>
            <div className="ticket">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3>{isWinning && 'Congratulations you won!'}</h3>
            <button onClick={newTicket}>Buy New Ticket</button>
        </div>
    )
}