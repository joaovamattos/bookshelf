import { API_KEY } from "@env";

import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";
import { useTheme } from "../../contexts/theme";
import { Container } from "../../styles/global";
import searchImage from "../../images/search.png";

import Book from "../../components/Book";
import NotFound from "../../components/NotFound";

import {
  Main,
  Header,
  Wrapper,
  Title,
  Subtitle,
  Button,
  Input,
  InputIcon,
  SearchImage,
  Books,
} from "./styles";

export interface SearchProps {
  navigation: NavigationScreenProp<any, any>;
}

function Search({ navigation }: SearchProps) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    if (search === "") {
      setBooks([]);
    }
  }, [search]);

  const handleSubmit = useCallback(async () => {
    const replaceSearch = search.replace(/\s/g, "+");
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${replaceSearch}&key=${API_KEY}`
    );
    const data = response.data;

    if (data.totalItems === 0) {
      setNotFound(true);
    }

    setNotFound(false);
    setBooks(data.items);
  }, [search]);

  return (
    <Container>
      <Main showsVerticalScrollIndicator={false}>
        <Header>
          <View>
            <Title>Search books</Title>
            <Subtitle>Find the book of your dreams</Subtitle>
          </View>
          <Button onPress={() => navigation.navigate("Dashboard")}>
            <Feather name="arrow-left" size={20} color={theme.colors.text} />
          </Button>
        </Header>
        <Wrapper>
          <Input
            placeholder="Type to search..."
            placeholderTextColor={theme.colors.lightText}
            value={search}
            onChangeText={setSearch}
          />
          <InputIcon onPress={() => handleSubmit()}>
            <Feather name="search" size={20} color={theme.colors.background} />
          </InputIcon>
        </Wrapper>

        <Books>
          {books && books.length === 0 ? (
            <SearchImage source={searchImage} />
          ) : books && books.length > 0 && !notFound ? (
            books.map((book, index) => (
              <Book key={index} book={book} home={false} />
            ))
          ) : (
            <NotFound />
          )}
        </Books>
      </Main>
    </Container>
  );
}

export default Search;
