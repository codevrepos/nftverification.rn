import React, { createContext, useState } from 'react';

const defaultModalContextValues = {
  filter: undefined,
  search: undefined
};

export const ModalContext = createContext(defaultModalContextValues);

export const ModalContextProvider = ({ children }) => {
  const [filter, setFilter] = useState(undefined);
  const [search, setSearch] = useState(undefined);

  return (
    <ModalContext.Provider value={{
      filter,
      search,
      setFilter,
      setSearch
    }}>
      {children}
    </ModalContext.Provider>
  )
};