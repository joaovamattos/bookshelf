import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const Description = styled.View`
  width: 60%;
`;

export const BookImage = styled.Image`
  width: 120px;
  height: 180px;
  margin-right: 16px;
`;

export const Title = styled.Text`
  margin-bottom: 4px;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 18px;
  color: ${(props) => props.theme.colors.lightText};
  flex-wrap: wrap;
`;

export const Author = styled.Text`
  margin-bottom: 16px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightText};
  flex-wrap: wrap;
`;

export const Pages = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary};
`;
