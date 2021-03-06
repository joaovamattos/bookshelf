import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

export const Main = styled.ScrollView`
  flex: 1;
`;

export const Section = styled.View`
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

export const Title = styled.Text`
  margin-left: 8px;
  font-size: 24px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const Button = styled(RectButton)`
  margin-left: 8px;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  background-color: ${(props) => props.theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const SectionTitle = styled.Text`
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const SectionWrapper = styled.View`
  margin-bottom: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Amount = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.bold};
`;

export const BookList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  height: 100%;
`;

export const NoBooks = styled.Text`
  margin-bottom: 48px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.medium};
`;

export const DeleteButton = styled(RectButton)`
  margin: 0 24px;
  height: 42px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 4px;
  flex-direction: row;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DeleteButtonText = styled.Text`
  margin-left: 8px;
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 14px;
  color: ${(props) => props.theme.colors.background};
`;
