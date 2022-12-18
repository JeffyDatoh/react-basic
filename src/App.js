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
        <MyCard name={data[0].name} coverimage={data[0].coverimage} detail={data[0].detail} />
        <MyCard name={data[1].name} coverimage={data[1].coverimage} detail={data[1].detail} />
        <MyCard name={data[2].name} coverimage={data[2].coverimage} detail={data[2].detail} />
        <MyCard name={data[3].name} coverimage={data[3].coverimage} detail={data[3].detail} />
        <MyCard name={data[4].name} coverimage={data[4].coverimage} detail={data[4].detail} />
      </div>
    </>
  );
}

export default App;
