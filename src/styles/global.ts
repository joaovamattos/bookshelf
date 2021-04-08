import styled from "styled-components/native";
import Constants from "expo-constants";

export const Container = styled.View`
  flex: 1;
  padding: 24px;
  padding-top: ${Constants.statusBarHeight + 30}px;
  background-color: ${(props) => props.theme.colors.background};
`;
