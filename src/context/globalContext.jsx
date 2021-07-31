import React, { createContext, useContext, useReducer } from "react";

// create context for state and dispatch
const GlobalStateContext = createContext();
const GlobalDispatchContext = createContext();

// hooks
export const useGlobalStateContext = () => useContext(GlobalStateContext);
export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext);

// reducer
const globalReducer = (state, action) => {
  switch (action.type) {
    case "CURSOR_TYPE": {
      return {
        ...state,
        cursorType: action.cursorType,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(globalReducer, {
    cursorType: null,
    cursorStyles: ["hovered"],
  });

  return (
    <GlobalDispatchContext.Provider value={dispatch}>
      <GlobalStateContext.Provider value={state}>
        {children}
      </GlobalStateContext.Provider>
    </GlobalDispatchContext.Provider>
  );
}

export default GlobalProvider;
