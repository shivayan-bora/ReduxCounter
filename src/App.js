import './App.css';
import {useSelector, useDispatch} from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  }

  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  }

  const addBy = () => {
    dispatch({type: 'ADD_BY', payload: 10});
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={addBy}>Add Value</button>
    </div>
  );
}

export default App;
