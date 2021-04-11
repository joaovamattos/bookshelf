import { RectButton } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
  padding: 36px 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
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

export const Author = styled.Text`
  max-width: 200px;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightText};
`;

export const Pages = styled.Text`
  font-weight: 700;
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary};
`;

export const Description = styled.Text`
  margin: 12px 0;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.lightText};
`;

export const PickerWrapper = styled.View`
  height: 48px;
  margin-bottom: 16px;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 48px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  margin-left: 16px;
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.background};
`;
