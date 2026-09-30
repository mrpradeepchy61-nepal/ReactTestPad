import { useState } from "react";


function App(){
  const quotes = [
    "Believe in yourself.",
    "Never give up.",
    "Success comes with hard work.",
    "Dream big and work hard.",
    "Every day is a new opportunity."
  ];

  const [quote, setQuote] = useState("");

  function genereateQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  }

  return(<>
    <button onClick={genereateQuote}>Generate Quote</button>
    <p>{quote}</p>
  </>)
}

export default App;