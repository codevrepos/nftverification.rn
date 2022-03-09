import React, {createContext, useState} from 'react';
import {dedupe} from '../utils/dedupe';

const defaultModalContextValues = {
  filter: undefined,
  search: undefined,
};

export const ModalContext = createContext(defaultModalContextValues);

export const ModalContextProvider = ({children}) => {
  const [filter, setFilter] = useState(undefined);
  const [search, setSearch] = useState(undefined);
  const [isCameraTabModalOpen, setIsCameraTabModalOpen] = useState(false);

  // TODO: replace with API data
  const data = [
    {
      imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png',
      collection: 'Azuki',
      name: '#1',
      tokenId: 1,
    },
    {
      imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png',
      collection: 'Bored Ape Yacht Club',
      name: '#2',
      tokenId: 2,
    },
    {
      imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png',
      collection: 'CryptoPunks',
      name: '#3',
      tokenId: 3,
    },
    {
      imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png',
      collection: 'CyberKongz',
      name: '#4',
      tokenId: 4,
    },
    {
      imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png',
      collection: 'Azuki',
      name: '#1',
      tokenId: 1,
    },
    {
      imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png',
      collection: 'Bored Ape Yacht Club',
      name: '#1234567',
      tokenId: 2,
    },
    {
      imageUrl: 'https://www.penthousepantherclub.com/fur_paisley_small.png',
      collection: 'CryptoPunks',
      name: '#3',
      tokenId: 3,
    },
  ];

  return (
    <ModalContext.Provider
      value={{
        filter,
        search,
        setFilter,
        setSearch,
        data,
        isCameraTabModalOpen,
        setIsCameraTabModalOpen,
      }}>
      {children}
    </ModalContext.Provider>
  );
};
