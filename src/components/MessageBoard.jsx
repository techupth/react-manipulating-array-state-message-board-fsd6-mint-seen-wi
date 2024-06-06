import {useState} from "react"

function MessageBoard() {

  const [collectedMessage, setCollectedMessage] = useState(null)
  const [message, setMessage] = useState([])

  const displayMessage = (event) => {
    event.preventDefault();
    const newMessage = [...message];
    newMessage.push(collectedMessage)
    setMessage(newMessage)
    setCollectedMessage("")
  }

  const deleteMessage = (index) => {
    const newMessage = [...message];
    newMessage.splice(index, 1)
    setMessage(newMessage)
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
            value={collectedMessage}
            onChange={(event) => {
              setCollectedMessage(event.target.value)
            }}
          />
        </label>
        <button className="submit-message-button" onClick={displayMessage}>Submit</button>
      </div>
      <div class="board">
              
          <ul>
        {message.map((item,index) => {
            return (
            <div className="message">
              <h1 key={index}>{item}<button className="delete-button" onClick={() => {
                deleteMessage(index)
              }}>x</button></h1>          
             </div>)
             })}
            </ul>  
      </div>
    </div>
  );
}

export default MessageBoard;
