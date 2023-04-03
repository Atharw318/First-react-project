import './App.css';
import {useState} from 'react'
function App() {
const [value, setValue] = useState(0)
  return (
    <div className='App'>
      <h2>
        ADD & Subtractnpm
      </h2>
      <div>
      <button className='first1' onClick={() =>setValue(value+1)}> +</button>
      <button className='first' onClick={() =>setValue(value-1)}> -</button>
      </div>
  
      <p className='value'>{value}</p>
    </div>
  );
}

export default App;
