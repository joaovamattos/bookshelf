import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export const Main = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Books = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const Title = styled.Text`
  font-weight: 700;
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
`;

export const Subtitle = styled.Text`
  margin-top: 4px;
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.text};
`;

export const Button = styled(RectButton)`
  margin-left: 8px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.foreground};
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput`
  margin-bottom: 24px;
  padding-left: 24px;
  width: ${Dimensions.get("window").width - 96}px;
  height: 48px;
  background: ${(props) => props.theme.colors.foreground};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  color: ${(props) => props.theme.colors.text};
`;

export const InputIcon = styled(RectButton)`
  margin-bottom: 24px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.colors.primary};
  justify-content: center;
  align-items: center;
`;

export const SearchImage = styled.Image`
  margin: auto;
  margin-top: 36px;
  width: 240px;
  height: 270px;
`;
