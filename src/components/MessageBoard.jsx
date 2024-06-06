import { useState } from "react";

function MessageBoard() {
  const [message, setMessage] = useState("");
  const [messageText, setMessageText] = useState([]);

  const handleInputTextChange = (event) => {
    setMessage(event.target.value);
  };

  const addMessage = (event) => {
    event.preventDefault();
    const newListMessage = [...messageText];
    newListMessage.push(message);
    setMessageText(newListMessage);
  };
  const deleateMessage = (messageIndex) => {
    const newListMessage = [...messageText];
    newListMessage.splice(messageIndex, 1);
    setMessageText(newListMessage);
  };

  function MessageList() {
    return (
      <div>
        {messageText.map((item, index) => (
          <div className="message">
            <h1>{item}</h1>
            <button
              className="delete-button"
              onClick={() => {
                deleateMessage(index);
              }}
            >
              x
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="app-wrapper">
      <h1 class="app-title">Message board</h1>
      <div class="message-input-container">
        <label>
          <input
            id="message-text"
            name="message-text"
            type="text"
            placeholder="Enter message here"
            value={message}
            onChange={handleInputTextChange}
          />
        </label>
        <button className="submit-message-button" onClick={addMessage}>
          Submit
        </button>
      </div>
      <div class="board">
        <MessageList />
      </div>
    </div>
  );
}

export default MessageBoard;
