import './App.css';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Scoreboard />
      <CardContainer />
    </div>
  );
}

export default App;
