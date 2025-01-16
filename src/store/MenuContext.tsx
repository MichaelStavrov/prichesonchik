'use client';

import React, { FC, ReactNode, createContext, useState } from 'react';

export interface MenuContextValues {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ContextProps {
  children: ReactNode;
}

export const MenuContext = createContext<MenuContextValues | null>(null);

const Context: FC<ContextProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        isOpen,
        setIsOpen,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export default Context;
