import React,{useState} from 'react';

const Ticket = () => {
    // needs a Title, Description, Category, and What I've tried Array, as well as a Resolved Boolean
    //not sure if it needs to iterate here or in the main app component. 
const [ticket,setTicket] = useState({
    title:"placeholder",
    description:"description",
    category:"REACT",
    resolved:false,
    haveTried:["Banging head against wall", "banging head twice","considering banging it a third time"]
})


return (
  <div className='card'>
    <h3>Title: {ticket.title}</h3>
    <p className='subTitle'>Description: {ticket.description}</p>
    <p className='subTitle'>Category: {ticket.category}</p>
    <div className='haveTried'>
      <ul className='haveTried subTitle'>Tried:</ul>
      {ticket.haveTried.map(element => {
        return <li>{element}</li>;
      })}
    </div>
  </div>
);
}
export default Ticket;