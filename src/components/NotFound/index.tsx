import React from "react";
import taken from "../../images/taken.png";

import { Container, Title, Subtitle, NotFoundImage } from "./styles";

function NotFound() {
  return (
    <Container>
      <Title numberOfLines={1}>Ops!</Title>
      <Subtitle>
        I know it hurts, but the book you are looking for has not been found! :c
      </Subtitle>
      <NotFoundImage source={taken} />
    </Container>
  );
}

export default NotFound;
