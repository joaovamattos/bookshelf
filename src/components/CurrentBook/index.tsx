import React from "react";

import BookInterface from "../../utils/BookInterface";
import noThumb from "../../images/noThumbnail.png";

import {
  Container,
  BookImage,
  Description,
  Title,
  Author,
  Pages,
} from "./styles";

interface CurrentBookProps {
  book: BookInterface;
}

function CurrentBook({ book }: CurrentBookProps) {
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
      <Description>
        <Title>{book.volumeInfo.title}</Title>
        <Author>{book.volumeInfo.authors}</Author>
        <Pages>{book.volumeInfo.pageCount} pages</Pages>
      </Description>
    </Container>
  );
}

export default CurrentBook;
