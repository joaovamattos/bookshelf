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
  font-weight: 600;
  font-size: 18px;
  color: ${(props) => props.theme.colors.lightText};
  flex-wrap: wrap;
`;

export const Author = styled.Text`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 12px;
  color: ${(props) => props.theme.colors.lightText};
  flex-wrap: wrap;
`;

export const Pages = styled.Text`
  font-weight: 600;
  font-size: 12px;
  color: ${(props) => props.theme.colors.primary};
`;
