import './App.css';
import MyBar from './MyBar';
import MyCard from './MyCard';

function App() {
  return (
    <>
      <MyBar />
      <div className="grid-container">
        <MyCard />
        <MyCard />
        <MyCard />
      </div>
    </>
  );
}

export default App;
