import React from "react";
import { View } from "react-native";

import noThumb from "../../images/noThumbnail.png";

import { Container, BookImage, Title, Author } from "./styles";
interface Book {
  volumeInfo: {
    imageLinks: {
      smallThumbnail: string | undefined;
    };
    title: string;
    authors: string;
  };
}
interface BookProps {
  book: Book | null;
  home: boolean;
}

function Book({ book, home }: BookProps) {
  if (!book) {
    return (
      <Container home={home}>
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
