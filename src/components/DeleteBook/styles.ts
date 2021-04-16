import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 36px 24px;
`;

export const BookImage = styled.Image`
  align-self: center;
  width: 140px;
  height: 210px;
  margin-bottom: 24px;
`;

export const Title = styled.Text`
  text-align: center;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  flex-wrap: wrap;
`;

export const Warning = styled.Text`
  text-align: center;
  margin-top: 12px;
  font-weight: 700;
  font-size: 20px;
  color: ${(props) => props.theme.colors.text};
  flex-wrap: wrap;
`;
