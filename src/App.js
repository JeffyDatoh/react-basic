import './App.css';
import MyBar from './MyBar';
import MyCard from './MyCard';

var data = require('./attractions.json')

function App() {
  return (
    <>
      <MyBar />
      <h1 style={{paddingLeft: "10px"}}>Attraction</h1>
      <div className="grid-container">
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </>
  );
}

export default App;
