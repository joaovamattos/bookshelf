import React from "react";

import noThumb from "../../images/noThumbnail.png";

import {
  Container,
  BookImage,
  Description,
  Title,
  Author,
  Pages,
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

interface ReadingBookProps {
  book: Book;
}

function ReadingBook({ book }: ReadingBookProps) {
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

export default ReadingBook;
