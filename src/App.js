import P from 'prop-types';
import './App.css';
import React, { useCallback, useEffect, useState } from 'react';

//const Button = ({ incrementButton }) => {
//  return <button onClick={() => incrementButton(10)}>+</button>;
//};

//usando React.memo para não renderizar

const Button = React.memo(function Button({ incrementButton }) {
  console.log('Filho, renderizou');
  return <button onClick={() => incrementButton(10)}>+</button>;
});

Button.propTypes = {
  incrementButton: P.func,
};

function App() {
  const [counter, setCounter] = useState(0);

  // const incrementCounter = (n) => {
  //   setCounter(counter + n);
  // };

  //usandop useCallback

  //usando calback para não usar o counter dentro das
  //dependencias

  const incrementCounter = useCallback((n) => {
    setCounter((c) => c + n);
  }, []);

  console.log('Pai, renderizou');

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementCounter} />
    </div>
  );
}

export default App;
