import styled from "styled-components";
import { mainWidth } from "../../../constants/utils";

export const Body = styled.div`
  margin: auto;
  padding-top: 40px;
  padding-bottom: 30px;
  width: ${mainWidth}%;
  display: flex;
  flex-direction: column;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const Title = styled.div`
  width: 100%;
  font-family: WorkSans-ExtraLight;
  text-align: left;
  font-size: 50px;
  letter-spacing: 0.15px;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const SubTitle = styled.div`
  font-family: Futura Light;
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.15px;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const MoreDetail = styled.span`
  padding-left: 5px;
  cursor: pointer;
  font-size: 16px;
  ${props => (!props.visible ? "display:none" : "display:inline")};
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const MainContainer = styled.div`
  padding-top: 20px;
  display: flex;
  flex-direction: row;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const UpdatePhotoContainer = styled.div`
  width: 35%;
  font-family: Futura Light;
  text-align: left;
  font-size: 13px;
  letter-spacing: 0.15px;
  margin-right: 10px;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const WishItemImage = styled.img.attrs(props => ({
  alt: "banner",
  src: props.src
}))`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: ${props => (props.border ? 1 : 0)}px solid gray;
`;

export const FormContainer = styled.div`
  width: 60%;
  text-align: left;
  font-family: Futura Light;
  font-size: 13px;
  letter-spacing: ;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const DetailContainer = styled.div`
  flex-direction: row;
  align-items: center;
  ${props => (!props.visible ? "display:none" : "display:flex")};
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const FormDetail = styled.div`
  width: 100%;
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;

export const DetailContainerOther = styled.div`
  ${props => (!props.visible ? "display:none" : "display:inline")};
  border: ${props => (props.border ? 1 : 0)}px solid black;
`;
