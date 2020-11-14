import { createContext } from "react";

// localStorage.js
export const loadState = () => {
  const serializedState = localStorage.getItem("state");
  if (serializedState !== null) {
    return JSON.parse(serializedState);
  } else return initialContext;
};
// localStorage.js
export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch {
    // ignore write errors
  }
};

export const initialState = {
  isLogged: false,
  user: {
    id: "",
    role: "",
  },
  error: "",
};

export const initialContext = {
  contextState: initialState,
  setContext: () => {
    throw new Error("setContext function must be overridden");
  },
};
export const Context = createContext(initialContext);
