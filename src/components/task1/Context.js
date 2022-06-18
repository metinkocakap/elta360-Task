import React,{createContext,useReducer} from "react";
let reducer = (state, action) => {
  switch (action.type) {
    case "CHECKBOX_OPTION":
      return {
        ...state,
        checkbox: state.checkbox.includes(action.payload)
          ? state.checkbox.filter(item => item !== action.payload)
          : [...state.checkbox, action.payload]
      };
    default:
    return state;
  }
};

const initialState = {checkbox: [] };
const Context = createContext(initialState);

const { Provider } = Context;

const ContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <Provider value={{ state, dispatch }}>{props.children}</Provider>;
};
export { Context, ContextProvider };