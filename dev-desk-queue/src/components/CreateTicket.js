import React, {useState} from "react";


const CreateTicket = props => {
    const [ticket,setTicket] = useState({title:'',description:'',category:'',tried:'',resolved:false})
    const handleChange = event => {
        event.preventDefault();
        console.log(ticket);
        setTicket({...ticket,[event.target.name]:event.target.value})
    }

return (
  <div className="form">
    <label htmlFor="title">Ticket Title</label>
    <input
      id="title"
      name="title"
      type="text"
      placeholder="Ticket Title"
      onChange={event => handleChange(event)}
    />{" "}
    <br />
    <label htmlFor="description">Ticket Description</label>
    <input
      id="description"
      name="description"
      type="text"
      placeholder="Description"
      onChange={event => handleChange(event)}
    />
    <br />
    <label htmlFor="category">Ticket Category</label>
    <input
      id="category"
      name="category"
      type="text"
      placeholder="Category"
      onChange={event => handleChange(event)}
    />
    <br />
    <label htmlFor='tried'>What have you Tried</label>
    <textarea
      id="tried"
      name="tried"
      type="textarea"
      placeholder="what have you tried"
      onChange={event => handleChange(event)}
    />
  </div>
);
}
export default CreateTicket;
