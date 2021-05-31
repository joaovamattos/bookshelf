import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  justify-content: center;
  width: ${Dimensions.get("window").width - 48}px;
`;

export const Title = styled.Text`
  align-self: center;
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 48px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Subtitle = styled.Text`
  align-self: center;
  text-align: center;
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`;

export const NotFoundImage = styled.Image`
  width: 200px;
  height: 220px;
  align-self: center;
`;
