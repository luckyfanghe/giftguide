import styled from "styled-components";

export const Body = styled.div`
  display: "flex",
  justifyContent: "center",
  height:  ${props => (props.height ? props.height : 40)}px solid,
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Image = styled.img.attrs(props => ({
  alt: props.alt,
  src: props.src
}))`
  width:  ${props => (props.width ? props.width : 40)}px solid,
  height:  ${props => (props.height ? props.height : 40)}px solid,
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;
