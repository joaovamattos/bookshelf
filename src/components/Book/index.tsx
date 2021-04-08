import React from "react";

import { Container, BookImage, Description, Title, Author } from "./styles";

function Book() {
  return (
    <Container>
      <BookImage
        source={{
          uri:
            "https://images-na.ssl-images-amazon.com/images/I/51msVf94L2L._SX346_BO1,204,203,200_.jpg",
        }}
      />
      <Description>
        <Title numberOfLines={1}>Harry potter e o enigma do príncipe</Title>
        <Author numberOfLines={1}>J.K. Rowling</Author>
      </Description>
    </Container>
  );
}

export default Book;
