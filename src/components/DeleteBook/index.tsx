import React from "react";
import { View } from "react-native";
import noThumb from "../../images/noThumbnail.png";

import { Container, BookImage, Title, Warning } from "./styles";

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
}

function DeleteBook({ book }: BookProps) {
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
        <Warning>Are you sure you want to delete this book?</Warning>
      </View>
    </Container>
  );
}

export default DeleteBook;
