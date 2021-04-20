import React from "react";
import { Text, View } from "react-native";

import BookInterface from "../../utils/BookInterface";
import noThumb from "../../images/noThumbnail.png";

import { Container, BookImage, Title, Author } from "./styles";
interface BookProps {
  book: BookInterface;
  home: boolean;
}

function Book({ book, home }: BookProps) {
  return (
    <Container home={home}>
      <BookImage
        source={
          book.volumeInfo && book.volumeInfo.imageLinks
            ? {
                uri: book.volumeInfo.imageLinks.smallThumbnail,
              }
            : noThumb
        }
      />
      <View>
        <Title numberOfLines={1}>{book.volumeInfo.title}</Title>
        <Author numberOfLines={1}>{book.volumeInfo.authors}</Author>
      </View>
    </Container>
  );
}

export default Book;
