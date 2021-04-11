import React, { useState } from "react";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";

import { useTheme } from "../../contexts/theme";
import { Container } from "../../styles/global";
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

function Dashboard({ navigation }: DashboardProps) {
  const { theme, toggleTheme } = useTheme();
  const [readingBooks, setReadingBooks] = useState([]);
  const [wantToReadBooks, setWantToReadBooks] = useState([]);
  const [readBooks, setReadBooks] = useState([]);

  return (
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
            <Amount>(01)</Amount>
          </SectionWrapper>
          {readingBooks.length > 0 ? (
            readingBooks.map((book, index) => (
              <Reading key={index} book={book} />
            ))
          ) : (
            <NoBooks>No books yet :c</NoBooks>
          )}
        </View>

        <View>
          <SectionWrapper>
            <SectionTitle>I want to read</SectionTitle>
            <Amount>(02)</Amount>
          </SectionWrapper>

          <BookList>
            {wantToReadBooks.length > 0 ? (
              wantToReadBooks.map((book, index) => (
                <Book home={true} key={index} book={book} />
              ))
            ) : (
              <NoBooks>No books yet :c</NoBooks>
            )}
          </BookList>
        </View>

        <View>
          <SectionWrapper>
            <SectionTitle>Read</SectionTitle>
            <Amount>(04)</Amount>
          </SectionWrapper>

          <BookList>
            {readBooks.length > 0 ? (
              readBooks.map((book, index) => (
                <Book home={true} key={index} book={book} />
              ))
            ) : (
              <NoBooks>No books yet :c</NoBooks>
            )}
          </BookList>
        </View>
      </Main>
    </Container>
  );
}

export default Dashboard;
