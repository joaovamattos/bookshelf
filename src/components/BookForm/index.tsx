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
  book: Book;
}

interface List {
  label: string | null;
  value: string | null;
}

function BookForm({ book }: BookProps) {
  const [list, setList] = useState<List>({
    label: "I want to read",
    value: "wantToRead",
  });
  const { theme } = useTheme();

  function handleSubmit() {
    const data = {
      list,
      book,
    };

    console.log(data);
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
