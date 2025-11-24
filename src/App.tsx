import { useState } from "react";
import Message from "./message";
import ListGroup from "./components/ListGroup";

function App() {
  const myname = "J-R Rivera";

  const answer = myname 
    ? <h1>hello {myname}</h1> 
    : <h1>hello World</h1>;

  const see = (
    <div>
      this is my app with my Message component: this is quite complicated 
      <Message /> 
      my name is {myname} 
      {answer}
    </div>
  );

  // 🔥 State for the list 
  const [items, setItems] = useState([
    "New York",
    "San Francisco",
    "Tokyo",
    "London",
    "Berlin"
  ]);

  // 🔥 Controlled input
  const [inputValue, setInputValue] = useState("");

  function AddToListGroup() {
    
    if (inputValue.trim() === "") return;

  
  // Capitalize first letter
  const formattedValue = inputValue.charAt(0).toUpperCase() + inputValue.slice(1);

    // Add to the items list
    setItems([...items, formattedValue]);

    // clear input
    setInputValue("");

 
  }

  return (
    <div>
      <input
        className="input"
        id="addtolisttext"
        type="text"
        placeholder="insert text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />

      <button className="button-primary" onClick={AddToListGroup}>
        Enter
      </button>

      {/* List updates automatically because it's state */}
      <ListGroup items={items} />

      {see}
    </div>
  );
}

export default App;
