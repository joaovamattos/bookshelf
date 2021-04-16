import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useCallback,
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

  const handleLog = useCallback((list: Array<Book>) => {
    console.log("list");
    console.log(list);
  }, []);

  const handleChangeWantToRead = useCallback(
    (list: Array<Book>) => {
      console.log("list");
      console.log(list);

      setWantToRead(list);

      console.log("wantToRead");
      console.log(wantToRead);
    },
    [wantToRead]
  );

  const handleChangeReading = useCallback(
    (list) => {
      setReading(list);
    },
    [reading]
  );

  const handleChangeRead = useCallback(
    (list) => {
      setRead(list);
    },
    [read]
  );

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
