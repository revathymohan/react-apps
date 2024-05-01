import logo from './logo.svg';
import './App.css';
import Progressbar from './components/Progressbar';

function App() {
  return (
    <div className="App">
      <h3 className="heading">Progress Bar</h3>
      <Progressbar
        bgcolor="orange"
        progress="30"
        height={30}
      />
      <Progressbar
        bgcolor="red"
        progress="60"
        height={30}
      />
      <Progressbar
        bgcolor="#99ff66"
        progress="50"
        height={30}
      />
      <Progressbar
        bgcolor="#ff00ff"
        progress="85"
        height={30}
      />
      <Progressbar
        bgcolor="#99ccff"
        progress="95"
        height={30}
      />
    </div>
  );
}

export default App;
