import React from "react";
import { View } from "react-native";

import BookInterface from "../../utils/BookInterface";
import noThumb from "../../images/noThumbnail.png";

import { Container, BookImage, Title, Warning } from "./styles";
interface BookProps {
  book: BookInterface;
}

function DeleteBook({ book }: BookProps) {
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
