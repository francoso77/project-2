import { useReducer } from 'react';
import './App.css';

const globalState = {
  title: 'o título do objeto no Reducer',
  body: 'o body do Reducer',
  counter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'muda': {
      console.log('chamou muda com', action.payload);
      return { ...state, title: action.payload };
    }
    case 'inverter': {
      console.log('Chamou inverter');
      const { title } = state;
      return { ...state, title: title.split('').reverse().join('') };
    }
  }
  console.log('Nenhuma action encontrada...');
  return { ...state };
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { counter, title, body } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button
        onClick={() =>
          dispatch({
            type: 'muda',
            payload: new Date().toLocaleString('pt-BR'),
          })
        }
      >
        Click
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'inverter',
          })
        }
      >
        Invert
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'qualquercoisa',
          })
        }
      >
        Sem Action
      </button>
    </div>
  );
}
