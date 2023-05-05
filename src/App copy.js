import './App.css';
import { useEffect, useState } from 'react';

function eventFn() {
  console.log('h1 Clicado');
}

function App() {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    //setCounter(counter + 1);
    setCounter((c) => c + 1);
  };

  //componentDidUpdate --> executa toda vez que o component atualiza

  useEffect(() => {
    console.log('componentDidUpdate');
  });

  //componentDidMount --> executa UMA vez qdo renderiza

  useEffect(() => {
    console.log('componentDidMount');
    //o segundo paramentro uma array de DEPENDENCIAS
    //para exucutar uma vez vai vazio
  }, []);

  useEffect(() => {
    //componentDidMount
    document.querySelector('h1')?.addEventListener('click', eventFn);
    //componentWillUmount - limpeza
    return () => {
      document.querySelector('h1')?.removeEventListener('click', eventFn);
    };
  }, []);

  useEffect(() => {
    console.log('componentDidMount');
    //o segundo paramentro uma array de DEPENDENCIAS
    //para exucutar uma vez vai vazio
  }, []);
  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button type="button" onClick={handleClick}>
        +
      </button>
    </div>
  );
}

export default App;
