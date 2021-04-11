import { API_KEY } from "@env";
import React, { useCallback, useEffect, useState, useRef } from "react";
import axios from "axios";

import { Modalize } from "react-native-modalize";
import { View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import { useTheme } from "../../contexts/theme";
import { Container } from "../../styles/global";
import searchImage from "../../images/search.png";

import Book from "../../components/Book";
import BookForm from "../../components/BookForm";
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
interface BookProps {
  volumeInfo: {
    imageLinks: {
      thumbnail: string | undefined;
    };
    title: string;
    authors: string;
    pageCount: number;
    description: string;
  };
}
export interface SearchProps {
  navigation: NavigationScreenProp<any, any>;
}

function Search({ navigation }: SearchProps) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState<BookProps | null>(null);
  const [notFound, setNotFound] = useState(false);

  const modalizeRef = useRef<Modalize>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (search === "") {
      setBooks([]);
    }
  }, [search]);

  function handleOpenModal(book: BookProps) {
    setSelectedBook(book);
    modalizeRef.current?.open();
  }

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
    <>
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
              placeholder="Search by title or ISBN (just numbers)"
              placeholderTextColor={theme.colors.lightText}
              value={search}
              onChangeText={setSearch}
            />
            <InputIcon onPress={() => handleSubmit()}>
              <Feather
                name="search"
                size={20}
                color={theme.colors.background}
              />
            </InputIcon>
          </Wrapper>

          <Books>
            {books && books.length === 0 ? (
              <SearchImage source={searchImage} />
            ) : books && books.length > 0 && !notFound ? (
              books.map((book, index) => (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => handleOpenModal(book)}
                >
                  <Book book={book} home={false} />
                </TouchableWithoutFeedback>
              ))
            ) : (
              <NotFound />
            )}
          </Books>
        </Main>
      </Container>

      <Modalize
        ref={modalizeRef}
        modalStyle={{
          backgroundColor: theme.colors.background,
          bottom: -48,
        }}
        handleStyle={{ backgroundColor: theme.colors.lightText }}
      >
        <BookForm book={selectedBook} />
      </Modalize>
    </>
  );
}

export default Search;
