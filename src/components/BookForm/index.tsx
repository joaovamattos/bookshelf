import React, { useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";

import { useBooks } from "../../contexts/books";
import { useTheme } from "../../contexts/theme";
import BookInterface from "../../utils/BookInterface";
import noThumb from "../../images/noThumbnail.png";

import {
  Container,
  Wrapper,
  BookImage,
  Title,
  Author,
  Pages,
  Description,
  PickerWrapper,
  Button,
  ButtonText,
} from "./styles";

interface BookProps {
  book: BookInterface;
  home: boolean;
}
interface List {
  label: string | null;
  value: string | null;
}

function BookForm({ book, home }: BookProps) {
  const [list, setList] = useState<List>({
    label: "I want to read",
    value: "wantToRead",
  });

  const navigation = useNavigation();
  const { theme } = useTheme();
  const { wantToRead, reading, read, setWantToRead, setReading, setRead } =
    useBooks();

  async function handleSubmit() {
    switch (list.value) {
      case "wantToRead":
        if (wantToRead !== undefined || wantToRead !== []) {
          if (!wantToRead.includes(book)) {
            setWantToRead([...wantToRead, book]);
          }
        } else {
          setWantToRead([book]);
        }

        if (home) {
          const newReading = reading.filter((element) => element !== book);
          setReading(newReading);

          const newRead = read.filter((element) => element !== book);
          setRead(newRead);
        } else {
          navigation.navigate("Dashboard");
        }
        break;
      case "reading":
        if (reading !== undefined || reading !== []) {
          if (!reading.includes(book)) {
            setReading([...reading, book]);
          }
        } else {
          setReading([book]);
        }

        if (home) {
          const newWantToRead = wantToRead.filter(
            (element) => element !== book
          );
          setWantToRead(newWantToRead);

          const newRead = read.filter((element) => element !== book);
          setRead(newRead);
        } else {
          navigation.navigate("Dashboard");
        }
        break;
      case "read":
        if (read !== undefined || read !== []) {
          if (!read.includes(book)) {
            setRead([...read, book]);
          }
        } else {
          setRead([book]);
        }

        if (home) {
          const newWantToRead = wantToRead.filter(
            (element) => element !== book
          );
          setWantToRead(newWantToRead);

          const newReading = reading.filter((element) => element !== book);
          setReading(newReading);
        } else {
          navigation.navigate("Dashboard");
        }
        break;
      default:
        break;
    }
  }

  return (
    <Container>
      <BookImage
        source={
          book.volumeInfo && book.volumeInfo.imageLinks
            ? {
                uri: book.volumeInfo.imageLinks.thumbnail,
              }
            : noThumb
        }
      />
      <View>
        <Title numberOfLines={1}>{book.volumeInfo.title}</Title>
        <Wrapper>
          <Author numberOfLines={1}>{book.volumeInfo.authors}</Author>
          <Pages numberOfLines={1}>{book.volumeInfo.pageCount} pages</Pages>
        </Wrapper>
        <Description numberOfLines={3}>
          {book.volumeInfo.description}
        </Description>

        <PickerWrapper>
          <DropDownPicker
            items={[
              { label: "I want to read", value: "wantToRead", selected: true },
              { label: "I' m reading", value: "reading" },
              { label: "Read", value: "read" },
            ]}
            onChangeItem={(item) => {
              Promise.resolve(setList(item));
            }}
            arrowColor={theme.colors.primary}
            containerStyle={{ height: 48 }}
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
              borderWidth: 2,
              borderRadius: 4,
            }}
            itemStyle={{ justifyContent: "flex-start" }}
            labelStyle={{
              color: theme.colors.primary,
              fontFamily: theme.fonts.regular,
            }}
            dropDownStyle={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
              borderWidth: 2,
              fontFamily: theme.fonts.regular,
            }}
          />
        </PickerWrapper>

        <Button onPress={handleSubmit}>
          <ButtonText>Add to list</ButtonText>
        </Button>
      </View>
    </Container>
  );
}

export default BookForm;
