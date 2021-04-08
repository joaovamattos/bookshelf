import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";

import { useTheme } from "../../contexts/theme";
import { Container } from "../../styles/global";
import Reading from "../../components/Reading";
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
} from "./styles";
import { FlatList } from "react-native-gesture-handler";

function Dashboard() {
  const { theme, toggleTheme } = useTheme();

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
            <Button>
              <Feather name="search" size={20} color={theme.colors.text} />
            </Button>
          </Wrapper>
        </Header>

        <View>
          <SectionWrapper>
            <SectionTitle>I'm reading</SectionTitle>
            <Amount>(01)</Amount>
          </SectionWrapper>
          <Reading />
        </View>

        <View>
          <SectionWrapper>
            <SectionTitle>I want to read</SectionTitle>
            <Amount>(02)</Amount>
          </SectionWrapper>

          <BookList>
            <Book />
            <Book />
          </BookList>
        </View>

        <View>
          <SectionWrapper>
            <SectionTitle>Read</SectionTitle>
            <Amount>(04)</Amount>
          </SectionWrapper>

          <BookList>
            <Book />
            <Book />
            <Book />
            <Book />
          </BookList>
        </View>
      </Main>
    </Container>
  );
}

export default Dashboard;
