import styled from "styled-components/native";

export const Container = styled.View`
  width: 116px;
`;

export const Description = styled.View`
  width: 60%;
`;

export const BookImage = styled.Image`
  width: 100px;
  height: 150px;
  margin-bottom: 8px;
`;

export const Title = styled.Text`
  max-width: 100px;
  margin-bottom: 4px;
  font-weight: 600;
  font-size: 16px;
  color: ${(props) => props.theme.colors.lightText};
  flex-wrap: wrap;
`;

export const Author = styled.Text`
  max-width: 100px;
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightText};
`;
