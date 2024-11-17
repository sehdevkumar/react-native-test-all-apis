import React, { createContext, useContext, useReducer } from "react";
import { Text, View, TouchableOpacity, Pressable } from "react-native";

const UseContextApiSetup = () => {
  return (
    <AppContextProvider>
      <Text>UseContextApiSetup</Text>
      <AppContextConsumer />
    </AppContextProvider>
  );
};

export default UseContextApiSetup;

const AppContextConsumer = () => {
  const { user, setUser } = useAppContext();

  const handleChange = () => {
    setUser("SET_USER","i am happy to see you");
  };

  return (
    <Pressable onPress={handleChange}>

      <Text>CLick Me {user}</Text>
    </Pressable>
  );
};

// ======================================Setup For UseContext API=============================================

type AppContextType = {
  user: string;
  setUser: (type:string,payload:any) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const reducer = (state: AppContextType, action: { type: string; payload: string }) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

const AppContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { user: "I am here user", setUser: (type:string,  payload:any) => dispatch({ type: type, payload: payload }) });
  return (
    <AppContext.Provider value={state}>
      <View style={{ padding: 20, flex: 1 }}>{children}</View>
    </AppContext.Provider>
  );
}

const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within a AppContextProvider");
  }
  return context;
};
