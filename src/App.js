import { createContext, useContext } from 'react';
import './App.css';
import P from 'prop-types';
import { useReducer } from 'react';
import { useRef } from 'react';

//actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
export const globalState = {
  title: 'o título do objeto no Reducer',
  body: 'o body do Reducer',
  counter: 0,
};

//Reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE: {
      console.log('Mudar o título');
      return { ...state, title: action.payload };
    }
  }
  console.log(action);
  return { ...state };
};

//AppContext.jsx
//no javascript como o value do provider é o mesmo nome do state não
//precisa passar como valor .. state: state

export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return (
    <>
      <Context.Provider value={{ state, changeTitle }}>
        {children}
      </Context.Provider>
    </>
  );
};

AppContext.propTypes = {
  children: P.node,
};

//H1 / index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <input type="text" ref={inputRef} />
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>
        {context.state.title}
      </h1>
    </>
  );
};

//App.jsx
export default function App() {
  return (
    <AppContext>
      <div>
        <H1 />
      </div>
    </AppContext>
  );
}
