import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [data,setData] = useState([])

    useEffect(() => {
      handleClick()
    },[])

    const handleClick = () => {
         axios.get("https://api.adviceslip.com/advice")
              .then((response) => {
                console.log(response.data.slip)
                setData(response.data.slip)
              })
    }

return (
    <div className="App">
      <div className="card">
         <h1 className='heading'>{data.advice}</h1>
         <button className='shake-bottom' onClick={handleClick}>GIVE ME ADVICE</button>
      </div>
    </div>
  );
}

export default App;
