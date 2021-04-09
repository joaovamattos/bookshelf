import React from "react";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";

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

export interface DashboardProps {
  navigation: NavigationScreenProp<any, any>;
}

function Dashboard({ navigation }: DashboardProps) {
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
          <Reading />
        </View>

        <View>
          <SectionWrapper>
            <SectionTitle>I want to read</SectionTitle>
            <Amount>(02)</Amount>
          </SectionWrapper>

          <BookList>
            <Book home={true} book={null} />
            <Book home={true} book={null} />
          </BookList>
        </View>

        <View>
          <SectionWrapper>
            <SectionTitle>Read</SectionTitle>
            <Amount>(04)</Amount>
          </SectionWrapper>

          <BookList>
            <Book home={true} book={null} />
            <Book home={true} book={null} />
            <Book home={true} book={null} />
            <Book home={true} book={null} />
          </BookList>
        </View>
      </Main>
    </Container>
  );
}

export default Dashboard;
