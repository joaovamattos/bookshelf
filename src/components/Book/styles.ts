import styled from "styled-components/native";

interface ContainerProps {
  home: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100px;
  margin-bottom: 24px;
  margin-right: ${(props) => (props.home ? 16 : 0)}px;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 150px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  max-width: 100px;
  margin-bottom: 4px;
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightText};
  flex-wrap: wrap;
`;

export const Author = styled.Text`
  max-width: 100px;
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightText};
`;
