import React, { useState } from "react";
import { View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

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
    };
    title: string;
    authors: string;
    pageCount: number;
    description: string;
  };
}
interface BookProps {
  book: Book | null;
}

function BookForm({ book }: BookProps) {
  const [list, setList] = useState({ label: "I want to read", value: "want" });
  const { theme } = useTheme();

  if (!book) {
    return (
      <Container>
        <BookImage
          source={{
            uri:
              "https://images-na.ssl-images-amazon.com/images/I/5115VsJpk3L._SX319_BO1,204,203,200_.jpg",
          }}
        />
        <View>
          <Title>O Hobbit</Title>
          <Author>J.R.R. Tolkien</Author>
        </View>
      </Container>
    );
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
              { label: "I want to read", value: "want" },
              { label: "I' m reading", value: "reading" },
              { label: "Read", value: "read" },
            ]}
            placeholder="Select a list"
            placeholderStyle={{
              color: theme.colors.primary,
              fontWeight: "bold",
            }}
            defaultValue={list}
            containerStyle={{ height: 48 }}
            style={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
              borderWidth: 2,
              borderRadius: 4,
            }}
            itemStyle={{
              justifyContent: "flex-start",
            }}
            labelStyle={{
              color: theme.colors.primary,
            }}
            dropDownStyle={{
              backgroundColor: theme.colors.background,
              borderColor: theme.colors.primary,
              borderWidth: 2,
            }}
            arrowColor={theme.colors.primary}
            onChangeItem={(item: any, index: number) => setList(item)}
          />
        </PickerWrapper>

        <Button>
          <ButtonText>Add to list</ButtonText>
        </Button>
      </View>
    </Container>
  );
}

export default BookForm;
