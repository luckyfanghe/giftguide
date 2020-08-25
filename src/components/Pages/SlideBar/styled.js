import styled from "styled-components";

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;
  font-size: 40px;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Logo = styled.img.attrs(props => ({
  alt: props.alt,
  src: props.src
}))`
  display: flex;
  align-self: center;
  width: 250px;
  height: 250px;
  object-fit: cover;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Title = styled.div`
  font-size: 40px;
  text-align: center;
  color: black;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Button = styled.button.attrs(props => ({
  type: "button"
}))`
  width: 100%;
  height: 40px;
  font-size: 15px;
  background-color: #333333;
  color: white;
  :hover {
    background-color: #666666;
    color: white;
  }
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Link = styled.div`
  font-size: 15px;
  color: #333333;
  padding-top: 20px;
  cursor: pointer;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Error = styled.div`
  font-size: 15px;
  color: red;
  padding-top: 10px;
  cursor: pointer;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;
export const Spinner = styled.div`
  padding-top: 20px;
  align-self: center;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;
