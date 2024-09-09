"use client"

import { createContext, useContext, useState, ReactNode } from "react";

type MyContextType = {
  toggleModal: boolean;
  setToggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const MyContext = createContext<MyContextType | undefined>(undefined);

interface MyProviderProps {
  children: ReactNode;
}

function MyProvider({ children }: MyProviderProps) {
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  return (
    <MyContext.Provider value={{ toggleModal, setToggleModal }}>
      {children}
    </MyContext.Provider>
  );
}

// Custom hook with type safety
function useMyContext(): MyContextType {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
}

export { MyProvider, useMyContext };
