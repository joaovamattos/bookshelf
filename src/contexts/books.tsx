import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

import usePersistedState from "../utils/usePersistedState";

interface Book {
  volumeInfo: {
    imageLinks: {
      thumbnail: string | undefined;
      smallThumbnail: string | undefined;
    };
    title: string;
    authors: string;
    pageCount: number;
    description: string;
  };
}

interface BoosContextData {
  wantToRead: Array<Book>;
  reading: Array<Book>;
  read: Array<Book>;
  setWantToRead: Dispatch<SetStateAction<Book[]>>;
  setReading: Dispatch<SetStateAction<Book[]>>;
  setRead: Dispatch<SetStateAction<Book[]>>;
}

const BooksContext = createContext<BoosContextData>({} as BoosContextData);

export const BooksProvider: React.FC = ({ children }) => {
  const [wantToRead, setWantToRead] = usePersistedState<Array<Book>>(
    "wantToRead",
    []
  );
  const [reading, setReading] = usePersistedState<Array<Book>>("reading", []);
  const [read, setRead] = usePersistedState<Array<Book>>("read", []);

  return (
    <BooksContext.Provider
      value={{
        wantToRead,
        reading,
        read,
        setWantToRead,
        setReading,
        setRead,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export function useBooks() {
  const context = useContext(BooksContext);
  return context;
}
