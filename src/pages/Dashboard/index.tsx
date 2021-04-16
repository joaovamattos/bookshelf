import React, { useState, useRef, useCallback, useEffect } from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";
import { Modalize } from "react-native-modalize";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { useBooks } from "../../contexts/books";
import { useTheme } from "../../contexts/theme";
import { Container } from "../../styles/global";

import BookForm from "../../components/BookForm";
import Reading from "../../components/ReadingBook";
import Book from "../../components/Book";

import {
  Main,
  Header,
  Wrapper,
  Title,
  Button,
  SectionTitle,
  Amount,
  SectionWrapper,
  BookList,
  NoBooks,
} from "./styles";

export interface DashboardProps {
  navigation: NavigationScreenProp<any, any>;
}
interface BookProps {
  volumeInfo: {
    imageLinks: {
      smallThumbnail: string | undefined;
      thumbnail: string | undefined;
    };
    title: string;
    authors: string;
    pageCount: number;
    description: string;
  };
}

function Dashboard({ navigation }: DashboardProps) {
  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null);
  const { theme, toggleTheme } = useTheme();
  const { wantToRead, reading, read } = useBooks();
  const modalizeRef = useRef<Modalize>(null);

  const handleOpenModal = useCallback((book: BookProps) => {
    setSelectedBook(book);
    modalizeRef.current?.open();
  }, []);

  return (
    <>
      <Container>
        <Main showsVerticalScrollIndicator={false}>
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

          <View>
            <SectionWrapper>
              <SectionTitle>I'm reading</SectionTitle>
              <Amount>({reading?.length})</Amount>
            </SectionWrapper>
            {reading?.length > 0 ? (
              reading.map((book, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleOpenModal(book)}
                >
                  <Reading key={index} book={book} />
                </TouchableWithoutFeedback>
              ))
            ) : (
              <NoBooks>No books yet :c</NoBooks>
            )}
          </View>

          <View>
            <SectionWrapper>
              <SectionTitle>I want to read</SectionTitle>
              <Amount>({wantToRead?.length})</Amount>
            </SectionWrapper>
            <BookList>
              {wantToRead?.length > 0 ? (
                wantToRead.map((book, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => handleOpenModal(book)}
                  >
                    <Book book={book} home={true} />
                  </TouchableWithoutFeedback>
                ))
              ) : (
                <NoBooks>No books yet :c</NoBooks>
              )}
            </BookList>
          </View>

          <View>
            <SectionWrapper>
              <SectionTitle>Read</SectionTitle>
              <Amount>({read?.length})</Amount>
            </SectionWrapper>

            <BookList>
              {read?.length > 0 ? (
                read.map((book, index) => (
                  <TouchableWithoutFeedback
                    key={index}
                    onPress={() => handleOpenModal(book)}
                  >
                    <Book book={book} home={true} />
                  </TouchableWithoutFeedback>
                ))
              ) : (
                <NoBooks>No books yet :c</NoBooks>
              )}
            </BookList>
          </View>
        </Main>
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
    </>
  );
}

export default Dashboard;
