import { createContext, useContext } from 'react';
import './App.css';
import { useState } from 'react';

//criando um objeto como contexto
const globalState = {
  title: 'o título do objeto no State de contexto',
  body: 'o body do contexto',
  counter: 0,
};
const GlobalContext = createContext();

//eslint-disable-next-line
const Div = ({ childen }) => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

//eslint-disable-next-line
const H1 = () => {
  const theContext = useContext(GlobalContext);

  const {
    contextState: { title, counter },
  } = theContext;
  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

//eslint-disable-next-line
const P = () => {
  const theContext = useContext(GlobalContext);
  const {
    contextState: { body, counter },
    contextState,
    setContextState,
  } = theContext;
  //onClick={() => setContextState({ ...contextState, counter: counter + 1 })}
  return (
    <p
      onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}
    >
      {body}
    </p>
  );
};

export default function App() {
  const [contextState, setContextState] = useState(globalState);
  return (
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
}
