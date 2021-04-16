import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { useBooks } from "../../contexts/books";
import { useTheme } from "../../contexts/theme";
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
interface BookProps {
  book: Book;
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
  const { theme } = useTheme();
  const {
    wantToRead,
    reading,
    read,
    setWantToRead,
    setReading,
    setRead,
  } = useBooks();

  async function handleSubmit() {
    switch (list.value) {
      case "wantToRead":
        if (wantToRead !== undefined) {
          setWantToRead([...wantToRead, book]);
        } else {
          setWantToRead([book]);
        }

        if (home) {
          const newReading = reading.filter((element) => element !== book);
          setReading(newReading);

          const newRead = read.filter((element) => element !== book);
          setRead(newRead);
        }
        break;
      case "reading":
        if (reading !== undefined) {
          setReading([...reading, book]);
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
        }
        break;
      case "read":
        if (read !== undefined) {
          setRead([...read, book]);
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
        }
        break;
      default:
        break;
    }
  }

  if (book === null) {
    return <Container />;
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
            labelStyle={{ color: theme.colors.primary }}
            dropDownStyle={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
              borderWidth: 2,
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
