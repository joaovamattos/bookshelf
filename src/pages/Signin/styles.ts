import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
`;

export const Title = styled.Text`
  margin-left: 8px;
  margin-bottom: 36px;
  font-weight: 700;
  font-size: 32px;
  color: ${(props) => props.theme.colors.text};
`;

export const Input = styled.TextInput`
  margin-bottom: 24px;
  padding: 20px 24px;
  width: 100%;
  height: 54px;
  background: ${(props) => props.theme.colors.foreground};
  border-radius: 4px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 54px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.background};
`;
