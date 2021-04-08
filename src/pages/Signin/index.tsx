import React from "react";
import { Feather } from "@expo/vector-icons";

import { Container } from "../../styles/global";
import { Wrapper, Header, Title, Input, Button, ButtonText } from "./styles";

function Signin() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <Feather name="book" size={32} color="black" />
          <Title>Bookshelf</Title>
        </Header>

        <Input placeholder="Username" />
        <Button>
          <ButtonText>Sign In</ButtonText>
        </Button>
      </Wrapper>
    </Container>
  );
}

export default Signin;
