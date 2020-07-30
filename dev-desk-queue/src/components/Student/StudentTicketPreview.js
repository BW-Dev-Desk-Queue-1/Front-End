import React, { useState, useEffect } from "react";
import "./StudentDashboard.css";

const StudentTicketPreview = (props) => {
  //creates a div that shows expanded information about the selected card in the card list
  //preview contains:
  //ticket title
  //ticket category
  //description of issue
  //what I've tried
  //if open ticket: edit button
  //if closed ticket: reopen button
  let userId = localStorage.getItem("userId");
  const [edit, setEdit] = useState(false);

  const isEmpty = (obj) => {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
    return true;
  };

  const updateATicket = (e) => {
    e.preventDefault();
    props.updateTicket(props.detailedTicket, userId);
    setEdit(false);
  };

  const handleEditChanges = (e) => {
    e.preventDefault();
    props.setDetailedTicket({
      ...props.detailedTicket,
      [e.target.name]: e.target.value,
    });
  };
  const handleReopenTicket = () => {
    props.setDetailedTicket({
      ...props.detailedTicket,
      resolved: !props.detailedTicket.resolved,
    });
  };

  const closePreview = () => {
    props.setDetailedTicket({});
  };
  useEffect(() => {
    props.updateTicket(props.detailedTicket, userId);
  }, [props.detailedTicket.resolved]);

  return (
    <div className="preview-panel">
      {!edit && (
        <div
          className={`detailed-card ${
            isEmpty(props.detailedTicket) ? "hidden" : ""
          }`}
        >
          <div className="detailed-card-contents">
            <div className="preview-window-header-div">
              <p>{props.detailedTicket.title}</p>
              <p className="preview-window-x" onClick={closePreview}>
                x
              </p>
            </div>
            <h2>{props.detailedTicket.ticketCategory} Issue</h2>
            <h3>Description of Issue:</h3>
            <p>{props.detailedTicket.description}</p>
            <h3>What I've tried:</h3>
            <p>{props.detailedTicket.tried}</p>
          </div>
          <div className="detailed-card-buttons">
            <button
              className={`reopen ${
                props.detailedTicket.resolved ? "" : "hidden"
              }`}
              onClick={handleReopenTicket}
            >
              Reopen
            </button>
            <button
              className={`edit ${
                props.detailedTicket.resolved ? "hidden" : ""
              }`}
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
          </div>
        </div>
      )}
      {edit && (
        <form className="edit-form" onSubmit={updateATicket}>
          <label>
            Title: <br />
            <input
              name="title"
              onChange={handleEditChanges}
              value={props.detailedTicket.title}
            />
          </label>
          <label>
            Category: <br />
            <input
              name="ticketCategory"
              onChange={handleEditChanges}
              value={props.detailedTicket.ticketCategory}
            />
          </label>
          <label>
            Description: <br />
            <input
              name="description"
              onChange={handleEditChanges}
              value={props.detailedTicket.description}
            />
          </label>
          <label>
            Tried: <br />
            <input
              name="tried"
              onChange={handleEditChanges}
              value={props.detailedTicket.tried}
            />
          </label>
          <div className="edit-form-buttons">
            <button>Update</button>
            <button onClick={() => setEdit(false)}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default StudentTicketPreview;
