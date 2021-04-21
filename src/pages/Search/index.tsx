import { API_KEY } from "@env";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Modalize } from "react-native-modalize";
import { View } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { NavigationScreenProp } from "react-navigation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import axios from "axios";

import { useTheme } from "../../contexts/theme";
import { Container } from "../../styles/global";
import searchImage from "../../images/search.png";
import BookInterface from "../../utils/BookInterface";

import Book from "../../components/Book";
import BookForm from "../../components/BookForm";
import NotFound from "../../components/NotFound";
import Scanner from "../../components/Scanner";

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
  ScanButton,
  ButtonText,
} from "./styles";

interface SearchProps {
  navigation: NavigationScreenProp<any, any>;
}

function Search({ navigation }: SearchProps) {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState<BookInterface | null>(null);
  const [notFound, setNotFound] = useState(false);

  const [scanValue, setScanValue] = useState("");
  const [scannerVisible, setScannerVisible] = useState(false);

  const modalizeRef = useRef<Modalize>(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    if (search === "") {
      setBooks([]);
    }
  }, [search]);

  useEffect(() => {
    if (scanValue !== "") {
      setSearch(scanValue);
      const loadBooks = async () => {
        const response = await axios.get(
          `https://www.googleapis.com/books/v1/volumes?q=${scanValue}&key=${API_KEY}`
        );
        const data = response.data;
        if (data.totalItems === 0) {
          setNotFound(true);
        }

        setNotFound(false);
        setBooks(data.items);
      };
      loadBooks();
    }
  }, [scanValue]);

  function handleOpenModal(book: BookInterface) {
    setSelectedBook(book);
    modalizeRef.current?.open();
  }

  const handleSubmit = useCallback(async () => {
    if (search !== "") {
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
    }
  }, [search]);

  if (scannerVisible) {
    return (
      <Scanner
        setScanValue={setScanValue}
        setScannerVisible={setScannerVisible}
      />
    );
  }

  return (
    <>
      <Container>
        <Main showsVerticalScrollIndicator={false}>
          <Header>
            <View>
              <Title>Search books</Title>
              <Subtitle>Find the book of your dreams</Subtitle>
            </View>
            <Wrapper>
              <Button onPress={() => toggleTheme()}>
                {theme.title === "dark" ? (
                  <Feather name="moon" size={20} color={theme.colors.text} />
                ) : (
                  <Feather name="sun" size={20} color={theme.colors.text} />
                )}
              </Button>
              <Button onPress={() => navigation.navigate("Dashboard")}>
                <Feather
                  name="arrow-left"
                  size={20}
                  color={theme.colors.text}
                />
              </Button>
            </Wrapper>
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

          <ScanButton onPress={() => setScannerVisible(true)}>
            <AntDesign
              name="barcode"
              size={20}
              color={theme.colors.background}
            />
            <ButtonText>Find by ISBN</ButtonText>
          </ScanButton>

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
        }}
        handleStyle={{ backgroundColor: theme.colors.lightText }}
        modalTopOffset={64}
      >
        {selectedBook !== null && <BookForm book={selectedBook} home={false} />}
      </Modalize>
    </>
  );
}

export default Search;
