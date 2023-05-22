import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('loading…');
  const [author, setAuthor] = useState('');

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const nextQuote = () => {
    const apiUrl = 'http://localhost:3000/quotes';
    fetch(apiUrl)
      .then(response => response.json())
      .then((data) => {
        setQuote(data[random(0, data.length - 1)].text);
        setAuthor(data[random(0, data.length - 1)].author);
      })
  }

  useEffect(() => {
    nextQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {quote}
        </p>
        <p>
          {author}
        </p>
        <button onClick={nextQuote}>
          Next Quote
        </button>
      </header>
    </div>
  );
}

export default App;
