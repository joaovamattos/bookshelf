import React, { useState, useRef, useCallback, useEffect } from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";
import { Modalize } from "react-native-modalize";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import BookInterface from "../../utils/BookInterface";
import { useBooks } from "../../contexts/books";
import { useTheme } from "../../contexts/theme";
import { Container } from "../../styles/global";

import BookForm from "../../components/BookForm";
import Book from "../../components/Book";
import CurrentBook from "../../components/CurrentBook";
import DeleteBook from "../../components/DeleteBook";

import {
  Section,
  Header,
  Wrapper,
  Title,
  Button,
  SectionTitle,
  Amount,
  SectionWrapper,
  BookList,
  NoBooks,
  DeleteButton,
  DeleteButtonText,
} from "./styles";

export interface DashboardProps {
  navigation: NavigationScreenProp<any, any>;
}

function Dashboard({ navigation }: DashboardProps) {
  const [selectedBook, setSelectedBook] = useState<BookInterface | null>(null);
  const [selectedList, setSelectedList] = useState("");

  const { theme, toggleTheme } = useTheme();
  const {
    wantToRead,
    setWantToRead,
    reading,
    setReading,
    read,
    setRead,
  } = useBooks();

  const modalizeRef = useRef<Modalize>(null);
  const removeModalizeRef = useRef<Modalize>(null);

  const handleRemoveBook = useCallback((book: BookInterface, list: string) => {
    switch (list) {
      case "wantToRead":
        const filteredWantToRead = wantToRead.filter(
          (element) => element !== book
        );
        setWantToRead(filteredWantToRead);
        break;
      case "reading":
        const filteredReading = reading.filter((element) => element !== book);
        setReading(filteredReading);
        break;
      case "read":
        const filteredRead = read.filter((element) => element !== book);
        setRead(filteredRead);
        break;
      default:
        break;
    }
    removeModalizeRef.current?.close();
  }, []);

  const handleOpenRemoveModal = useCallback(
    (book: BookInterface, list: string) => {
      setSelectedBook(book);
      setSelectedList(list);
      removeModalizeRef.current?.open();
    },
    []
  );

  const handleOpenModal = useCallback((book: BookInterface) => {
    setSelectedBook(book);
    modalizeRef.current?.open();
  }, []);

  useEffect(() => {
    modalizeRef.current?.close();
  }, [wantToRead, reading, read]);

  return (
    <>
      <Container>
        <Section showsVerticalScrollIndicator={false}>
          <Header>
            <Wrapper>
              <Feather name="book" size={20} color={theme.colors.text} />
              <Title>Bookshelf</Title>
            </Wrapper>
            <Wrapper>
              <Button onPress={() => toggleTheme()}>
                {theme.title === "dark" ? (
                  <Feather name="moon" size={20} color={theme.colors.text} />
                ) : (
                  <Feather name="sun" size={20} color={theme.colors.text} />
                )}
              </Button>
              <Button onPress={() => navigation.navigate("Search")}>
                <Feather name="search" size={20} color={theme.colors.text} />
              </Button>
            </Wrapper>
          </Header>

          <Section>
            <SectionWrapper>
              <SectionTitle>I'm reading</SectionTitle>
              <Amount>({reading.length})</Amount>
            </SectionWrapper>
            <BookList>
              {reading.length > 0 ? (
                reading.map((book, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => handleOpenModal(book)}
                    onLongPress={() => handleOpenRemoveModal(book, "reading")}
                  >
                    <CurrentBook book={book} />
                  </TouchableWithoutFeedback>
                ))
              ) : (
                <NoBooks>No books yet :c</NoBooks>
              )}
            </BookList>
          </Section>

          <Section>
            <SectionWrapper>
              <SectionTitle>I want to read</SectionTitle>
              <Amount>({wantToRead.length})</Amount>
            </SectionWrapper>
            <BookList>
              {wantToRead.length > 0 ? (
                wantToRead.map((book, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => handleOpenModal(book)}
                    onLongPress={() =>
                      handleOpenRemoveModal(book, "wantToRead")
                    }
                  >
                    <Book book={book} home={true} />
                  </TouchableWithoutFeedback>
                ))
              ) : (
                <NoBooks>No books yet :c</NoBooks>
              )}
            </BookList>
          </Section>

          <Section>
            <SectionWrapper>
              <SectionTitle>Read</SectionTitle>
              <Amount>({read.length})</Amount>
            </SectionWrapper>
            <BookList>
              {read.length > 0 ? (
                read.map((book, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => handleOpenModal(book)}
                    onLongPress={() => handleOpenRemoveModal(book, "read ")}
                  >
                    <Book book={book} home={true} />
                  </TouchableWithoutFeedback>
                ))
              ) : (
                <NoBooks>No books yet :c</NoBooks>
              )}
            </BookList>
          </Section>
        </Section>
      </Container>

      <Modalize
        ref={modalizeRef}
        modalStyle={{
          backgroundColor: theme.colors.background,
        }}
        handleStyle={{ backgroundColor: theme.colors.lightText }}
        modalTopOffset={64}
      >
        {selectedBook !== null && <BookForm book={selectedBook} home={true} />}
      </Modalize>

      <Modalize
        ref={removeModalizeRef}
        modalStyle={{
          backgroundColor: theme.colors.background,
        }}
        handleStyle={{ backgroundColor: theme.colors.lightText }}
        modalTopOffset={84}
      >
        {selectedBook !== null && selectedList !== "" && (
          <View>
            <DeleteBook book={selectedBook} />
            <DeleteButton
              onPress={() => handleRemoveBook(selectedBook, selectedList)}
            >
              <DeleteButtonText>Delete</DeleteButtonText>
            </DeleteButton>
          </View>
        )}
      </Modalize>
    </>
  );
}

export default Dashboard;
