import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";

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

export const Title = styled.Text`
  margin-left: 8px;
  font-weight: 700;
  font-size: 24px;
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

export const SectionTitle = styled.Text`
  font-weight: 700;
  font-size: 18px;
  color: ${(props) => props.theme.colors.text};
`;

export const SectionWrapper = styled.View`
  margin-bottom: 24px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Amount = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${(props) => props.theme.colors.primary};
`;

export const BookList = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  flex: 1;
  height: 100%;
`;
