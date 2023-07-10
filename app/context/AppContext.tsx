"use client";

import { createContext, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import { StaticImageData } from "next/image";
import { WomenState } from "../women/page";

type AppContextProviderProps = {
  children: React.ReactNode;
};

export type ValueProps = {
  cart: WomenState[];
  setCart: Dispatch<SetStateAction<WomenState[]>>;
  orderCount: number;
  setOrderCount: Dispatch<SetStateAction<number>>;
};

export const AppContext = createContext<ValueProps>({} as ValueProps);

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  // States
  const [cart, setCart] = useState<WomenState[]>([]);
  const [orderCount, setOrderCount] = useState<number>(0);

  return (
    <AppContext.Provider value={{ cart, setCart, orderCount, setOrderCount }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
