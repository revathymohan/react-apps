import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);

  }
  return (
    <div className="wrapper">
      <div className="accordion">
        {data.map((item, i) => (
          <div className="item">
            <div className="title" onClick={() => toggle(i)}>
              <h2>{item.question}</h2>
              <span>{selected === i ? '-' :
                '+'}</span>
            </div>
            <div className={selected === i ? "contentshow" : "content"}>
              {item.answer}
            </div>
          </div>


        ))

        }
      </div>

    </div>
  );
}

const data = [
  {
    "question": "what is java",
    "answer": " It is a programming language"
  },
  {
    "question": "what is oops",
    "answer": " It is a programming concept"
  },
  {
    "question": "what is java",
    "answer": " It is a programming language"
  }

]
export default App;
