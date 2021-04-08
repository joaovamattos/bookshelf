import React from "react";

import {
  Container,
  BookImage,
  Description,
  Title,
  Author,
  Pages,
} from "./styles";

function Reading() {
  return (
    <Container>
      <BookImage
        source={{
          uri:
            "https://images-na.ssl-images-amazon.com/images/I/5115VsJpk3L._SX319_BO1,204,203,200_.jpg",
        }}
      />
      <Description>
        <Title>O Hobbit</Title>
        <Author>J.R.R. Tolkien</Author>
        <Pages>336 páginas</Pages>
      </Description>
    </Container>
  );
}

export default Reading;
