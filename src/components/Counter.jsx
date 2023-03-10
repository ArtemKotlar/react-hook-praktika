import { useReducer } from 'react';

function countReducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + action.payload;

    case 'decrement':
      return state - action.payload;
    default:
      break;
  }
}

export default function Counter() {
  const [count, dispatch] = useReducer(countReducer, 0);

  return (
    <div>
      <p>{count}</p>
      <button
        type="button"
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        Збільшити
      </button>

      <button
        type="button"
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        Зменшити
      </button>
    </div>
  );
}
