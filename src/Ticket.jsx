import React from 'react'
import TicketNum from './TicketNum'
import "./Ticket.css"
export default function Ticket({ticket}) {
  return (

    <div className='Ticket'>
      <p>Ticket</p>
      {ticket.map((num, idx) => (
        <Ticket num={num} key={idx}/>
      ))}
    </div>
  )
}
