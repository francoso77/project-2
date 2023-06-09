import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER: {
      console.log(action.type);
      return { ...state, counter: state.counter + 1 };
    }
    case types.DECREMENT_COUNTER: {
      console.log(action.type);
      return { ...state, counter: state.counter - 1 };
    }
  }

  console.log('NÃO ENCONTREI A ACTION: ', action.type);
  return { ...state };
};
